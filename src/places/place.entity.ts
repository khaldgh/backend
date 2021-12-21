import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Place {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    time: Date;

    @Column()
    category: string;

    @Column()
    image: string;

    @Column()
    description: string;

    @Column()
    isFavorite: boolean;

    @Column({ default: false})
    approved: boolean;

    @ManyToOne(() => User, (user) => user.places)
    user: User;
}