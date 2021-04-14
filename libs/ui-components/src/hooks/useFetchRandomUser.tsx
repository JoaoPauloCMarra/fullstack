import { gql, useQuery } from '@apollo/client';

type Params = {
  fields?: string;
};

const defaultFields = `
  id
  name
  email
`;

export const query = (fields: string) => gql`
  query User {
    randomUser {
      ${fields || defaultFields}
    }
  }
`;

const useFetchRandomUser = ({ fields }: Params = {}) => {
  const { data, loading, error, refetch } = useQuery(query(fields));

  if (loading) {
    return { loading, refetch: () => null };
  }

  if (error) {
    return { error, refetch };
  }

  return {
    data: {
      id: data.randomUser?.id || '',
      name: data.randomUser?.name || '',
      email: data.randomUser?.email || '',
    },
    refetch,
  };
};

export default useFetchRandomUser;
