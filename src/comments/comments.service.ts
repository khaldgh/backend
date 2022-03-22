import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceCommentDto } from 'src/places/dtos/place_comment.dto';
import { Place } from 'src/places/entities/place.entity';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CommentDto } from './comment.dto';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private repo: Repository<Comment>,
    @InjectRepository(Place) private placeRepo: Repository<Place>,
  ) {}

  // this function links the user, place and the comment together, to help seperate each post with their respective comments

  async userComment(
    user: User,
    commentDto: CommentDto,
    placeId: PlaceCommentDto,
  ) {
    await this.repo.save({
      comment: commentDto.comment,
      user: user,
      place: placeId,
    });


    return commentDto;
  }
}
