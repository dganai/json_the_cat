const request = require('request'); // request data from api breed search


// print out the body content to the terminal
// fetch siberian data from the api endpoint using request
const fetchBreedDescription =  (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    
    if (err) {
      callback(err, null);
      return;
    }
    const data = JSON.parse(body);

    if (!data[0]) {
      callback('Breed does not exist. Try again.', null);
      return;
    }
      
      callback(null, data[0].description);
      
    
    }

  )

};


module.exports = { fetchBreedDescription };






