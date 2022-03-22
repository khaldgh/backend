import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';
import { GoogleStrategy } from 'src/users/strategies/google.strategy';
import { FacebookStrategy } from 'src/users/strategies/facebook.strategy';
import { TwitterStrategy } from './strategies/twitter.startegy';
import { Admin } from './admin.entity';
import { Owner } from './owner.entity';
import { PlacesModule } from 'src/places/places.module';
import { Place } from 'src/places/entities/place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Admin, Owner, Place]), PlacesModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    GoogleStrategy,
    FacebookStrategy,
    TwitterStrategy,
  ],
  exports: [UsersService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
