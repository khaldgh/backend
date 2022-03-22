import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { Place } from './entities/place.entity';
import { Image } from './entities/image.entity';
import { SubCategory } from './entities/sub_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place, Image, SubCategory])],
  controllers: [PlacesController],
  providers: [PlacesService],
  exports: [PlacesService]
})
export class PlacesModule {}
