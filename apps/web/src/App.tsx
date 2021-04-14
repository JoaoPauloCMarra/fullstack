import React, { useCallback } from 'react';
import { Spacer, Center, Constants, Text, Button, useFetchRandomUser } from '@nx-fullstack/ui-components';

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
          <Text fontSize={22} testID="title">
            Web (platform: <Text fontWeight="bold">{Constants.platform}</Text>)
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
