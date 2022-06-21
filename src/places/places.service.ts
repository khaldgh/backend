import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { Neighborhood } from 'src/neighborhoods/neighborhood.entity';
import { UserDto } from 'src/users/dtos/user.dto';
import { Category } from 'src/categories/category.entity';
import { PlaceCateogryDto } from 'src/categories/place-category.dto';
import { ApprovePlaceDto } from './dtos/approve-place.dto';
import { DateTime } from 'aws-sdk/clients/devicefarm';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place) private repo: Repository<Place>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  plcId: number = 0;

  async create(
    createPlaceDto: CreatePlaceDto,
    user: UserDto,
  ) {
    const place = this.repo.create(createPlaceDto);
    place.neighborhoods = place.neighborhoods
    // console.log(category.category_id)
    // const foundCat = await this.categoryRepo.findOne(category.category_id);
    // place.category = foundCat;
    place.creatorId = user;
    await this.repo.save(place).finally(() => {
      this.plcId = place.place_id;
    });
    return this.plcId;
  }

  async changeApproval(id: string, updatedPlace: ApprovePlaceDto) {
    var place = await this.repo.findOne(id);
    if (!place) {
      throw new NotFoundException('place not found');
    }

    place.title = updatedPlace.title;
    place.approved = updatedPlace.approved;
    place.description = updatedPlace.description;
    place.phone = updatedPlace.phone;
    place.website = updatedPlace.website;
    place.instagram = updatedPlace.instagram;

    return this.repo.save(place);
  }

  async deletePlace(id: number) {
    this.repo.delete(id);
  }

  async getOnePlace(id: number) {
    // return await this.repo.findOne(id);
    const place = await this.repo
      .createQueryBuilder()
      .select(
        'place_id,title,description,approved,phone,website,instagram,Sunday,monday,tuesday,wednesday,thursday,friday,saturday, category_id, category,user_id, username, email',
      )
      .innerJoin('category', 'c', 'c.category_id = categoryCategoryId')
      .innerJoin('user', 'u', 'u.user_id = creatorIdUserId')
      .where(`place_id = ${id}`)
      .getRawOne();

    const neighborhoods = await this.repo
      .createQueryBuilder()
      .select('neighborhood_id, neighborhood')
      .innerJoin(
        'place_neighborhoods_neighborhood',
        'pnn',
        'place_id = pnn.placePlaceId',
      )
      .innerJoin(
        'neighborhood',
        'n',
        'n.neighborhood_id = pnn.neighborhoodNeighborhoodId',
      )
      .where(`place_id = ${id}`)
      .getRawMany();

    place.neighborhoods = neighborhoods;

    const fp = await this.repo.findOne(place.place_id);

    fp.neighborhoods = neighborhoods;
    fp.approved = true;
    console.log(fp);

    await this.repo.save(fp);

    return place;
  }

  async getFavoritePlaces(userId) {
    const places = await this.repo
      .createQueryBuilder()
      .select(
        'place_id,title, description,approved,phone,website,instagram,Sunday,monday,tuesday,wednesday,thursday,friday,saturday, category_id, category, email',
      )
      .innerJoin('category', 'c', 'c.category_id = categoryCategoryId')
      .innerJoin('user', 'u')
      .innerJoin('users_Favorites', 'uf', `uf.userUserId = ${userId}`)
      .where('place_id = placePlaceId')
      .andWhere('approved = 1')
      .andWhere(`user_id = ${userId}`)
      .orderBy('creationDate', 'DESC')
      .getRawMany();

    const neighborhoods = await this.repo
      .createQueryBuilder()
      .select(
        'neighborhood_id, neighborhood, neighborhoodNeighborhoodId, placePlaceId',
      )
      .innerJoin(
        'place_neighborhoods_neighborhood',
        'pnn',
        'place_id = pnn.placePlaceId',
      )
      .innerJoin(
        'neighborhood',
        'n',
        'n.neighborhood_id = pnn.neighborhoodNeighborhoodId',
      )
      .getRawMany();

    places.forEach((place) => {
      let nList: Neighborhood[] = [];
      for (let i = 0; i < neighborhoods.length; i++) {
        place.place_id === neighborhoods[i].placePlaceId
          ? nList.push(neighborhoods[i])
          : 0;
      }
      place.neighborhoods = nList;
      this.repo.save(place);
    });
    return places;
  }

  async getPlaces() {
    const places = await this.repo
      .createQueryBuilder()
      .select(
        'place_id,title, description,approved,phone,website,instagram,Sunday,monday,tuesday,wednesday,thursday,friday,saturday, email',
      )
      .innerJoin('category', 'c', 'c.category_id = categoryCategoryId')
      .innerJoin('user', 'u', 'u.user_id = creatorIdUserId')
      .where('approved = 1')
      .orderBy('place_id', 'ASC')
      .getRawMany();

      const categories = await this.repo
      .createQueryBuilder()
      .select(
        'category_id, category',
      )
      .innerJoin('category', 'c', 'c.category_id = categoryCategoryId')
      .getRawOne()

    const neighborhoods = await this.repo
      .createQueryBuilder()
      .select(
        'neighborhood_id, neighborhood, neighborhoodNeighborhoodId, placePlaceId',
      )
      .innerJoin(
        'place_neighborhoods_neighborhood',
        'pnn',
        'place_id = pnn.placePlaceId',
      )
      .innerJoin(
        'neighborhood',
        'n',
        'n.neighborhood_id = pnn.neighborhoodNeighborhoodId',
      )
      .getRawMany();

      console.log(categories);

      places.forEach((place) => {
        let cList: Category[] = [];
        for (let i = 0; i < categories.length; i++) {
          place.categoryCategoryId === categories[i].category_id
            ? cList.push(categories[i])
            : 0;
        }
        console.log(cList)
        place.categories = cList;
        this.repo.save(place);
      });

    places.forEach((place) => {
      let nList: Neighborhood[] = [];
      for (let i = 0; i < neighborhoods.length; i++) {
        place.place_id === neighborhoods[i].placePlaceId
          ? nList.push(neighborhoods[i])
          : 0;
      }
      place.neighborhoods = nList;
      this.repo.save(place);
    });
    return places;
  }

  async mostDayVisitedPlaces(){
    await this.repo.createQueryBuilder()
    .select('*')
    .where('updated_at >= NOW() - INTERVAL 1 DAY')
    .getRawMany()
  }

  async mostWeekVisitedPlaces(){
    await this.repo.createQueryBuilder()
    .select('*')
    .where('updated_at >= NOW() - INTERVAL 1 WEEK')
    .getRawMany()
  }

  async queryPlaces(categories: string) {
    const catsArray: number[] = [];
    var cats = categories['categories'];
    var splitCats = cats.split(',');
    for (var num of splitCats) {
      console.log(num);
      var parsed = parseInt(num);
      catsArray.push(parsed);
    }

    const places = await this.repo
      .createQueryBuilder()
      .select(
        'place_id,title, description,approved,phone,website,instagram,Sunday,monday,tuesday,wednesday,thursday,friday,saturday, category_id, category, email',
      )
      .innerJoin('category', 'c', 'c.category_id = categoryCategoryId')
      .innerJoin('user', 'u', 'u.user_id = creatorIdUserId')
      .where('approved = 1')
      .andWhere('categoryCategoryId in (:catsArray)', { catsArray })
      .orderBy('place_id', 'ASC')
      .getRawMany();

    const neighborhoods = await this.repo
      .createQueryBuilder()
      .select(
        'neighborhood_id, neighborhood, neighborhoodNeighborhoodId, placePlaceId',
      )
      .innerJoin(
        'place_neighborhoods_neighborhood',
        'pnn',
        'place_id = pnn.placePlaceId',
      )
      .innerJoin(
        'neighborhood',
        'n',
        'n.neighborhood_id = pnn.neighborhoodNeighborhoodId',
      )
      .getRawMany();

    places.forEach((place) => {
      let nList: Neighborhood[] = [];
      for (let i = 0; i < neighborhoods.length; i++) {
        place.place_id === neighborhoods[i].placePlaceId
          ? nList.push(neighborhoods[i])
          : 0;
      }
      place.neighborhoods = nList;
      this.repo.save(place);
    });
    return places;
  }

  async getPreApprovedPlaces() {
    const places = await this.repo
      .createQueryBuilder()
      .select(
        'place_id,title,description,approved,phone,website,instagram,Sunday,monday,tuesday,wednesday,thursday,friday,saturday, category_id, category, email',
      )
      .innerJoin('category', 'c', 'c.category_id = categoryCategoryId')
      .innerJoin('user', 'u', 'u.user_id = creatorIdUserId')
      .orderBy('place_id', 'ASC')
      .where('approved = 0')
      .getRawMany();

    const neighborhoods = await this.repo
      .createQueryBuilder()
      .select(
        'neighborhood_id, neighborhood, neighborhoodNeighborhoodId, placePlaceId, city_id, city',
      )
      .innerJoin(
        'place_neighborhoods_neighborhood',
        'pnn',
        'place_id = pnn.placePlaceId',
      )
      .innerJoin(
        'neighborhood',
        'n',
        'n.neighborhood_id = pnn.neighborhoodNeighborhoodId',
      )
      .innerJoin('city', 'c', 'n.cityCityId = city_id')
      .getRawMany();

    places.forEach((place) => {
      let nList: Neighborhood[] = [];
      for (let i = 0; i < neighborhoods.length; i++) {
        place.place_id === neighborhoods[i].placePlaceId
          ? nList.push(neighborhoods[i])
          : 0;
      }
      place.neighborhoods = nList;
      this.repo.save(place);
    });
    return places;
  }
}
