import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Category } from './category.entity';
import { Place } from './place.entity';

@Entity()
export class subCategory {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Place, (place) => place.sub_category_id)
  sub_category_id: number;

  @Column()
  sub_category: string;

  @ManyToOne(() => Category, (category) => category.category_id)
  category_id: number;
}
