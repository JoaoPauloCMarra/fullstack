import * as path from 'path';
import { magenta } from 'chalk';
import { buildSchema } from 'type-graphql';

import { UserResolver } from './models/User';

const schemaFilePath = path.resolve(__dirname, 'schema.gql');
console.log(magenta(`Schema generated at ${schemaFilePath}`));

const Schema = buildSchema({
  resolvers: [UserResolver],
  emitSchemaFile: schemaFilePath,
  validate: false,
});

export default Schema;
