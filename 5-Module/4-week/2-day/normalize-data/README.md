# Normalizing Your State

So far in your article reducer you have used an `entries` array to store the
data. _Normalizing the data_ in your reducer can lead to better optimization.

In this practice, you will normalize the data in your `articleReducer` and make
the corresponding adjustments to your components. This will allow your
`SingleArticle` component to search for data in 0(1) time.

## Setup

Clone the starter repo accessible from the `Download Project` button at the
bottom of this page.

1. In the terminal, `cd` into the __backend-express__ directory of the starter.
2. Install dependencies with `npm install`.
3. Copy the __.env.example__ file to a new file in the same location called
   __.env__.
   * The server should be listening for requests on port `5000`.
   * The SQLite3 database file should be __db/dev.db__.
4. Run
   * `npm run db:setup` - create the database and tables and insert seed data
   * `npm start` - start the backend server

In a different terminal, `cd` into the __frontend__ directory of the starter.

1. Run `npm install` in the __frontend__ directory.
2. Run `npm run dev` in the __frontend__ directory to start the server.
   * Note that __frontend/vite.config.js__ now defines a proxy of
     `http://localhost:5000` for any path beginning with `/api`. This will
     effectively forward any `/api` requests to the port (`5000`) on which your
     backend is listening.
3. Open [`http://localhost:5173`] to see the frontend.

[`http://localhost:5173`]: http://localhost:5173

## Normalize LOAD_ARTICLES case

In your __src/store/articleReducer.js__ file, locate your `initialState`
variable. Change your `entries` key from an empty array to an empty object.

Based on what you have learned, adjust the `LOAD_ARTICLES` case in your
`articleReducer` function. Your `entries` object should store each article with
a key of the article `id` and a value of the article itself. (Make sure you
don't mutate nested objects!)

## Normalize ADD_ARTICLE case

Still in the `articleReducer` function, adjust the code so that you store the
new article in the `entries` array with a key of the article `id` and value of
the article. Again, be careful not to mutate nested objects.

## Add selectors

Now that your state shape has changed, you will no longer be able to just grab
the `entries` slice of `articleState` and map over it. You will first need to
transform the entries into an array. A selector is a great way to handle this
transformation, so let's add some selectors!

You want a selector that will return an array of articles. Remember, however,
that you don't want to return a new array every time the selector is called: new
arrays will always cause React to think the data has updated, leading to many
unnecessary refreshes. You accordingly need to create a memoized selector with
`createSelector`.

To begin, run `npm install reselect` in your __frontend__ directory, then import
`createSelector` as a named import from `'reselect'` in __articleReducer.js__.

Next, above the declaration of `initialState`--the order in the file doesn't
really matter--declare a `selectArticles` selector that takes in `state` and
returns the `entries` slice of `articleState`.

Now you're ready to create a memoized selector. Declare and export
`selectArticlesArray`. Set it equal to `createSelector` with `selectArticles` as
its first argument (i.e., the _input selector_). Its second argument should then
be an anonymous function--the _output selector_--that takes the result of the
input selector--call it `articles`--and returns an array of the values in
`articles`. Now your selector will not create a new array of article values
unless the result of `selectArticles` changes!

## Adjust the ArticleList component

Time to test your new selectors! Go to your `ArticleList` component. Since the
anonymous selector in your `useSelector` will now return an object instead of an
array, you can no longer simply map over the result. Fix this without changing
your JSX simply by importing `selectArticlesArray` and passing that selector to
`useSelector`.

If you've done everything correctly, you should be able to open
[http://localhost:5173/articles/] and see your "Article List" appear just as it
did before!

## SingleArticle O(1)

In the `SingleArticle` component, you are now able to find your article without
using the `.find` function. Let's use a named selector here too.

Go back to __store/articleReducer.js__ and find your first two selectors. Now
add and export a third selector, `selectArticleById`. You want to be able to
pass this selector an argument, namely, the id of the article you want to
select. A selector passed to `useSelector`, however, can only receive `state` as
an argument. How then can you construct `selectArticleById`? Give it a try
before looking below.

**Hint:** Think curried functions and closures.

**Hint 2:** `selectArticleById` needs to receive an argument and return a
function that takes `state` as its argument and returns the desired article.

Ready? Here is one way to implement `selectArticleById`:

```js
export const selectArticleById = 
  (articleId) => (state) => state.articleState.entries[articleId];
```

Now import it into __SingleArticle.jsx__ and pass it to `useSelector`--don't
forget the argument!--for O(1) article lookup time!

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Normalize data in your reducer for more optimal performance
2. Write optimized selectors
3. Choose data using O(1) time complexity

[http://localhost:5173/articles/]: http://localhost:5173/articles/
