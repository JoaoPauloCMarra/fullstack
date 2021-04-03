import { red } from 'chalk';
import Server from './app/Server';

try {
  Server();
} catch (error) {
  console.log(red(error));
}
