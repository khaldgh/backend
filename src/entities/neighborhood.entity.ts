import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Place } from "./place.entity";

@Entity()
export class Neighborhood {

    @PrimaryGeneratedColumn()
    neighborhood_id: number;

    @Column()
    neighborhood: string;

    @Column()
    city_id: number;

    @OneToMany(() => Place, (place) => place.category_id)
    places: Place[];
}