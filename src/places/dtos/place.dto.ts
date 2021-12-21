import { Expose, Transform } from 'class-transformer';

export class PlaceDto {
  @Expose()
  id: number;
  @Expose()
  title: string;
  @Expose()
  time: string;
  @Expose()
  category: number;
  @Expose()
  image: number;
  @Expose()
  description: number;
  @Expose()
  isFavorite: boolean;
  @Expose()
  approved: boolean;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
