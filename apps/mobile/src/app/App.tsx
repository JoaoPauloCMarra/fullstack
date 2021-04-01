import React from 'react';
import { Center, Title } from '@nx-fullstack/ui-components';

import { displayName as name } from '../../app.json';

const App: React.FC = () => {
  return (
    <Center>
      <Title testID="screen-title">{name}</Title>
    </Center>
  );
};

export default App;
