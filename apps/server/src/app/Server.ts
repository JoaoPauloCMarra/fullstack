import * as chalk from 'chalk';
import * as Koa from 'koa';
import * as cors from '@koa/cors';
import * as helmet from 'koa-helmet';
import * as winston from 'winston';
import { ApolloServer } from 'apollo-server-koa';

import { config, isDevMode } from './Config';
import { logger } from './Logger';
import typeDefs from './graphql/Schema';
import resolvers from './graphql/Resolvers';

const Server = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

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

  // Setup server
  app.use(server.getMiddleware());
  app.listen({ port: config.port }, () => {
    const url = isDevMode ? `http://localhost:${config.port}/graphql` : 'online host';
    console.log('');
    console.log(chalk.cyan(`Server running on ${url}`));
    console.log('');
  });
};

export default Server;
