import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { Place } from "../places/entities/place.entity";
import { SubCategory } from "../places/entities/sub_category.entity";

@Entity()
export class Category {

    @PrimaryColumn()
    category: string;

    @OneToMany(() => SubCategory, (subCategories) => subCategories.category)
    subCategories: SubCategory[];    

    // @OneToMany(() => Place, (place) => place.category_id)
    // places: Place[];


}