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
  const { data, loading, error } = useQuery(query(fields), { variables: { id } });

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
