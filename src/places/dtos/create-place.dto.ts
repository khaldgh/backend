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

export class CreatePlaceDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  signature: string;
  @IsNumber()
  category_id: number;
//   @IsNumber()
//   sub_category_id: number;
//   @IsNumber()
//   sub_category_id_2: number;
//   @IsNumber()
//   sub_category_id_3: number;
//   @IsNumber()
//   neighborhood_id: number;
//   @IsNumber()
//   opening_hours_id: number;
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
  twitter: string;
}
