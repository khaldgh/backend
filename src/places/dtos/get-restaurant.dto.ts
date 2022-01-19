import { IsOptional, IsString } from 'class-validator';

export class GetRestaurantDto {

    @IsOptional()
    @IsString()
    restaurant: string

    @IsString()
    city: string

}