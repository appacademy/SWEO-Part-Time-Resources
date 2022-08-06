# Practice: Basic Hooks - useEffect with 3rd-party API

Using a 3rd-party API requires documentation research, understanding endpoints,
data parsing, and application. It is an important skill to be able to parse and
display data in a visually pleasing and/or readable format.

In this short practice you will use `useEffect` to make an API call using the
[fortnite API][fortnite] and display the information that you retrieve.

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Test the endpoint

In your browser, enter the fortnite API
endpoint--`https://fortnite-api.com/v2/news`--as the URL. Notice the json data
that you receive. This is the data that you must parse to design your component.
(If your data is jumbled and hard to read, you can add an extension such as
[`JSON Formatter`][formatter] to prettify your data.)

## Retrieve data

You will work in the __ServerData.js__ file. Your goal is to retrieve the data
from the API and test the data. Create a `useEffect` that will only run one
time. Create an asynchronous function called `fetchFortnite` that uses the
browser's `fetch` API to fetch the `https://fortnite-api.com/v2/news` endpoint.
After retrieving the data, log the data in the console to see what you received.
Invoke the `fetchFortnite` function inside the `useEffect` below the definition.

Open your browser console and take a look at the object you received.

If you are successful, your code should look similar to the code below:

```js
  useEffect(() => {
    const fetchFortnite = async () => {
      const data = await fetch('https://fortnite-api.com/v2/news');
      const response = await data.json();
      console.log(response);
    };
    fetchFortnite();
  }, []);
```

## Parse the data

The data you want to use in your application is located in an array of objects.
Each object in this array contains these fields:

- id
- title
- body
- hidden
- image
- sortingPriority
- tabTitle
- titleImage
- title

Can you find the array? Can you now log the data so that you see only the array
with these objects? Create a slice of state called `serverData` with an updater
function called `setServerData`. There should be no initial value. Update the
`serverData` slice of state with this array.

## Display the data

Comment out the `h1` tag that says `No Data to Display`.

Create another `return` below the commented code.

Iterate through the `serverData` array and return a `div` with a class of
`serverContainer` for each object. Use an `h1` tag to display the `title`, an
`h2` tag to display the `body`, and an `img` tag to display the image. Use the
parsed `image` field as the `src` and the `title` as the `alt` value. Don't
forget to add a `key` for each object listed using the `id`.

It takes time to retrieve data that you are receiving from a 3rd-party API.
Above the `return` you've already created, add a conditional where, if the
`serverData` slice of state is empty, the user sees only an `h1` tag that says
`No Data To Display`. Notice that you will catch a quick glimpse of this message
when reloading the app.

If you were successful in your attempts, the rest of your code probably looks something like this:

```js
  useEffect(() => {
    const fetchFortnite = async () => {
      const data = await fetch('https://fortnite-api.com/v2/news');
      const response = await data.json();
      const parsedData = response.data.br.motds;
      setServerData(parsedData);
    };
    fetchFortnite();
  }, []);

  if (!serverData) return <h1>No Data To Display</h1>;

  return (
    <div>
      {serverData.map(data => (
        <div className='serverContainer' key={data.id}>
          <h1 className='title'>{data.title}</h1>
          <h2 className='body'>{data.body}</h2>
          <img className='img' src={data.image} alt={data.title} />
        </div>
      ))}
    </div>
  );

```

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Use `useEffect` to call a 3rd-party API
2. Parse 3rd-party API data
3. Render API data using JSX

[fortnite]: https://fortnite-api.com
[endpoints]: https://dash.fortnite-api.com/endpoints/news
[formatter]: https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en
[CodeSandbox]: https://www.codesandbox.io