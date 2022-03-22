import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { APP_PIPE } from '@nestjs/core';
// import cookieSession from 'cookie-session';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PlacesModule } from './places/places.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { CitiesController } from './cities/cities.controller';
import { CitiesModule } from './cities/cities.module';
import { NeighborhoodsController } from './neighborhoods/neighborhoods.controller';
import { NeighborhoodsService } from './neighborhoods/neighborhoods.service';
import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';
import { CommentsModule } from './comments/comments.module';
const cookieSession = require('cookie-session');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRoot(),
    UsersModule,
    PlacesModule,
    CategoriesModule,
    CitiesModule,
    NeighborhoodsModule,
    CommentsModule,
  ],
  controllers: [
    AppController,
    // NeighborhoodsController,
    // CitiesController,
    // CategoriesController
  ],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
    // NeighborhoodsService
  ],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: [this.configService.get('COOKIE_KEY')],
        }),
      )
      .forRoutes('*');
  }
}
