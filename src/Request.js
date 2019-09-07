import React from 'react';

const Request = () => {
  // this belongs in a hidden / ignored .env file.
  const API_KEY = "00da89db5c5f670b39847e33ca962519"

  fetch(`https://randomapi.com/api/${API_KEY}`)
  .then(response => response.json())
  // .then(petFinderJson => this.setState({ dogs: petFinderJson.petfinder.pets.pet }));
  .then((data)=>{
    console.log(data);
})
  // .then(console.log('helllo', response ));
  
}

export default Request;


