import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"

@Entity()
export class Images {

    @PrimaryGeneratedColumn()
    image_id: number;

    @Column()
    image: string;

    @Column()
    image_owner: string;

    @Column()
    place_id: number;

}