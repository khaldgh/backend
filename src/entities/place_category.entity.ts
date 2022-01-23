import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"

@Entity()
export class PlaceCategory {

    @PrimaryColumn()
    place_id: number;

    @PrimaryColumn()
    category_id: number;

}