import { Exclude, Expose } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';
import { Category } from 'src/categories/category.entity';
import { Comment } from 'src/comments/comment.entity';
import { Place } from 'src/places/entities/place.entity';
import { JoinTable, ManyToMany, OneToMany } from 'typeorm';

export class UserFavoriteDto {
  @Expose()
  user_id: number;

  @Expose()
  email: string;
  
  @IsString()
  password: string;
  
  @ManyToMany(() => Place)
  @JoinTable()
  places: Place[];


}
