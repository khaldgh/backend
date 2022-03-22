import { Comment } from 'src/comments/comment.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Category } from '../../categories/category.entity';
import { Neighborhood } from '../../neighborhoods/neighborhood.entity';
import { Image } from './image.entity';
import { SubCategory } from './sub_category.entity';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  place_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  signature: string;

  @ManyToMany(() => SubCategory)
  @JoinTable()
  subcategories: SubCategory[];

  @ManyToMany(() => Neighborhood)
  @JoinTable()
  neighborhoods: Neighborhood[];

  @Column({ default: false })
  isFavorite: boolean;

  @Column({ default: false })
  approved: boolean;

  @Column({ default: null })
  phone: number;

  @Column({ default: null })
  website: string;

  @Column({ default: null })
  instagram: string;

  @Column()
  Sunday: string;

  @Column()
  Monday: string;

  @Column()
  Tuesday: string;

  @Column()
  Wednesday: string;

  @Column()
  Thursday: string;

  @Column()
  Friday: string;

  @Column()
  Saturday: string;

  @OneToMany(() => Image, (images) => images.place)
  images: Image[];

  @ManyToOne(() => User, (user) => user.place)
  creatorId: User;

  @OneToMany(() => Comment, (comment) => comment.place)
  comments: Comment[];

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
