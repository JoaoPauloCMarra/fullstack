import React from 'react';
import { Center, Text, useFetchRandomUser } from '@nx-fullstack/ui-components';

const App: React.FC = () => {
  const { loading, error, data } = useFetchRandomUser();

  return (
    <Center>
      {error && error.message && <Text color="red">{error.message}</Text>}
      {loading && <Text>loading...</Text>}
      {!error && !loading && (
        <>
          <Text testID="title">Web</Text>
          <Text>
            {data.name} - {data.email}
          </Text>
        </>
      )}
    </Center>
  );
};

export default App;
