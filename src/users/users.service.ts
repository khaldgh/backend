import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category.entity';
import { CreateCategoryDto } from 'src/categories/create-category.dto';
import { CategoryDto } from 'src/categories/category.dto';
import { Repository } from 'typeorm';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';
import { UserFavoriteDto } from 'src/places/dtos/user-favorite.dto';
import { Place } from 'src/places/entities/place.entity';
import { currentUser } from './decorators/current-user.decorator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    @InjectRepository(Place) private placesRepo: Repository<Place>,
  ) {}

  async findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne(id);
  }

  async find(email: string) {
    console.log(await this.repo.find({ email }));
    const user = await this.repo.find({ email });
    return user;
  }

  async create(body: UserDto) {
    const user = this.repo.create(body);
    //    console.log(user);
    const savedUser = await this.repo.save(user);
    //    console.log(savedUser);
    return savedUser;
  }

  async signupUser(email: string, password: string) {
    const createUser = this.repo.create({ email, password });

    const user = await this.repo.save(createUser);

    return user;
  }

  async setPreferences(user: User, categories: Category[]) {
    user.Categories = categories;
    await this.repo.save(user);
    return user;
  }

  async favoritePlace(user: UserFavoriteDto, id: string) {
    var idList: number[] = [];
    const place = await this.placesRepo.findOne(id);
    var placesQueryList = await this.placesRepo
      .createQueryBuilder()
      .select(
        'place_id, title, description, signature, isFavorite, approved, phone, website, instagram, sunday, monday, tuesday, wednesday, thursday, friday, saturday',
      )
      .innerJoin(
        'user_places_place',
        'upp',
        'upp.placePlaceId = place.place_id',
      )
      .where(`userUserId = ${user.user_id}`)
      .getRawMany();

    for (let i = 0; i < placesQueryList.length; i++) {
      idList.push(placesQueryList[i].place_id);
    }
    if (idList.includes(place.place_id)) {
      var duplicates = placesQueryList.filter(
        (queryPlace) => queryPlace.place_id === place.place_id,
      );
      const duplicateIndex = placesQueryList.indexOf(duplicates[0]);
      const newQuery = placesQueryList.splice(duplicateIndex, 1);
      user.places = placesQueryList;
    } else {
      user.places = [...placesQueryList, place];
    }
    return this.repo.save(user);
  }
}
