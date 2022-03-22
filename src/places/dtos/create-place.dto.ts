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
import { Neighborhood } from 'src/neighborhoods/neighborhood.entity';
import { SubCategory } from 'src/places/entities/sub_category.entity';
import { SubcategoryDto } from './sub_category.dto';

export class CreatePlaceDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  signature: string;
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
  @IsString()
  sunday: string;
  @IsString()
  monday: string;
  @IsString()
  tuesday: string;
  @IsString()
  wednesday: string;
  @IsString()
  thursday: string;
  @IsString()
  friday: string;
  @IsString()
  saturday: string;

}
