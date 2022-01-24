const request = require('request'); // request data from api breed search
const arg = process.argv.slice(2);
const url = (`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`);

// print out the body content to the terminal
// fetch siberian data from the api endpoint using request

request(url, (err, res, body) => {
    
  if (err) {
    return console.log(err);
  }
  
  
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log(data[0]);
  }
  
  
    

  console.log(data[0]);
});











