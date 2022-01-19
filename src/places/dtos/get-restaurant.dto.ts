import { IsString } from 'class-validator';

export class GetRestaurantDto {

    @IsString()
    restaurant: string

    @IsString()
    city: string


}