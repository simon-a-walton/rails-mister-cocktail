// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

// // import $ from 'jquery';
// // import 'select2';

// // $('#city-input').select2();

// const results = document.querySelector('#cocktail-image');

// const searchImage = (imageName) => {
//   const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${imageName}`;
//   fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//       const imageIcon = `<img src=http://openweathermap.org/img/w/${data.drinks[0].strDrinkThumb}.png>`;
//       results.insertAdjacentHTML('beforeend', imageIcon);
//     });
// };

// const input = document.querySelector(".submit");
// input.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const imageName = document.getElementsByClassName('input').value;
//   results.innerHTML = '';
//   searchLocation(imageName);
// });

// export { searchImage  }
