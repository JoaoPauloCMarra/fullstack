import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';

type Params = {
  id: string;
  fields?: string;
};

const defaultFields = `
id
name
email
`;

const useFetchUser = ({ id, fields = defaultFields }: Params) => {
  const query = useMemo(
    () => gql`
      query User($id: String!) {
        user(id: $id) {
          ${fields}
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
      id: data.user?.id || '',
      name: data.user?.name || '',
      email: data.user?.email || '',
    },
  };
};

export default useFetchUser;
