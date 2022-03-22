import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Category } from '../../categories/category.entity';

@Entity()
export class SubCategory {

  @PrimaryGeneratedColumn()
  sub_category_id: number;

  @Column()
  sub_category: string;

  @ManyToOne(() => Category, (category) => category.category)
  category: Category;
  
}
