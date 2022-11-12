import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
const cookieSession = require('cookie-session');
import serverlessExpress from '@vendia/serverless-express';
import { Handler, Callback, Context } from 'aws-lambda';

import { AppModule } from './app.module';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//   app.use(helmet())
  app.enableCors();
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp})
}

export const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback
) => {
    server = server ?? (await bootstrap());
    return server(event, context, callback)
}
