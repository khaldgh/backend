import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Restaurants } from "./restaurants.entity";

@Entity()
export class Cities {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @OneToMany(() => Restaurants, (restaurant) => restaurant.city)
    restaurants: Restaurants[];
}