import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category.entity';
import { CreateCategoryDto } from 'src/categories/create-category.dto';
import { CategoryDto } from 'src/categories/category.dto';
import { Repository } from 'typeorm';
import { SignupUserDto } from './dtos/signup_user.dto';
import { User } from './user.entity';
import { UsersFavoriteDto } from 'src/places/dtos/users-favorite.dto';
import { Place } from 'src/places/entities/place.entity';
import { currentUser } from './decorators/current-user.decorator';
import { Admin } from './admin.entity';
import { UsersFavorites } from 'src/users-favorites/users_favorites.entity';
import { UserDto } from './dtos/user.dto';
import { devDataSource } from 'src/dataSources';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    @InjectRepository(Place) private placesRepo: Repository<Place>,
    @InjectRepository(UsersFavorites) private ufRepo: Repository<UsersFavorites>,
    @InjectRepository(UsersFavorites)
    private FavoritesRepo: Repository<UsersFavorites>,
  ) {}

  async findOne(id: number) {
    if (!id) {
      return null;
    }
    return await devDataSource.manager.findOneBy(User, {user_id: id});
  }

  async find(email: string) {
    console.log(await devDataSource.manager.find(User, {select: { email: true}}));
    const user = await devDataSource.manager.find(User, {select: { email: true}});
    return user;
  }

  async create(body: SignupUserDto) {
    const user = devDataSource.manager.create(User, body);
    //    console.log(user);
    const savedUser = await devDataSource.manager.save(user);
    //    console.log(savedUser);
    return savedUser;
  }

  async signupUser(email: string, username, password: string) {
    const createUser = devDataSource.manager.create(User, { email, username, password });

    const user = await devDataSource.manager.save(createUser);

    return user;
  }

  async setPreferences(user: User, categories: Category[]) {
    user.Categories = categories;
    await devDataSource.manager.save(user);
    return user;
  }

  async getPreferences(user: User) {
    const userId = user.user_id;
    const preferences = await devDataSource.manager
      .createQueryBuilder()
      .select('category_id, category')
      .innerJoin('preferences', 'p', 'p.userUserId = user_id')
      .innerJoin('category', 'c', 'category_id = p.categoryCategoryId')
      .where('user_id = :userId', { userId })
      .getRawMany();

      console.log(preferences);

      return preferences;
    // return user.Categories;
  }

  async favoritePlaces(user: UserDto, id: string) {
    const usersFavorite = this.FavoritesRepo.create();

    const place = await devDataSource.manager.findOneBy(Place, {place_id: parseInt(id) });

    const usersFavorites = await devDataSource.manager.find(UsersFavorites);

    const filteredObject = usersFavorites.find((object) => {
      return (
        object['userId'] === user.user_id && object['placeId'] === parseInt(id)
      );
    });

    if (usersFavorites.length == 0 || !filteredObject) {
      usersFavorite.place = place;
      usersFavorite.placeId = parseInt(id);
      usersFavorite.user = user;
      usersFavorite.userId = user.user_id;
      this.FavoritesRepo.save(usersFavorite);
    } else if (filteredObject) {
      const foundUF = await devDataSource.manager.findOneBy(
        UsersFavorites, {usersFavoriteId: filteredObject.usersFavoriteId}
      );
      foundUF.place = place;
      foundUF.user = user;
      this.FavoritesRepo.save(foundUF);
    }

    return devDataSource.manager.save(user);
  }

  async removeUserFavorite(user: UserDto, id: string) {
    const usersFavorites = await this.FavoritesRepo.find();

    const filteredObject = usersFavorites.find((object) => {
      return (
        object['userId'] === user.user_id && object['placeId'] === parseInt(id)
      );
    });

    await this.FavoritesRepo.remove(filteredObject);
  }

  async makeAdmin(user: User, session: any) {
    const foundUser = await devDataSource.manager.findOne(User, {});
    const adminUser = new Admin();
    adminUser.user = foundUser;
    session.admin = adminUser.user;
  }
}
