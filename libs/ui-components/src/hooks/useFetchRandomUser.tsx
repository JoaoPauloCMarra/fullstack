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
  const { data, loading, error } = useQuery(query(fields));

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
