# Practice: Functional Components And JSX

In this practice you will create a functional component and add JSX.

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Create a functional component

First, create a __Showcase.js__ file in the __src__ folder. Inside that file,
add the following code to create the functional component `Showcase`:

```js
function Showcase() {
  return (
    <div>
      <h1>Showcase Component</h1>
    </div>
  );
}

export default Showcase;
```

Remember, your JSX will always be created in the `return` because it returns a
single element.

Inside __App.js__, import the `Showcase` component using [ES6 imports]. Replace
the `h1` with the `Showcase` component as a child.

Check your sandbox browser. It should now read `Showcase Component`.

## Add JavaScript to your JSX

You've already seen that you can add HTML-like syntax to your JSX. Now, let's
add JavaScript. Curly braces `{}` inside JSX lets React know that the JavaScript
inside the braces should be evaluated, allowing you to add any [JS expression]
to your JSX.

In __Showcase.js__, inside your functional component, you are allowed to use
Vanilla JS above the `return`.

Add a variable called `favPokemon` and assign it the name of your favorite
Pokemon or, if you don't have one, `Bulbasaur`.

Inside the `h1` tag before the word `Showcase`, add the variable in curly braces
along with an `'s` after the curly braces.

Notice how you are now adding both HTML and JS in the same code.

Now create an object literal called `pokeCharacteristics` with a `type` and
a `move` key. Add values to both keys. (If you don't have any values, you can
use `Grass` for `type` and `Vine Whip` for `move`.)

Place that object inside your `return` statement below the `h1` tag.
(Remember your curly braces.)

Take a look in your sandbox browser. The error that you see indicates that you
cannot use a complete object literal inside your JSX. You must key into the
object, so go ahead and delete that line of code.

Instead create an `h2` tag that says something like, **Bulbasaur's type is Grass
and one of their moves is Vine Whip**. Key into your object literal to create
this JSX.

## Add an image to your JSX

Take a look inside the __images__ folder. Notice that there is an image for
Bulbasaur. If you would like, you can add a different image to this folder for
your character.

Inside your `Showcase` component, import your image using [ES6 imports] by
giving your image a variable name and assigning it to the relative path from the
current file--i.e., __Showcase.js__--to the image.

Now place an `img` tag between your `h1` and `h2` tags and assign the image
variable to the `src` attribute. Add an `alt` attribute and assign the
character's name to the `alt` attribute. (You can use a string or `favPokemon`
again.)

## Add inline CSS to your JSX

There are multiple ways to add CSS to your JSX. For now, let's begin with inline
CSS.

When using inline CSS inside your HTML-like elements, React expects a `style`
attribute that is assigned to an object. In order to execute that syntax, you
must use `{{}}` and place your inline styles inside.

Inside your style object React expects key/value pairs. Any CSS selector that is
normally kebab-case should be converted into camelCase. (E.g., `padding-right`
should be `paddingRight`.) Each value in your key/value pairs should be
represented in quotes as a string, and you don't need to specify `px` after
numbers.

Inside your `h2` tag, wrap a separate `span` tag around each of the two
`pokeCharacteristics`. Inside the first span make the background color green and
the text white. Inside the second span make the background color white and the
text green using hex colors.

## Add a background using external CSS

Let's add a background to our page by using external CSS. Create a file called
__App.css__ in your __src__ folder. Inside the __App.css__ file, add a class
with the name `background`. Remember, in this file, you use regular CSS. In your
background selector add these values:

```css
.background {
  background: linear-gradient(
    90deg,
    hsla(77, 100%, 70%, 1) 0%,
    hsla(206, 67%, 75%, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
}
```

Inside your __App.js__ file, import the relative path of the CSS file. Do not
assign it a variable name.

Now add the background class to your wrapper div in __App.js__. Remember, in JSX
class attributes are represented by using the word `className`.

Take a look inside your sandbox browser. You should now have a gradient
background added to your view. (The background and image might be easier to see
if you click the `Open In New Window` button in the upper right of the sandbox
browser.)

## Bonus

- Move all CSS in __Showcase.js__ to its own external file called
  __Showcase.css__ and assign classes to the elements.
- Remember to import the file into your __Showcase.js__ file and use classes
  where there was inline code.
- Center all elements on page using [Flexbox].
- Using inline styles, evenly distribute the height and width of the image, and
  turn it into a circle.

## What you have learned

**Congratulations!** You have successfully learned the basics of adding JSX to a
React functional component, including how to

1. Create a functional component
2. Nest one component inside of another
3. Add HTML-like elements to JSX
4. Add JavaScript expressions to JSX
5. Import and add an image
6. Use inline CSS inside your JSX
7. Use external CSS and import the file using a relative path

[CodeSandbox]: https://codesandbox.io
[JS expression]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions
[ES6 imports]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[Flexbox]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/