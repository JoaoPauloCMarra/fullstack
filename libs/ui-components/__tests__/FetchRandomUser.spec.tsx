import 'react-native-web';
import React from 'react';
import { Text } from 'react-native';
import { act, create } from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { waitFor } from '@testing-library/react';
import { useFetchRandomUser, fetchRandomUserQuery } from '@nx-fullstack/ui-components';

const data = {
  randomUser: { id: '1dosiapdpsad', name: 'John', email: 'john@email.com' },
};
const fields = `
  name
`;
const mocks = [
  {
    request: {
      query: fetchRandomUserQuery(fields),
    },
    result: {
      data,
    },
  },
];

const Component: React.FC = () => {
  const result: any = useFetchRandomUser({ fields });
  return <Text>{result?.data?.name}</Text>;
};

test('renders correctly', async () => {
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
