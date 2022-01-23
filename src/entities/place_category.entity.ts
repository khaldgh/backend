import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"

@Entity()
export class PlaceCategory {

    @PrimaryGeneratedColumn()
    place_id: number;

    @PrimaryGeneratedColumn()
    category_id: number;

}