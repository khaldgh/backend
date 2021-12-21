import { IsBoolean, IsDate, IsLatitude, IsLongitude, IsString, Max, max, Min, min } from "class-validator";


export class CreatePlaceDto{

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