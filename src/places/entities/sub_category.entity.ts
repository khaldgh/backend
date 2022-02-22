import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Place } from './place.entity';

@Entity()
export class SubCategory {
  @PrimaryColumn()
  sub_category: string;

  @OneToMany(() => Place, (place) => place.sub_category)
  place: Place[];

  @ManyToOne(() => Category, (category) => category.category)
  category: Category;
}
