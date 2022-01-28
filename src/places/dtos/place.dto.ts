import { Expose, Transform } from 'class-transformer';

export class PlaceDto {
  @Expose()
  place_id: number;
  @Expose()
  title: string;
  @Expose()
  description: string;
  @Expose()
  signature: string;
  @Expose()
  sub_category_id: number;
  @Expose()
  sub_category_id_2: number;
  @Expose()
  sub_category_id_3: number;
  @Expose()
  neighborhood_id: number;
  @Expose()
  opening_hours_id: number;
  @Expose()
  isFavorite: boolean;
  @Expose()
  approved: boolean;
  @Expose()
  phone: number;
  @Expose()
  website: string;
  @Expose()
  instagram: string;

  @Transform(({ obj }) => obj.user.user_id)
  @Expose()
  userId: number;
}
