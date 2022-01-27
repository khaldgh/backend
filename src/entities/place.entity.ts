import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
import { Neighborhood } from './neighborhood.entity';
import { OpeningHours } from './opening_hours.entity';

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
  
  @ManyToOne(() => Category, (category) => category.places)
  category_id: number;

  @ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.places)
  neighborhood_id: number;

  @ManyToOne(() => OpeningHours, (openingHours) => openingHours.places)
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

  @Column()
  twitter: string;

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
