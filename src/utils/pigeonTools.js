import moment from 'moment';

export const HUNGERS = {
  NEUTRAL: 'Neutral',
  HUNGRY: 'Hungry',
  STARVING: 'Starving'
  // 'Overstuffed', 'Full', 'Neutral', 'Hungry', 'Starving'
};

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

export const calcMissedMeals = (lastFed, feedingSchedule) => {
  const currentHour = parseInt(moment().format('HH'));
  const lastFedHour = parseInt(moment.unix(lastFed).format('HH'));
  const missedMeals = [];

  Object.keys(feedingSchedule).forEach(x => {
    const mealHour = parseInt(feedingSchedule[x].substring(0, 2));

    if (mealHour < currentHour && mealHour > lastFedHour) {
      missedMeals.push(mealHour);
    }
  });

  return missedMeals.length;
};
