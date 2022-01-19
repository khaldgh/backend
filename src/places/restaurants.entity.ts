import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Cities } from "./cities.entity";

@Entity()
export class Restaurants {

    @PrimaryGeneratedColumn()
    res_id: number;

    @Column()
    restaurant: string;

    @ManyToOne(() => Cities, (city) => city.restaurants)
    city: Cities;
}