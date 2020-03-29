export const calcAppetite = breed => {
  const chart = {
    Amphibian: 1,
    Bird: 2,
    Fish: 1,
    Invertebrate: 1,
    Mammal: 3,
    Reptile: 2
  };
  return chart[breed];
};
