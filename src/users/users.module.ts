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

@Module({
  imports: [TypeOrmModule.forFeature([User]), InstagramAuthModule.forRoot({
    clientID: '630869138126008',
    clientSecret: 'e962762d70dc3085b823737ce173439a',
    callbackURL: 'http://daleel-app.herokuapp.com/users/instagram/callback'
  })],
  controllers: [UsersController],
  providers: [UsersService, AuthService, GoogleStrategy, FacebookStrategy],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
