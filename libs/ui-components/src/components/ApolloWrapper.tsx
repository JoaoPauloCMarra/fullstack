import React, { useMemo } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloCache, NormalizedCacheObject } from '@apollo/client';

interface Props {
  uri?: string;
  cache?: ApolloCache<NormalizedCacheObject>;
}

const defaultCacheService = new InMemoryCache();

const ApolloWrapper: React.FC<Props> = ({ children, uri = 'http://localhost:5000/graphql', cache }) => {
  const client = useMemo(() => {
    return new ApolloClient({
      uri,
      cache: cache || defaultCacheService,
    });
  }, [uri, cache]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
