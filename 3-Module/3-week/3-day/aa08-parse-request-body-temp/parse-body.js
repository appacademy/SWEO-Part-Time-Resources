function firstStep(input) {
  //! input starts out as the original request body string.
  //! seperate key and value pairs out of the string.
  const kvPairArr = input.split('&')

  return kvPairArr
}

function secondStep(input) {
  //! input is now the array created from the req body, each element is a string of the
  //! key and value put -> "key=value"
  //! seperate the keys and values from each element

    return input.map(el => el.split('='))

}

function thirdStep(input) {
  //! input will be an array with sub arrays of each k-v pairs.
  //! scan each value for a + and replace with a " " space
  return input.map(([k, v]) => [k, v.replace(/\+/g, " ")])

    // input.forEach(el => {
    //   for (let i = 0; i < el.length; i++){
    //     const str = el[i];
    //     el[i] = str.replace("+", " ");
    //   }
    // })

    // return input

}

function fourthStep(input) {
  //! input will be an array with sub arrays of k-v pairs, + replaced with space.
  //! grab each value and run it through the decodeURIComponent function.
  //! decode the percent encoded character
  // console.log('TEST');
  // input.forEach(el => {
  //   for (let i = 0; i < el.length; i++){
  //     const str = el[i];
  //     if (str.includes('%')) {

  //       el[i] = decodeURIComponent(str);

  //     }
  //   }
  // })

  // return input

  return input.map(([k, v]) => [k, decodeURIComponent(v)])
}

function fifthStep(input) {
  //! input is an array of fully converted k-v pair strings.
  //! iterate through each sub array and add the elements to an object where first el is
  //! key and second el is a value

  //! reduce our array into a single object, in the reduce function
  //! destructure the el subArray to k,v then set the acc.k to have the value of v.


  return input.reduce((acc, [k, v]) => {
    acc[k] = v;
    return acc
  }, {})
}

function parseBody(str) {


  const splitString = firstStep(str);
  // console.log(res);

  const keyValArrays = secondStep(splitString);
  // console.log(res);

  const replacedPlus = thirdStep(keyValArrays);
  // console.log(res)

  const decodeValues = fourthStep(replacedPlus);
  // console.log('fourth', res)


  return fifthStep(decodeValues)
  // console.log(res);

}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
