import { graphql } from './graphql';

export const userRegister = ({ breederName, email, password }) => {
  const variables = {
    user: {
      breederName,
      email,
      password
    }
  };

  return graphql(
    `
      mutation userRegister($user: UserInput!) {
        token: createUser(user: $user)
      }
    `,
    variables
  );
};
