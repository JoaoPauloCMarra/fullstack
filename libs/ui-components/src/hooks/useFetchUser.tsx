import { gql, useQuery } from '@apollo/client';

type Params = {
  id: string;
  fields?: string;
};

const defaultFields = `
  id
  name
  email
`;

export const query = (fields: string) => gql`
  query User($id: String!) {
    user(id: $id) {
      ${fields || defaultFields}
    }
  }
`;

const useFetchUser = ({ id, fields }: Params) => {
  const { data, loading, error, refetch } = useQuery(query(fields), { variables: { id } });

  if (loading) {
    return { loading, refetch: () => null };
  }

  if (error) {
    return { error, refetch };
  }

  return {
    data: {
      id: data.user?.id || '',
      name: data.user?.name || '',
      email: data.user?.email || '',
    },
    refetch,
  };
};

export default useFetchUser;
