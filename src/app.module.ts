import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
import { APP_PIPE } from '@nestjs/core';
// import cookieSession from 'cookie-session';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PlacesModule } from './places/places.module';
import { CategoriesModule } from './categories/categories.module';
import { CitiesModule } from './cities/cities.module';
import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';
import { CommentsModule } from './comments/comments.module';
import { UsersFavoritesModule } from './users-favorites/users-favorites.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
// import { devDataSource } from './dataSources';
import { DataSource } from 'typeorm';
const cookieSession = require('cookie-session');


@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: `.env.${process.env.NODE_ENV}`,
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
      database: 'new_schema',
      entities: ['**/*.entity.js'],
      username: 'root',
      password: 'Password',
      host: 'localhost',
      port: 3306,
      logging: true,
      }),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    // UsersModule,
    PlacesModule,
    CategoriesModule,
    CitiesModule,
    NeighborhoodsModule,
    CommentsModule,
    UsersFavoritesModule,
    SubcategoriesModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
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
