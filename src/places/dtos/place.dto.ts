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
  category_id: number;
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
  @Expose()
  twitter: string;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
