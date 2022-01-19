import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './place.entity';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { User } from 'src/users/user.entity';
import { GetRestaurantDto } from './dtos/get-restaurant.dto';

@Injectable()
export class PlacesService {
  constructor(@InjectRepository(Place) private repo: Repository<Place>) {}

  create(createPlaceDto: CreatePlaceDto, user: User) {
    const place = this.repo.create(createPlaceDto);
    place.user = user;
    return this.repo.save(place);
  }

  async changeApproval(id: string, approved: boolean){
      const place = await this.repo.findOne(id);
      if(!place){
          throw new NotFoundException('place not found');
      }

      place.approved = approved;
      return this.repo.save(place);
  }


  async getPlaces(){
    const places = await this.repo.find();
    return places;
  }

  createQuery({ 
    // year, make, model, long, lat, milage 
    city
   }: GetRestaurantDto ){
      return this.repo.createQueryBuilder()
      .select('*')
      .where('city = ":city"',{ city })
      // .andWhere('make = :make', {  })
      // .andWhere('model = :model', {  })
      // .andWhere(':long BETWEEN -5 AND 5',  {  })
      // .andWhere(':lat BETWEEN -5 AND 5',  { })
      // .andWhere('approved IS TRUE')
      // .orderBy('ABS(milage - :milage)', 'DESC')
      // .setParameters({  })
      // .limit(3)
      .getRawMany()
  }

}
