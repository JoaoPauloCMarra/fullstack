import React, { useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { Spacer, Center, Constants, Text, Button, useFetchRandomUser } from '@nx-fullstack/ui-components';

import { displayName as name } from '../app.json';

const App: React.FC = () => {
  const { loading, error, data, refetch } = useFetchRandomUser();
  const onRefetch = useCallback(() => refetch(), [refetch]);

  return (
    <Center>
      {error && error.message && <Text color="red">{error.message}</Text>}
      {loading && (
        <Text fontSize={22} fontWeight="bold">
          loading...
        </Text>
      )}
      {!error && !loading && (
        <>
          <Text fontSize={22}>
            {name} (platform: <Text fontWeight="bold">{Constants.platform}</Text>)
          </Text>
          <Spacer size={5} />
          <Text>
            {data.name} - {data.email}
          </Text>
          <Spacer size={20} />
          <Button variant="secondary" onPress={onRefetch}>
            Refetch Data
          </Button>
          <Spacer size={5} />
          <Button type="link" variant="primary" onPress={onRefetch}>
            Refetch Data
          </Button>
        </>
      )}
    </Center>
  );
};

export default App;
