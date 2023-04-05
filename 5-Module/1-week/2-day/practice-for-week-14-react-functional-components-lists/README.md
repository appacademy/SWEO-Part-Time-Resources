# Practice: Functional Components And Creating Lists

Knowing how to build lists is crucial in React. They are used in almost every
facet of UI in your applications. In this practice, you will learn how to create
lists in your functional components.

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Create PokeMoves component

Create a component and `.js` file called `PokeMoves`. It should return a
`div` and an `h1` that says "PokeMoves".

To begin, take a look at the __data.js__ file in the __src__ folder. It has an
array of objects describing each move. You are going to import that data and use
it to create a list for your application.

With named exports, you must always use curly braces and the correct variable
name to import the variable. In __PokeMoves.js__, import the moves array from
__data.js__.

You are going to list all of the potential moves for this particular Pokemon.

Create an unordered list beneath the `h1` tag. Inside the unordered list, `map`
through the `moves` array that you imported.

Each item that you map should return a list item with the `id` number and the
name of the `move`.

```js
<ul>
  {moves.map(item => (
    <li>
      {item.id}. {item.move}
    </li>
  ))}
</ul>
```

Import your `PokeMoves` component into __App.js__ and render it under the
 `BaseStats` component.

Look at the console in your sandbox DevTools and see what kind of errors or
warnings you receive.

When mapping through an array, always remember that React expects a unique
`key` for each item that is rendered. If the item your are mapping through
has a unique `id`, that is usually the best choice for the `key` prop for your
returned element. This optimizes React and returns a quicker result through
[indexing][keys-and-lists].

Add a `key` with `item.id` to the `li` element. Check your sandbox console again
and notice that the warning is now gone.

## Adding a list item component

While having a list item in your component will render the information,
sometimes you want to design the element that is returned. It is better to
create a new component for this purpose.

Create a component called `PokeMoveCard` in the __src__ folder. The component
should only return an `li` with the text "PokeMoveCard Component". Import the
__PokeMoveCard.css__ into the file.

Import the `PokeMoveCard` component in your `PokeMoves` component and
replace the `li` inside the `ul` element with the `PokeMoveCard` component.
You now need to place the `key` inside the `PokeMoveCard` instead of the `li`
element.

```js
<PokeMoveCard key={item.id} />
```

Take a look in your sandbox browser. You should see a `PokeMoveCard` for each
`item` in your `moves` array.

You can now pass all of the props returned by the single `item` by using the
spread operator and the `item` variable name.

```js
<PokeMoveCard key={item.id} {...item} />
```

This line essentially says to send all of the values in `item` as props to the
`PokeMoveCard` component.

Next, in your `PokeMoveCard` component, destructure the `id`, `type`, `move`,
and `level` props in your component argument. Go to the React DevTools in your
sandbox browser and click on each `PokeMoveCard` component to see the props
available.

Add the destructured props--see below--to the `PokeMoveCard` component. Remember
to give the `li` a class of `poke-move-card`.

```js
return (
  <li className='poke-move-card'>
    <h3>Move {id}</h3>
    <h4 style={{ padding: 10 }}>{move.toUpperCase()}</h4>
    <p>Type: {type}</p>
    <p>Level: {level}</p>
  </li>
);
```

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Create an unordered list in React using `.map`
2. Add a `key` prop to the returned item in your list
3. Pass props using the spread operator
4. Return a component instead of an `li` element in your `.map` function

[CodeSandbox]: https://codesandbox.io
[keys-and-lists]: https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key