import { graphql } from './graphql';

export const userLogin = (email, password) => {
  return graphql(
    `
      mutation userLogin {
        token: login(email: "${email}", password: "${password}")
      }
    `
  );
};

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
      query userCurrent {
        profile {
          id
          breederName
          rank
          email
          pigeons {
            id
            name
            flock
            element
            dob
          }
        }
      }
    `
  );
};
