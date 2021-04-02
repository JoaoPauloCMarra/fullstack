const users = [
  { id: '1dosiapdpsad', name: 'John', email: 'john@email.com' },
  { id: '2dosiapdpsad', name: 'Thor', email: 'thor@email.com' },
  { id: '3dosiapdpsad', name: 'Zeus', email: 'zeus@email.com' },
];

const User = {
  user(_: ParentNode, args: { id: string }) {
    return users.find((user) => user.id === args.id);
  },
  randomUser: () => users[Math.floor(Math.random() * users.length)],
  users: () => users,
};

export default User;
