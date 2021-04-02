import User from './models/User';

const Resolvers = {
  Query: {
    ...User,
  },
};

export default Resolvers;
