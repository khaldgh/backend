import {
  IsBoolean,
  IsDate,
  IsLatitude,
  IsLongitude,
  IsString,
  IsNumber,
  Max,
  max,
  Min,
  min,
} from 'class-validator';
import { Neighborhood } from 'src/places/entities/neighborhood.entity';
import { OpeningHours } from 'src/places/entities/opening_hours.entity';
import { SubCategory } from 'src/places/entities/sub_category.entity';

export class CreatePlaceDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  signature: string;
  @IsNumber()
  sub_category_id: SubCategory;
  @IsNumber()
  sub_category_id_2: SubCategory;
  @IsNumber()
  sub_category_id_3: SubCategory;
  @IsNumber()
  neighborhood_id: Neighborhood;
  @IsNumber()
  opening_hours_id: OpeningHours;
  @IsBoolean()
  isFavorite: boolean;
  @IsBoolean()
  approved: boolean;
  @IsNumber()
  phone: number;
  @IsString()
  website: string;
  @IsString()
  instagram: string;
}
