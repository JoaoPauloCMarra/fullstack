import Server from './app/Server';
import { config } from './app/Config';

try {
  Server(config);
} catch (error) {
  console.error(error);
}
