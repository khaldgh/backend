import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"

@Entity()
export class Categories {

    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    category: string;

}