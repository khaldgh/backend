import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { User } from 'src/users/user.entity';
import { GetPlaceDto } from './dtos/get-place.dto';
import { PlaceDto } from './dtos/place.dto';
import { SubCategory } from 'src/places/entities/sub_category.entity';
import { Neighborhood } from 'src/neighborhoods/neighborhood.entity';
import { Comment } from 'src/comments/comment.entity';
import { UserDto } from 'src/users/dtos/user.dto';
import { UserFavoriteDto } from './dtos/user-favorite.dto';

@Injectable()
export class PlacesService {
  constructor(@InjectRepository(Place) private repo: Repository<Place>) {}

  create(
    createPlaceDto: CreatePlaceDto,
    subcategories: SubCategory[],
    neighborhoods: Neighborhood[],
    user: UserDto,
  ) {
    console.log(subcategories['subcategories']);
    const place = this.repo.create(createPlaceDto);
    place.subcategories = subcategories['subcategories'];
    place.neighborhoods = neighborhoods['neighborhoods'];
    place.creatorId = user;
    // console.log(place, 'THE SERVICE');
    return this.repo.save(place);
  }

  async changeApproval(id: string, approved: boolean) {
    const place = await this.repo.findOne(id);
    if (!place) {
      throw new NotFoundException('place not found');
    }

    place.approved = approved;
    return this.repo.save(place);
  }

  async getPlaces() {
    const places = await this.repo.find();
    return places;
  }

  

  // async newCommentPlace(
  //   commentUser: User,
  //   commentDto: CommentDto,
  //   place: Place,
  // ) {
  //    const placeComment = await this.commentRepo.save({
  //       comment: commentDto.comment,
  //       user: commentUser,
  //    })

  //   place.comment = [...place.comment, placeComment]
  //   this.repo.save(place);

  // }

  // Helper Example

  // createQuery({
  //   year, make, model, long, lat, milage
  //   title
  //  }: GetPlaceDto ){
  //     return this.repo.createQueryBuilder()
  //     .select('*')
  //     .where('title = ":title"',{ title })
  //     .andWhere('make = :make', {  })
  //     .andWhere('model = :model', {  })
  //     .andWhere(':long BETWEEN -5 AND 5',  {  })
  //     .andWhere(':lat BETWEEN -5 AND 5',  { })
  //     .andWhere('approved IS TRUE')
  //     .orderBy('ABS(milage - :milage)', 'DESC')
  //     .setParameters({  })
  //     .limit(3)
  //     .getRawMany()
  // }

  async createQuery({
    // year, make, model, long, lat, milage
    title,
  }: GetPlaceDto) {
    return await this.repo
      .createQueryBuilder()
      .select('*')
      .leftJoin(
        'sub_category',
        'sc',
        'sub_category.sub_category_id = place.subCategoryIdSubCategoryId',
      )
      .where('title = :title', { title })
      // .andWhere('make = :make', {  })
      // .andWhere('model = :model', {  })
      // .andWhere(':long BETWEEN -5 AND 5',  {  })
      // .andWhere(':lat BETWEEN -5 AND 5',  { })
      // .andWhere('approved IS TRUE')
      // .orderBy('ABS(milage - :milage)', 'DESC')
      // .setParameters({  })
      // .limit(3)
      .getRawMany();
  }
}
