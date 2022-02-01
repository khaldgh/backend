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
  @Transform(({ obj }) => obj.subCategory.sub_category_id)
  @Expose()
  sub_category_id: number;
  @Transform(({ obj }) => obj.subCategory.sub_category_id)
  @Expose()
  sub_category_id_2: number;
  @Transform(({ obj }) => obj.subCategory.sub_category_id)
  @Expose()
  sub_category_id_3: number;
  @Transform(({ obj }) => obj.neighborhood.neighborhood_id)
  @Expose()
  neighborhood_id: number;
  @Transform(({ obj }) => obj.opening_hours.opening_hours_id)
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

  @Transform(({ obj }) => obj.user_id.user_id)
  @Expose()
  userId: number;
}
