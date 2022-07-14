import fetch from 'node-fetch';

// const IloveCrypto = (coin) => {
//   console.log(`${coin} to the moon!`);
// };

// fetch(
//   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
// )
//   .then((res) => res.json())
//   .then((res) => IloveCrypto(res[1].id));

const lieToZaviar = (excuse) => {
  console.log("Hey Zaviar, sorry but I can't make it to class today.");
  console.log(excuse);
};

// fetch('https://excuser.herokuapp.com/v1/excuse/college')
//   .then((res) => res.json())
//   .then((res) => lieToZaviar(res[0].excuse));

fetch('https://excuser.herokuapp.com/v1/excuse/college')
  .then((res) => res.text())
  .then((res) => console.log(res[0].excuse));

fetch('https://excuser.herokuapp.com/v1/excuse/college')
  .then((res) => res.json())
  .then((res) => console.log(res[0].excuse));
