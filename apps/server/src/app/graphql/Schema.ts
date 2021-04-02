import { buildSchema } from 'graphql';

// temp Schema
const Schema = buildSchema(`
  type Query {
    hello: String
  }
`);

export default Schema;
