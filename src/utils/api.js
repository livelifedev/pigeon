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

export const pigeonCreate = details => {
  const variables = {
    pigeon: {
      name: details.name,
      flock: details.flock,
      gender: details.gender,
      region: details.region,
      subBreedId: details.sub.value,
      elementId: details.element.value,
      dob: details.dob,
      appetite: details.appetite
    }
  };

  return graphql(
    `
      mutation pigeonCreate($pigeon: PigeonInput!) {
        pigeon: createPigeon(pigeon: $pigeon) {
          id
          name
          flock
          element
          dob
        }
      }
    `,
    variables
  );
};

export const pigeonSelected = id => {
  return graphql(
    `
      query singlePigeon {
        pigeon(id: ${id}) {
          name
          flock
          element
          dob
          gender
          region
          subBreed
          bio
          growth
          lifeStage {
            name
          }
          health
          appetite
          feedSchedule
          lastFed
        }
      }
    `
  );
};

export const pigeonAddFeed = (id, schedule) => {
  return graphql(
    `
      mutation pigeonAddFeed {
        feedSchedule: addFeedingSchedule(pigeonId: ${id},
          content: ${JSON.stringify(schedule)})
      }
    `
  );
};

export const pigeonFeed = (id, growth, lastFed) => {
  return graphql(
    `
      mutation pigeonFeed {
        updatedPigeon: updatePigeon(pigeonId: ${id}, growth: ${growth}, lastFed: ${lastFed}) {
          growth,
          lastFed
        }
      }
    `
  );
};
