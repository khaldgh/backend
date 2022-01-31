import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Category } from './category.entity';
import { Neighborhood } from './neighborhood.entity';
import { OpeningHours } from './opening_hours.entity';
import { subCategory } from './sub_category.entity';

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
  
  @ManyToOne(() => subCategory, (subCategory) => subCategory.sub_category_id)
  sub_category_id: number;

  @ManyToOne(() => subCategory, (subCategory) => subCategory.sub_category_id)
  sub_category_id_2: number;

  @ManyToOne(() => subCategory, (subCategory) => subCategory.sub_category_id)
  sub_category_id_3: number;

  @ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.places)
  neighborhood_id: number;

  @OneToOne(() => OpeningHours, (openingHours) => openingHours.place)
  opening_hours_id: number;

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

  @ManyToOne(() => User, (user) => user.places)
  user_id: User;

//   @ManyToMany(() => TransferType)
//   @JoinTable({
//     name: 'addressGroupsToTransferTypes',
//     joinColumn: { name: 'addressGroupId' },
//     inverseJoinColumn: { name: 'transferTypeId' },
//   })
//   public transferTypes: TransferType[];
}
