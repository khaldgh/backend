import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Category } from '../../categories/category.entity';
import { Neighborhood } from './neighborhood.entity';
import { OpeningHours } from './opening_hours.entity';
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
  
  @ManyToOne(() => SubCategory, (subCategory) => subCategory.place)
  sub_category: SubCategory;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.place)
  sub_category_2: SubCategory;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.place)
  sub_category_3: SubCategory;

  @ManyToOne(() => Neighborhood, (neighborhoods) => neighborhoods.places)
  neighborhoods: Neighborhood;

  @OneToOne(() => OpeningHours, (openingHours) => openingHours.place)
  opening_hours_id: OpeningHours;

  @Column()
  isFavorite: boolean;

  @Column({ default: false })
  approved: boolean;

  @Column()
  phone: number;

  @Column()
  website: string;

  @Column()
  instagram: string;

  @ManyToOne(() => User, (user) => user.place)
  userId: User;

//   @ManyToMany(() => TransferType)
//   @JoinTable({
//     name: 'addressGroupsToTransferTypes',
//     joinColumn: { name: 'addressGroupId' },
//     inverseJoinColumn: { name: 'transferTypeId' },
//   })
//   public transferTypes: TransferType[];
}
