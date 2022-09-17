function validFlightNum(value) {

    // check if first two chars are valid letters
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const firstChar = value[0].toLowerCase();
    const secondChar = value[1].toLowerCase();

    // if they are not both letters (firstchar and secondChar) then throw error
    if (!(letters.includes(firstChar) && letters.includes(secondChar))) {
      throw new Error("first two are not letters");
    }

    // if the rest of the characters are not numbers, throw error
    const lastNumbers = value.slice(2)
    for (let i = 0; i < lastNumbers.length; i++) {
      let char = lastNumbers[i];
      // if it is not a number, then throw error
      if (isNaN(char)) {
        throw new Error("last digits are not numbers");
      }
    }
  }

  validFlightNum("987")