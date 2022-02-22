import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { City } from "./city.entity";
import { Place } from "./place.entity";

@Entity()
export class Neighborhood {

    @PrimaryGeneratedColumn()
    neighborhood: string;

    @ManyToOne(() => City, (city) => city.neighborhoods)
    city: string;

    @OneToMany(() => Place, (places) => places.neighborhoods)
    places: Place[];
}