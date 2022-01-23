import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Place {

    @PrimaryGeneratedColumn()
    place_id: number;

    @Column()
    title: string;

    @Column()
    category_id: Date;

    @Column()
    neighborhood_id: string;

    @Column()
    opening_hours_id: string;

    @Column()
    isFavorite: boolean;

    @Column({ default: false})
    approved: boolean;

    @ManyToOne(() => User, (user) => user.places)
    user_id: User;
}