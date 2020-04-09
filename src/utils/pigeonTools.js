import moment from 'moment';

export const calcAppetite = breedId => {
  const chart = {
    // Amphibian
    1: 1,
    // Bird
    2: 2,
    // Fish
    3: 1,
    // Invertebrate
    4: 1,
    // Mammal
    5: 3,
    // Reptile
    6: 2,
    // Alien
    7: 4,
    // Mythological
    8: 4
  };
  return chart[breedId];
};

export const calcAge = ts => {
  return moment().diff(moment.unix(ts), 'days');
};
