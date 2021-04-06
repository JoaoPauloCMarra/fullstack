import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Constants, Center, Text, useFetchRandomUser } from '@nx-fullstack/ui-components';

import { displayName as name } from '../app.json';

const App: React.FC = () => {
  const { loading, error, data } = useFetchRandomUser();

  return (
    <Center>
      {error && error.message && <Text color="red">{error.message}</Text>}
      {loading && <ActivityIndicator color="#000" />}
      {!error && !loading && (
        <>
          <Text>
            {name} (platform: {Constants.platform})
          </Text>
          <Text>
            {data.name} - {data.email}
          </Text>
        </>
      )}
    </Center>
  );
};

export default App;
