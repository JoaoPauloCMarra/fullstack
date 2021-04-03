import 'react-native-web';
import React from 'react';
import { Text } from 'react-native';
import { act, create } from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { waitFor } from '@testing-library/react';
import { useFetchUser, fetchUserQuery } from '@nx-fullstack/ui-components';

const data = {
  user: { id: '1dosiapdpsad', name: 'John', email: 'john@email.com' },
};
const fields = `
  name
`;
const mocks = [
  {
    request: {
      query: fetchUserQuery(fields),
      variables: { id: data.user.id },
    },
    result: {
      data,
    },
  },
];

const Component: React.FC = () => {
  const result: any = useFetchUser({ fields, id: data.user.id });
  return <Text>{result?.data?.name}</Text>;
};

test.only('renders correctly', async () => {
  await act(async () => {
    const component = create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Component />
      </MockedProvider>,
    );

    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const tree: any = component.toJSON();
    expect(tree.children).toContain('John');
  });
});
