  // problem 9
  // select button and add an event listener that will fetch and perform logic

  /**
   * It takes a word as an argument, makes a request to the dictionary API, parses the response, and
   * returns the definition of the word
   * @param word - The word to look up.
   * @returns A promise that resolves to the definition of the word.
   */
   async function getWordDefinition(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    // const definition = responseJson[0].meanings[0].definitions[0].definition;
    definitiosAll = responseJson[0].meanings[0].definitions
    return definitiosAll;
  }

  /**
   * It takes a list of elements and returns an unordered list element with those elements as its
   * children
   * @param elements - An array of strings that will be the innerText of each list element.
   * @returns A <ul> element with <li> elements inside of it.
   */
  function createUnorderedListElement(array) {
    const unorderedList = document.createElement("ul")

    for (i=0; i<array.length; i++) {
      const definitionObj = array[i]
      console.log("obj:", definitionObj)
      const definition = definitionObj.definition
      const listElement = document.createElement("li")
      listElement.innerText = definition;
      unorderedList.appendChild(listElement)
    }

    return unorderedList
  }

  const button9 = document.getElementById("dictionary-fetch");
  button9.addEventListener("click", async (e)=>{
    // should give is all definitions for a given word
    const definitions = await getWordDefinition("apple");
    console.log("definitions:", definitions);

    // take in the array of definitions and then create an li for each one
    const ul = createUnorderedListElement(definitions)

    // select the the results-area parent element and add the ul to it
    document.getElementById("results-area").appendChild(ul);
  })