## Phase 4: User-friendly messaging

Finally, you can complete the minimum functionality for this application by 
setting the message below the picture based on the number of feathers selected.

The current message only works well when there are no feathers (meaning the 
`count` is zero).

* Open _App.js_.
* Pass the `featherCount` prop into the `Message` component.

### Solution (if you need it)

Here in one possible solution. Yours will likely vary somewhat; and, that's a 
good thing. :)

Modify in _src/App.js_.

```javascript
<Message size={size} featherCount={featherCount} />
```

Add to _src/components/Message.js_.

```javascript
    const [message, setMessage] = useState('');

    useEffect(() =>{
        if (featherCount <= 0)
            setMessage('Oh my! Your bird is naked!');
        else if (featherCount >= 10) {
            setMessage('Full turkey!');
        } else {
            setMessage('Coming along...');
        }
    }, [featherCount])
```

Modify in _src/components/Message.js_.

```javascript
    return (
        <div className={`message ${sizeClass}`}>
            {message}
        </div>
    );
```

> Hint: You'll want to create a `sizeClass` state variable in the `Message`
> and do something similar to the logic in your `PictureDisplay` component.

## Bonus Phase A: Additional practice with `useEffect`

Write code for another `useEffect` to address the "TODO" comment in 
_src/components/PictureDisplay.js_.

```javascript
// TODO: Wrap in useEffect
```

> Hint: The guts of the effect handler function are already done. You need only
> employ the `useEffect` before and set an appropriate `deps` array after (or
> copy/paste the code into an appropriate debugging `useEffect` you coded 
> earlier). Make sure that feathers show up when you add them even if no color 
> is selected!

## Bonus Phase B: Refactoring

Sometimes, you might change your mind on the best implementation while you're 
working. It is a best practice to get SOMETHING working first, then *refactor* 
your code to make improvements.

For example, perhaps you'd like to calculate the class name to use for the 
`size` in only one place. You probably remember copying and pasting (or 
retyping) the calculation for the `className` to use for the size of the 
`PictureDisplay` and `Message` components. Now is your chance to change this 
decision.

* Copy the `sizeClass` state variable and corresponding `useEffect` with the 
calculation to _App.js_.
* Switch the prop passed to both _Message_ and _PictureDisplay_ from 
`size` to `sizeClass`.      
  * In _src/App.js_
  * In _src/components/Message.js_
  * In _src/components/PictureDisplay.js_
* Remove the `useState` and `useEffect` definitions that are no longer needed
  * In _src/components/Message.js_
  * In _src/components/PictureDisplay.js_
* If possible, remove any imports that are no longer in use. (There might not be
any, but it's good practice to check anyways!)

(Of course, you could also have refactored the code to simply set the size to
the class name directly, but then you wouldn't have gotten the extra practice
with `useEffect`!)

## Bonus Phase C: Additional practice with `React` props, state, layouts, etc.

There are a number of other enhancements you can make to this application to get
additional practice with the various aspects of *React* that you've learned.
Below, you'll find a few ideas to get you started. The steps for each are left
for you to discover.

* *Trivial*: Set default `size` to medium.
* *Easy*: Size button reflecting selection (Hint: Use the `disabled` prop).
* *Moderate*: Prevent the count text entry < 0 or > 10 (Hint: Refactor the input 
to a controlled form element by assigning its `value`).
* *Challenging*: Improve the layout for settings elements. What to do is up to 
you! (Hint: It will probably involve a mix of JSX and CSS.)