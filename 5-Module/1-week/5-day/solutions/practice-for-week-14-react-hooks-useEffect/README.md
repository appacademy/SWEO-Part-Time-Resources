# Practice: Basic Hooks - useEffect

In this practice you will:

- Create a `useEffect` to change the color of the background based on an
  interval
- Create a `useEffect` to save the current [http status code][status-codes] in
  the browser's [`localStorage`][local-storage]
- Create a `useEffect` to show an alert box when the [http status
  code][status-codes] does not exist or when the user does not enter a code into
  the input box

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Change Background Color

Your task in this part of the practice is to change the background color of your
app's `Cat Status` page every 5 seconds. The app currently sets the background
using the `colors` array imported from __data.js__ along with a number stored in
the `colorNum` slice of state (see __Cat.js__). You simply need to use
`setInterval` to update `colorNum` every 5 seconds.

[`setInterval`][set-interval] is a good example of a [_side
effect_][side-effects]. React prefers that you place side effects inside a
[`useEffect`][use-effect] hook.

Accordingly, to change the background color, you should create a `useEffect`
that takes a `setInterval` function inside the callback function. This
`useEffect` should run only once. (Hint: Check your homework if you don't
remember how to do this.)

The interval should change the `colorNum` slice of state every 5 seconds. When
setting the state, you should ensure that you have the most updated state. Also,
make sure that the state loops through the colors, i.e., it should return to the
first color after displaying the last color in the array.

Finally, the `Home` button at the top of the screen will, when clicked, return
the user to the home screen, effectively unmounting the `Cat` component. To
prevent a memory leak, make sure to cancel the interval in the `useEffect`
whenever the `Cat` component unmounts.

Your code should look similar to the code below:

```js
 useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorNum(prevNum => ++prevNum % colors.length);
    }, 5000);

    return () => clearInterval(colorInterval);
  }, []);
```

## Local Storage

[`localStorage`][local-storage] is another example of a side effect. It is a
part of the [Window object][window-object] in the browser. It can be used to
store trivial information that anyone is allowed to see. **You should never
store personal or private information in `localStorage`.**

Your next goal is to set your `statusChange` slice of state to the value of the
`catStatus` string. If there is no `catStatus` variable in your `localStorage`,
the state should be set to `418`. Use `localStorage`'s `.getItem` method to
retrieve the value of `catStatus`.

Open up your browser--not sandbox--DevTools. Choose `Application` from the top
bar. Look for `Local Storage` in the `Storage` section. You should see the
address of your sandbox browser (**NOT** `https://codesandbox.io`). Right click
the address and choose `Clear`; this will clear out your app's `localStorage`.
When you reload the page, you should see a picture of a cat with the status code
`418 I'm a teapot`.

Your code should look similar to the following code:

```js
 const [statusChange, setStatusChange] = useState(
    localStorage.getItem('catStatus') || '418'
  );
```

Next, you want to set the `catStatus` key in your `localStorage` each time the
`statusChange` slice of state changes. `useEffect` is the perfect place to do
this. Create a `useEffect` that uses the `.setItem` method from `localStorage`
to set the value of `catStatus` to the `statusChange` slice of state whenever
the `statusChange` variable updates.

With your DevTools still open and your `localStorage` clear, reload the sandbox
browser page and notice that your `localStorage` is immediately set with a
`catStatus` of `418`.

Type an existing status in the input box. Notice that `localStorage` updates
each time you click the `Change Status` button. Also notice that, if the `status
code` does not exist, it shows a `404` for the image. That is how [HTTP
Cats][http-cats] is built.

If all is working the code you added should look similar to the code below:

```js
  useEffect(() => {
    localStorage.setItem('catStatus', statusChange);
  }, [statusChange]);
```

## Use Alert to Notify the User

Previously you saw that a `404` image shows when you put in a status code that
is not a part of the API. It's better UX (User eXperience) to send an alert when
a user submits a status that is empty or not included in the API. Once again,
you can do this through a `useEffect`.

Create a new `useEffect`. Inside the callback function, create a conditional to
alert the user with `Please Enter A Code` when the user submits with an empty
input box. You should also set the `statusChange` slice of state to `404` so
that when you reload the page you do not break your code.

Create another conditional for when the code does not exist in the API. You will
use the `codes` array that is imported from __data.js__. This array contains all
of the codes included in the API. If the code is not included, alert the user
with a message containing the number of the code and a message. E.g., if the
status input is 5000, the message should say: `Code 5000 might exist, but it is
not a proper Cat Status code.` Once again, update the `statusChange` slice of
state to `404`.

Now test again in your browser by clicking `Change Status` with an empty input
box. Next, test with a number for which a `Cat Status` does not exist. In both
cases you should see an alert message. Afterwards, `localStorage` should fill
with a `404` value for `catStatus` which you can see in your DevTools.

If you have succeeded, your code may look like the code below:

```js
  useEffect(() => {
    if (statusChange === '') {
      alert('Please Enter A Code');
      setStatusChange('404');
      return;
    }
    if (!codes.includes(Number(statusChange))) {
      alert(
        `Code ${statusChange} might exist, but it is not a proper Cat Status code.`
      );
      setStatusChange('404');
    }
  }, [statusChange]);
```

## What you have learned

**Congratulations!** In this practice you have learned how to use `useEffect` to
handle these side effects:

1. Applying a `setInterval` function to change the background color
2. Storing and retrieving trivial data in `localStorage`
3. `alert`ing the user when input is incorrect

[http-cats]: https://http.cat/
[status-codes]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
[set-interval]: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
[use-effect]: https://reactjs.org/docs/hooks-effect.html
[local-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[side-effects]: https://beta.reactjs.org/learn/keeping-components-pure#side-effects-unintended-consequences
[window-object]: https://developer.mozilla.org/en-US/docs/Web/API/Window
[CodeSandbox]: https://www.codesandbox.io