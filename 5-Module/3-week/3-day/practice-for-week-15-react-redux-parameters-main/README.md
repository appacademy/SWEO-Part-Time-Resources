# Practice: Finding Information Based on Parameters (Recall)

In this short practice, you will apply your existing knowledge to complete the
`SingleArticle` component.

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Using parameters and passing state to component

In __src/components/SingleArticle/index.js__, use the parameter given in the URL
to choose the correct article from the `articles` array. (How can you access
the parameter?) Display the information for that article inside the JSX,
replacing the hard-coded information.

Choose one of the following options for passing the state into the
`SingleArticle` component:

1. Pass the articles from the `ArticleList` component to the `SingleArticle`
   component
2. Use `useSelector` to load the articles directly from the reducer

When you've finished, you should be able to see the individual articles as you
click on their respective titles in the "Article List".

## What you have learned

**Congratulations!** In this practice you have applied your previous knowledge
to

1. Display information in JSX based on a URL parameter.

[CodeSandbox]: https://codesandbox.io