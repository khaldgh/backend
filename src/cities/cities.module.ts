import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { City } from './city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CitiesService],
  controllers: [CitiesController]
})
export class CitiesModule {}
