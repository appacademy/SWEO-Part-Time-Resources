## Phase 2: `Folder`

In this phase, you will refactor the `Folder` component from a Class Component
into a Function Component. The `Folder` component is rendered inside of `App`,
where it's passed an array of folder objects as props. The `Folder` component
renders the tabs of the folder as a sub-component called `Header`. The selected
tab is stored as a component state variable in `Folder`, and the content of the
selected tab is rendered inside of the `Folder` component.

Create a new `Folder` Function Component that expects the `folders` prop passed
in from its parent component, `App`.

Convert the `currentTab` state variable in the `Folder` Class Component into a
state variable in the `Folder` Function Component.

Convert any instances of `this.state` or `this.props` in the `Folder` Class
Component to their respective variables in the `Folder` Function Component.

Convert the `selectTab` method into a regular function.

Test your conversion in the browser. Be sure to use debugging tools like
`debugger`, `console.log`, and setting breakpoints in the browser's DevTools.
Also remember to check the error messages if you run into any issues.

[http://localhost:3000]: http://localhost:3000
[useRef]: https://reactjs.org/docs/hooks-reference.html#useref