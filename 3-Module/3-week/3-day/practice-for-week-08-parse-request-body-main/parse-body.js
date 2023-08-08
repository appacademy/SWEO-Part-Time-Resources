function firstStep(input) {
	//!!START
	return input.split("&");
	//!!END
  }

  function secondStep(input) {
	//!!START
	return input.map((keyValuePair) => keyValuePair.split("="));
	//!!END
  }

  function thirdStep(input) {
	//!!START
	return input.map(([key, value]) => [key, value.replace(/\+/g, " ")]);
	//!!END
  }

  function fourthStep(input) {
	//!!START
	return input.map(([key, value]) => [key, decodeURIComponent(value)]);
	//!!END
  }

  function fifthStep(input) {
	//!!START
	return input.reduce((acc, [key, value]) => {
	  acc[key] = value;
	  return acc;
	}, {});
	//!!END
  }

  function parseBody(str) {
	//!!START
	const splitString = firstStep(str);
	// ["username=azure+green", "password=password%21"]
	const keyValueArrays = secondStep(splitString);
	// [["username", "azure+green"], ["password", "password%21"]]
	const replacedPlusSigns = thirdStep(keyValueArrays);
	// [["username", "azure green"], ["password", "password%21"]]
	const decodeValues = fourthStep(replacedPlusSigns);
	// [["username", "azure green"], ["password", "password!"]]
	return fifthStep(decodeValues);
	// {
	//   username: 'azure green',
	//   password: 'password!'
	// }
	//!!END
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
