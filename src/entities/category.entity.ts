import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Place } from "./place.entity";
import { subCategory } from "./sub_category.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    category: string;

    @OneToMany(() => subCategory, (subCategory) => subCategory.category)
    subCategory: subCategory[];    

    // @OneToMany(() => Place, (place) => place.category_id)
    // places: Place[];


}