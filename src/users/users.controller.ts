import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  UseInterceptors,
  Session,
  UseGuards,
  Req,
} from '@nestjs/common';
// import { parse } from 'path/posix';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AuthService } from './auth.service';
import { currentUser } from './decorators/current-user.decorator';
import { AuthGuard } from '../guards/auth.guard';
import * as passport from '@nestjs/passport';

@Controller('users')
// @Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get('/whoami')
  @Serialize(UserDto)
  @UseGuards(AuthGuard)
  whoAmI(@currentUser() user: User, @Session() session: any) {
    // console.log(session);
    return user;
  }

  @Get()
  @Serialize(UserDto)
  getUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Post('/signup')
  @Serialize(UserDto)
  async sendUser(@Body() body: UserDto, @Session() session: any) {
    console.log(body);
    const user = await this.authService.signup(body.email, body.password);
    session.userId = user.user_id;
    console.log(session.userId);
    return user;
  }

  @Post('/signin')
  @Serialize(UserDto)
  async signin(@Body() body: UserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.user_id;
    console.log(session);
    return user;
  }
  @Post('/signout')
  @Serialize(UserDto)
  @UseGuards(AuthGuard)
  async signout(@Session() session: any) {
    // console.log(session.userId);
    if (!session.userId) {
      throw new NotFoundException('user not found');
    }
    session.userId = null;
  }

  @Get('/google')
  @UseGuards(passport.AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('/google/callback')
  @UseGuards(passport.AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    if (!req.user) {
      return 'no user from google';
    }
    return {
      message: 'User info from google',
      user: req.user,
    };
  }

  @Get('/facebook')
  @UseGuards(passport.AuthGuard('facebook'))
  async facebookAuth(@Req() req) {}

  @Get('facebook/callback')
  @UseGuards(passport.AuthGuard('facebook'))
  facebookAuthRedirect(@Req() req) {
    console.log(req.user);
    if (!req.user) {
      return 'no user from facebook';
    }
    return {
      message: 'User info from facebook',
      user: req.user,
    };
  }

  @Get('/twitter')
  @UseGuards(passport.AuthGuard('twitter'))
  async twitterAuth(@Req() req) {}

  @Get('twitter/callback')
  @UseGuards(passport.AuthGuard('twitter'))
  twitterAuthRedirect(@Req() req) {
    console.log(req.user);
    if (!req.user) {
      return 'no user from twitter';
    }
    return {
      message: 'User info from twitter',
      user: req.user,
    };
  }

  @Get('/instagram')
  @UseGuards(passport.AuthGuard('facebook'))
  async instagramAuth(@Req() req) {}

  @Get('instagram/callback')
  @UseGuards(passport.AuthGuard('facebook'))
  instagramAuthRedirect(@Req() req) {
    console.log(req.user);
    if (!req.user) {
      return 'no user from instagram';
    }
    return {
      message: 'User info from instagram',
      user: req.user,
    };
  }
}
