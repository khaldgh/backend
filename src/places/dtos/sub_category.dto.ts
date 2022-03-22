import { IsNumber, IsString } from "class-validator";


export class SubcategoryDto {

    @IsNumber()
  sub_category_id: number;
}