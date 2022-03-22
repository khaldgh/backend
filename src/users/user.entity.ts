import { Category } from 'src/categories/category.entity';
import { Comment } from 'src/comments/comment.entity';
import { Place } from 'src/places/entities/place.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Place, (place) => place.creatorId)
  place: Place[];

  @OneToMany(() => Comment, (comment) => comment.user)
  Comment: Comment[];

  @ManyToMany(() => Category)
  @JoinTable()
  Categories: Category[];

  @ManyToMany(() => Place)
  @JoinTable()
  places: Place[];

  
}
