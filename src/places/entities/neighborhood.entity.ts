import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { City } from "./city.entity";
import { Place } from "./place.entity";

@Entity()
export class Neighborhood {

    @PrimaryColumn()
    neighborhood: string;

    @ManyToOne(() => City, (city) => city.neighborhoods)
    city: City;

    @OneToMany(() => Place, (places) => places.neighborhoods)
    places: Place[];
}