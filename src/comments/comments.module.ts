import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from 'src/places/entities/place.entity';
import { PlacesModule } from 'src/places/places.module';
import { Comment } from './comment.entity';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Place]), PlacesModule],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
