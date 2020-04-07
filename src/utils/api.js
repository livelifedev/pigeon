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

// Fetch current logged in user profile
export const userCurrent = () => {
  return graphql(
    `
      query {
        profile {
          id
          breederName
          rank
          email
          pigeons {
            id
          }
        }
      }
    `
  );
};
