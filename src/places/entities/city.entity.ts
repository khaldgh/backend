import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Neighborhood } from "./neighborhood.entity";

@Entity()
export class City {

    @PrimaryGeneratedColumn()
    city: string;

    @OneToMany(() => Neighborhood, (neighborhood) => neighborhood.city)
    neighborhoods: Neighborhood[];  

}