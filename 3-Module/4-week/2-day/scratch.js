const add10 = (num) => {
    return new Promise((resolve) => {
        resolve(num + 10)
    });
  };
  
  add10(0)
    .then((num) => console.log(`${num} is logged`))
    .then((num1) => add10(5))
    .then((num2) => console.log(`${num2} is logged`))
    .then((num3) => add10(10))
    .then((num4) => console.log(`${num4} is logged`));