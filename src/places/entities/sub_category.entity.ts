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
export class SubCategory {
  @PrimaryGeneratedColumn()
  sub_category_id: number;

  @Column()
  sub_category: string;

  @OneToMany(() => Place, (place) => place.sub_category_id)
    place: Place[];

  @ManyToOne(() => Category, (category) => category.category_id)
  category: Category;
}
