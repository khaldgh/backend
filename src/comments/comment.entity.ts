import { Category } from 'src/categories/category.entity';
import { Place } from 'src/places/entities/place.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Column()
  comment: string;

  @ManyToOne(() => User, (user) => user.Comment)
  user: User;

  @ManyToOne(() => Place, (place) => place.comments)
  place: Place

  
}
