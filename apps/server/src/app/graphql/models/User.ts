import { ObjectType, Field, ID, Resolver, Arg, Query } from 'type-graphql';

const users = [
  { id: '1dosiapdpsad', name: 'John', email: 'john@email.com' },
  { id: '2dosiapdpsad', name: 'Thor', email: 'thor@email.com' },
  { id: '3dosiapdpsad', name: 'Zeus', email: 'zeus@email.com' },
];

@ObjectType({ description: 'The User model' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  users() {
    return users;
  }

  @Query(() => User)
  user(@Arg('id') id: string) {
    return users.find((user) => user.id === id);
  }

  @Query(() => User)
  randomUser() {
    return users[Math.floor(Math.random() * users.length)];
  }
}
