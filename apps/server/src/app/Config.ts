import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export interface Config {
  port: number;
  debugLogging: boolean;
}

export const isDevMode = process.env.NODE_ENV == 'development';

const config: Config = {
  port: +(process.env.PORT || 5000),
  debugLogging: isDevMode,
};

export { config };
