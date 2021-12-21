import { Transform } from 'class-transformer';
import {
  IsString,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class GetPlaceDto {

  @IsString()
    title: string;

    @IsDate()
    time: Date;

    @IsString()
    category: string;
    
    @IsString()
    image: string;

    @IsString()   
    description: string;
    
    
    @IsBoolean()
    isFavorite: boolean;

    @IsBoolean()
    approved: boolean;
}
