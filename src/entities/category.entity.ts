import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Place } from "./place.entity";
import { subCategory } from "./sub_category.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    @OneToMany(() => subCategory, (SubCategory) => SubCategory.sub_category_id)
    category_id: number;

    @Column()
    category: string;

    // @OneToMany(() => Place, (place) => place.category_id)
    // places: Place[];


}