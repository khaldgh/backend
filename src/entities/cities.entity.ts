import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"

@Entity()
export class Cities {

    @PrimaryGeneratedColumn()
    city_id: number;

    @Column()
    city: string;

}