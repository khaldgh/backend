import { IsString } from 'class-validator';

export class GetRestaurantDto {

    @IsString()
    resaurant: string

    @IsString()
    city: string


}