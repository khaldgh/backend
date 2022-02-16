import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { User } from 'src/users/user.entity';
import { GetPlaceDto } from './dtos/get-place.dto';
import { PlaceDto } from './dtos/place.dto';
import { SubCategory } from 'src/places/entities/sub_category.entity';
import { Neighborhood } from 'src/places/entities/neighborhood.entity';

@Injectable()
export class PlacesService {
  constructor(@InjectRepository(Place) private repo: Repository<Place>) {}

  create(createPlaceDto: CreatePlaceDto, user: User) {
    const place = this.repo.create(createPlaceDto);
    place.userId = user;
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
    place_id
   }: PlaceDto ){
      return this.repo.createQueryBuilder()
      .select('*')
      .leftJoin('sub_category','sc', 'sc.sub_category_id = place.subCategoryIdSubCategoryId')
      .where('place_id = ":place_id"',{ place_id })
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
