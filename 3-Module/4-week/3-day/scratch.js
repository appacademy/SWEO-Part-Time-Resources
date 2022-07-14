import fetch from 'node-fetch';

const lieToZaviar = (excuse) => {
  console.log("Sorry Zaviar, can't make it to class today");
  console.log(excuse);
};

fetch('https://excuser.herokuapp.com/v1/excuse/college')
  .then((res) => res.json())
  .then((res) => lieToZaviar(res[0].excuse));

// fetch(
//   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
// )
//   .then((response) => response.json())
//   .then((resJson) => resJson[0])
//   .then((bitcoinObj) => bit(bitcoinObj.id));
