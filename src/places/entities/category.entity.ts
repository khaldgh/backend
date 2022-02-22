import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Place } from "./place.entity";
import { SubCategory } from "./sub_category.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    category: string;

    @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
    subCategory: SubCategory[];    

    // @OneToMany(() => Place, (place) => place.category_id)
    // places: Place[];


}