function parseForm(data) {
  result = data
    .split("&")
    .map((keyValuePair) => keyValuePair.split("="))
    .map(([key, value]) => [key, value.replace(/\+/g, " ")])
    .map(([key, value]) => [key, decodeURIComponent(value)])
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  return result;
}

module.exports = parseForm;