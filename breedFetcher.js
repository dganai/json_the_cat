const request = require('request'); // request data from api breed search


// print out the body content to the terminal
// fetch siberian data from the api endpoint using request
const fetchBreedDescription =  (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    const [data] = JSON.parse(body);
    
    // if URL isn't valid, output error msg
    if (err) {
      callback(err, null);
      return;
    }
   
    // if no error but no valid breed found
    if (!err) {
      if (data) {
        return callback(null, data.description);
      }
      
      callback('Breed not found.', null);
      
    
    }

  });

};


module.exports = { fetchBreedDescription };






