import { gql } from 'apollo-server-koa';

// temp Schema
const Schema = gql`
  type User {
    id: String
    name: String
    email: String
  }

  type Query {
    user(id: String): User
    randomUser: User
    users: [User]
  }
`;

export default Schema;
