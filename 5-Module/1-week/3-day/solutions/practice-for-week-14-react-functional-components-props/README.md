# Practice: Functional Components And Passing Props

In this practice you will create a functional component and pass props from a
parent component to a child component.

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Create a functional component

Create a functional component called `BaseStats` in your __src__ folder. It
should have a `div` with a class of `base-stats` and an `h1` with the text
"BaseStats". Import the __BaseStats.css__ file into your component.

Add the `BaseStats` component to your `App` component, placing it below the
`Showcase` component. (Don't forget to import it!) Test it in the browser.

Create an object literal inside your `App` component called `baseStats`.
It should look like this:

```js
const baseStats = {
  hp: 45,
  attack: 49,
  defense: 49,
  spAttack: 65,
  spDef: 65,
  speed: 45,
};
```

Pass this object to the `BaseStats` component using `stats` as the prop name.
In your `BaseStats` component, bring in `props` as the argument to the
functional component.

In your sandbox browser, go to the browser DevTools and open the React
DevTools. Click on the `BaseStats` component. Under `props`, you should see your
`stats` props object look something like this (the numbers may differ):

![react-devtools-props]

## Use props object in the child component

Now you are ready to use your props object.

In `BaseStats.js`, create a table beneath your `h1` tag. It should have four
table rows, each with two table data tags. The first table data tag of each
table row should contain the header for each stat (Hit Points, Attack, Defense,
and Speed).

The second table data tag of each table row should contain the corresponding
variable you destructured from props. Your code should look something like this:

```js
<table>
  <tbody>
    <tr>
      <td>Hit Points</td>
      <td>{props.stats.hp}</td>
    </tr>
    <tr>
      <td>Attack</td>
      <td>{props.stats.attack}</td>
    </tr>
    <tr>
      <td>Defense</td>
      <td>{props.stats.defense}</td>
    </tr>
    <tr>
      <td>Speed</td>
      <td>{props.stats.speed}</td>
    </tr>
  </tbody>
</table>
```

The next goal is to make your code more concise and practice the DRY principle.
In the argument for the `BaseStats` functional component, destructure the
variables from the props object. Refactor your JSX to reflect these variables.
You should only call the variables `hp`, `attack`, `defense`, and `speed` in
your JSX.

**Remember: you can destructure a nested object.**

## Pass a function as a prop

There are times where you may want to pass a function as a prop. By doing this,
you will be passing a reference to the function in the parent component which
may then have some functionality.

In your `App` component, beneath your `baseStats` object, create a function
called `handleClick`.

Place this code inside the function:

```js
alert(
  `Special Stats\n\tSpecial Attack: ${baseStats.spAttack}\n\tSpecial Defense: ${baseStats.spDef}`
);
```

Now pass the `handleClick` function as a prop called `clicker` to the
`BaseStats` component.

In your `BaseStats` component, destructure the `clicker` prop in your function
component argument.

Next, above your table, create a button with the text "Check Special Stats".
Give it a class of `sp-stats`. Pass an `onClick` event listener to the `button`
element and assign it the `clicker` function prop.

Remember, an event listener in React is camelCased--`onClick` instead of
`onclick`--and it takes a function as its assignment.

Notice that when the button is clicked, it triggers the `handleClick` function
in the parent component.

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Pass values as props from parent to child
2. Check props using React DevTools
3. Add prop values to a child component
4. Destructure props to remain DRY
5. Pass a function as a prop
6. Use an `onClick` event listener

[CodeSandbox]: https://codesandbox.io
[react-devtools-props]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/intro-to-react/assets/react-devtools-props.png