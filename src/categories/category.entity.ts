import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, PrimaryColumn, ManyToMany, JoinTable } from "typeorm"
import { Place } from "../places/entities/place.entity";
import { SubCategory } from "../places/entities/sub_category.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    category: string;

    @OneToMany(() => SubCategory, (subCategories) => subCategories.category)
    subCategories: SubCategory[];    

//     @ManyToMany(() => User)
//   @JoinTable()
//   users: User[];

}