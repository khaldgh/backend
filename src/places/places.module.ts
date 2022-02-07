import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { Place } from './entities/place.entity';
import { Category } from './entities/category.entity';
import { City } from './entities/city.entity';
import { Images } from './entities/images.entity';
import { Neighborhood } from './entities/neighborhood.entity';
import { OpeningHours } from './entities/opening_hours.entity';
import { SubCategory } from './entities/sub_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place, Category, City, Images, Neighborhood, OpeningHours, SubCategory])],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
