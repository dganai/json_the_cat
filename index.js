// first err param will let caller check and handle error situations easily
// this file will be for users to run and provide breed name to
// require breedFetcher file and call exported function

const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
if (error) {
  console.log('Error fetch details:', error);
} else {
  console.log(description)
}
});

