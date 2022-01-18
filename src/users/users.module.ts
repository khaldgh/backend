import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from 'src/users/strategies/google.strategy';
import { FacebookStrategy } from 'src/users/strategies/facebook.strategy';
import { InstagramAuthModule } from '@nestjs-hybrid-auth/instagram';
import { HybridAuthModule } from '@nestjs-hybrid-auth/all';
import { TwitterStrategy } from './strategies/twitter.startegy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),],
  controllers: [UsersController],
  providers: [UsersService, AuthService, GoogleStrategy, FacebookStrategy, TwitterStrategy],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
