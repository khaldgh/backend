import {
  Body,
  Controller,
  Post,
  UseGuards,
  Patch,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { PlacesService } from './places.service';
import { User } from '../users/user.entity';
import { currentUser } from 'src/users/decorators/current-user.decorator';
import { Serialize } from '../interceptors/serialize.interceptor';
import { PlaceDto } from './dtos/place.dto';
import { ApprovePlaceDto } from './dtos/approve-place.dto';
import { AdminGuard } from 'src/guards/admin.guard';
import { GetPlaceDto } from './dtos/get-place.dto';
import { Place } from 'src/places/entities/place.entity';
import { CategoryDto } from '../categories/category.dto';
import { CommentDto } from 'src/comments/comment.dto';
import { SubCategory } from './entities/sub_category.entity';
import { SubcategoryDto } from './dtos/sub_category.dto';
import { UserDto } from 'src/users/dtos/user.dto';
import { Neighborhood } from 'src/neighborhoods/neighborhood.entity';
import { UserFavoriteDto } from './dtos/user-favorite.dto';

@Controller('places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(CreatePlaceDto)
  createPlace(
    @Body() body: CreatePlaceDto,
    @Body() subcategories: SubCategory[],
    @Body() neighborhoods: Neighborhood[],
    @currentUser() user: UserDto,
  ) {
    console.log(body, user);
    return this.placesService.create(body, subcategories, neighborhoods, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approvePlace(@Param('id') id: string, @Body() body: ApprovePlaceDto) {
    return this.placesService.changeApproval(id, body.approved);
  }

  @Get()
  @Serialize(PlaceDto)
  getEstimate(@Query() query: GetPlaceDto) {
    return this.placesService.createQuery(query);
  }

  @Get('/places')
  getPlaces() {
    return this.placesService.getPlaces();
  }

  //   @Post('/comments')
  //   newCommentPlace(
  //     commentUser: User,
  //     commentDto: CommentDto,
  //     place: Place,
  //   ){
  //     return this.placesService.newCommentPlace(commentUser, commentDto, place);
  //   }
}
