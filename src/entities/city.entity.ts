import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"

@Entity()
export class City {

    @PrimaryGeneratedColumn()
    city_id: number;

    @Column()
    city: string;

}