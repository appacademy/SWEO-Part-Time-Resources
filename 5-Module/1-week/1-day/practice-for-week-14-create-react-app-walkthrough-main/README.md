# Practice: Create React App

In this practice, you will

- Generate a React app using the `create-react-app` CLI tool
- Modify it into a template that you can use more easily

## Generate a React app

Open a terminal and change the directory until you are in the directory where
you want to create your React app.

To begin, install a global version of `create-react-app`:

```bash
npm i -g create-react-app
```

You only need to install `create-react-app` on your computer once, i.e., not
before every project.

> **Note**: Although the official `create-react-app` [documentation][cra] no
> longer recommends installing a global version of `create-react-app`, App
> Academy still recommends that you install it globally. This is because App
> Academy also encourages you to use `nvm` (Node Version Manager) to manage
> versions of Node.js. If you run `npx create-react-app` (see below) without
> having first installed `create-react-app` globally, then `nvm` will cache the
> version that you run. This cached version effectively gets treated as a global
> installation, but, because it is hidden by `nvm`, it is a global installation
> that is difficult to find and update. Accordingly, when new `create-react-app`
> releases appear, the cached version can cause hard-to-resolve version
> conflicts that will prevent `create-react-app` from running. A true global
> version, in contrast, can be updated simply by re-running the `npm`
> installation command.
>
> TL;DR: Installing `create-react-app` globally enables you to easily update and
> maintain the `create-react-app` version that you are using with `nvm`.

Once you have installed `create-react-app`, run the following command:

```sh
npx create-react-app react-template
```

The main part of the command is `npx create-react-app`, which takes a filename
or path. The command will generate a React app based on that filename or path
and install React's dependencies for you. Since you've passed the name
`react-template` to the command, it will make a __react-template__ directory
in your working directory and bootstrap the React app in there.

In your terminal, `cd` into the __react-template__ directory. If you ran this
command inside a pre-existing git repository, then there will not be a __.git__
folder in this new directory. If you did not run the `npx` command in a git
repository, then the new directory will have a __.git__ folder in place for you.
Then, you can run `npm start` to run your React app in a development
environment. Ignoring the __node_modules__ directory with all the installed
dependencies, the current file structure in the __react-template__ folder looks
like this:

```plaintext
react-template
├── .gitignore              A standard .gitignore file tailored for React apps
├── README.md               A generic README for a generated project
├── package-lock.json       The package lock file
├── package.json            The package.json file
├── public                  A directory to contain static images
│   ├── favicon.ico         The fancy icon to show up in the tab
│   ├── index.html          The skeleton HTML file React will put its DOM into
│   ├── logo192.png         A small version of the React logo
│   ├── logo512.png         A larger version of the React logo
│   ├── manifest.json       A manifest file for mobile device screen shortcuts
│   └── robots.txt          A robots.txt file
└── src
    ├── App.css             The App component's CSS
    ├── App.js              The App component
    ├── App.test.js         Test for the App component
    ├── index.css           CSS for the entire site
    ├── index.js            The entry file, code that renders the App component
    ├── logo.svg            The fancy spinning React logo
    ├── reportWebVitals.js  A performance measurement tool for the application
    └── setupTests.js       A file to set up tests
```

## Modify the current React app

Let's remove all the files that, for the most part, you will not use.

In the __public__ directory, remove the following files:

- __logo192.png__
- __logo512.png__
- __robots.txt__ (If you'd like to know more about what this file does, [here's
  a link][robots.txt].)

In the __src__ directory, remove the following files:

- __App.css__
- __App.test.js__
- __logo.svg__
- __reportWebVitals.js__
- __setupTests.js__

Because you deleted those files, the application will no longer build. If
you haven't started your React app with `npm start` yet, now is a great time to
start it so that you can see the error messages that will show up.

Next, open up __src/App.js__ and remove the following lines:

```js
  import logo from './logo.svg';
  import './App.css';
```

Then delete everything between the parentheses of the `return` statement and
replace it with some JSX that shows an `h1` element with the message "Hello from
App". Your edits should result in a file that has this content.

```js
  // ./src/App.js
  function App() {
    return <h1>Hello from App</h1>;
  }
```

When you save that file, it will try to build your project again. This time it
will complain about the missing __reportWebVitals__ file. Open __src/index.js__
and remove the lines:

```js
  import reportWebVitals from './reportWebVitals';

  // Some code ...

  reportWebVitals();
```

You can delete the big comment at the bottom of the file, too, because it will
no longer be relevant. When you complete those edits, you should now see "Hello
from App" in the browser. The __src/index.js__ file should look like this.

```js
  // ./src/index.js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
```

At this point, the application will build, but you will still see an error in
your browser's DevTools console complaining about the missing __logo192.png__
file. Open up __public/manifest.json__ and remove the `icons` property and its
associated array. Also, change the short name to "React Template" and the name
to "Create React App Template". Once you save this __manifest.json__ file, the
error in your browser will go away. The updated manifest file should look like
this.

```json
  {
    "short_name": "React Template",
    "name": "Create React App Template",
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff"
  }
```

The title of the web page still reads "React App". To change that, open up the
__public/index.html__ file and update the `title` element to read "React
Template".

The __src/index.css__ file is where all of the site-wide (not
component-specific) CSS style rules should be defined. Remove all the default
styling in the __src/index.css__ file and add this comment:

```css
  /* TODO Add site wide styles */
```

Finally, open your __package.json__ and remove the `"web-vitals"` line from the
`dependencies` object. Run `npm install` again to update your
__package-lock.json__.

**Add and commit your files.** This is the baseline application. From here on
out, you can modify files with impunity!

To use this React template project, you can just copy this baseline application
into a new project folder. (Don't forget to update your application names and
titles in __public/manifest.json__, __public/index.html__, and
__package.json__.) Alternatively, you can use [App Academy's Create React App
template]--which basically produces the same baseline application that you just
created--by running the following command:

```sh
npx create-react-app <project-folder-name> --template @appacademy/react-v17
```

Replace `<project-folder-name>` with the name of the project folder you want to
create with the template.

## What you have learned

**Congratulations!** In this practice you have learned how to

- Bootstrap a React app with the `create-react-app` CLI tool
- Remove extraneous files to make the template easier to use

[cra]: https://create-react-app.dev/docs/getting-started/
[robots.txt]: https://en.wikipedia.org/wiki/Robots_exclusion_standard
[app academy's create react app template]: https://www.npmjs.com/package/@appacademy/cra-template-react-v17