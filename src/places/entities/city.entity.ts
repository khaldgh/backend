import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { Neighborhood } from "./neighborhood.entity";

@Entity()
export class City {

    @PrimaryColumn()
    city: string;

    @OneToMany(() => Neighborhood, (neighborhoods) => neighborhoods.city)
    neighborhoods: Neighborhood[];  

}