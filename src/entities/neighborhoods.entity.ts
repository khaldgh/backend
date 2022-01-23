import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"

@Entity()
export class Neighborhoods {

    @PrimaryGeneratedColumn()
    neighborhood_id: number;

    @Column()
    neighborhood: string;

    @Column()
    city_id: number;
}