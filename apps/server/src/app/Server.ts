import * as Koa from 'koa';
import * as cors from '@koa/cors';
import * as helmet from 'koa-helmet';
import * as mount from 'koa-mount';
import * as graphqlHTTP from 'koa-graphql';
import * as winston from 'winston';

import { config, isDevMode } from './Config';
import { logger } from './Logger';
import schema from './graphql/Schema';
import rootValue from './graphql/Resolvers';

const Server = () => {
  const app = new Koa();
  // Provides important security headers to make your app more secure
  app.use(helmet({ contentSecurityPolicy: isDevMode ? false : undefined }));
  // Enable cors with default options
  app.use(cors());
  // Logger middleware -> use winston as logger (Logger.ts with config)
  app.use(logger(winston));
  // Add x-response-time
  app.use(async (ctx: Koa.Context, next: Koa.Next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });

  app.use(
    mount(
      '/',
      graphqlHTTP({
        graphiql: true,
        schema,
        rootValue,
      }),
    ),
  );

  app.listen(config.port);

  const url = isDevMode ? `http://localhost:${config.port}/graphql` : 'online host';
  console.log(`Server running on ${url}`);
};

export default Server;
