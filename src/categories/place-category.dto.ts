
import { Expose } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';

export class PlaceCateogryDto {
    // @IsNumber()
    @Expose()
    category_id: number;

    // @IsString()
    @Expose()
    category: string;
}