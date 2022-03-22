import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class NeighborhoodDto {

    // @IsString()
    // neighborhood: string;

    @IsString()
    city: string;

}