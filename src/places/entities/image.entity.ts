import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Place } from "./place.entity";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    image_id: number;

    @Column()
    image: string;

    @Column()
    image_owner: string;


    @ManyToOne(() => Place, (place) => place.images)
    place: Place;

}