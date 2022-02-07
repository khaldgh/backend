import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Category } from './category.entity';
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
  sub_category_id: SubCategory;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.place)
  sub_category_id_2: SubCategory;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.place)
  sub_category_id_3: SubCategory;

  @ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.place)
  neighborhood_id: Neighborhood;

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
