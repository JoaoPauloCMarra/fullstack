import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';

type Params = {
  fields?: string;
};

const defaultFields = `
id
name
email
`;

const useFetchRandomUser = ({ fields }: Params = {}) => {
  const query = useMemo(
    () => gql`
      query User {
        randomUser {
          ${fields || defaultFields}
        }
      }
    `,
    [fields],
  );
  const { data, loading, error } = useQuery(query);

  if (error) {
    return { error };
  }

  if (loading) {
    return { loading };
  }

  return {
    data: {
      id: data.randomUser?.id || '',
      name: data.randomUser?.name || '',
      email: data.randomUser?.email || '',
    },
  };
};

export default useFetchRandomUser;
