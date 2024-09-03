# Authenticate Me - Deploying Your Express + React Project To Render

Before you begin deploying, **make sure to remove any `console.log`s or
`debugger`s in any production code**. You can search your entire project folder
to see if you are using them anywhere by clicking on the magnifying glass icon
on the top left sidebar of VSCode.

Since you have presumably already deployed your backend on Render, deploying
your frontend will be rather straightforward. You just need to generate the
static, production versions of your frontend files and configure the backend
routes to serve them.

Let's get started!

## Phase 1: Setting up your Express backend

Right now, your React application is on a different localhost port than your
Express application. However, since your React application consists entirely of
static files that don't need to bundled continuously with changes in production,
your Express application can serve the React assets in production too. To
generate these static files, run `npm run build` in the __frontend__ folder. By
default, the build command will store the generated files in the
__frontend/dist__ folder.

To enable your backend to serve these frontend files, add the following changes
to your __backend/routes.index.js__ file.

In a production environment, have the root route serve the React application's
static __index.html__ file along with an `XSRF-TOKEN` cookie. Then serve up all
the React application's static files using the `express.static` middleware.
Serve the __index.html__ and set an `XSRF-TOKEN` cookie again on all routes that
don't start in `/api`. Your __backend/routes/index.js__ should now look like
this:

```js
// backend/routes/index.js
const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../frontend', 'dist', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/dist")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../frontend', 'dist', 'index.html')
    );
  });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
      'XSRF-Token': csrfToken
    });
  });
}

module.exports = router;
```

## Phase 2: Setting up your React application

Deploying your Express site with a static React frontend means that you can
generate your frontend build files before you deploy your app; you do not need
to generate them while deploying. In fact, if you open your
__frontend/package.json__, you will see that the `vite` package appears under
`devDependencies`, not `dependencies`. You have no need to run `vite` in
production!

While this makes deployment somewhat simpler--no need to add frontend build
commands to your root __package.json__!--it also means that you yourself are
responsible for making sure that you re-build your frontend files after any
change. You should accordingly make it a habit to **ALWAYS run `npm run build`
in your __frontend__ folder and commit those changes before deploying / pushing
to GitHub.**

**Note:** If you do not make this a habit, then at some point you will likely
spend hours trying to figure out why the bug fixes, styling, and/or other
changes you've made to your frontend are not having their desired effects.

As mentioned above, `npm run build` will store your build files in the
__frontend/dist__ folder. These are the static files that your backend server
will serve. To make them available in production, you need to do one more thing.

Open __frontend/.gitignore__. You will likely see `dist` listed as one of the
folders `git` should ignore. Folders with build files are typically gitignored
because they can be large and the included files can always be regenerated
locally. Now, however, you need those files pushed to GitHub so you can access
them in deployment. Accordingly, add a `!` before `dist` in your frontend
__.gitignore__ (or add the whole phrase if `dist` does not already appear):

```plaintext
!dist
```

The `!` cancels the following pattern from being gitignored. This ensures that
your frontend __dist__ folder will be available for pushes to GitHub even if
other parent directories have __.gitignore__ files that would exclude it.

Finally, run `npm run build` in your __frontend__ directory and commit your
changes.

**Tip:** It's worth stating again: **You must ALWAYS run `npm run build` in your
__frontend__ folder and commit those changes before pushing to GitHub /
deploying.** To help with this, you can add the `--watch` flag to the build
script in your __frontend/package.json__:

```json
  "build": "vite build --watch"
```

If you add this flag, then running `npm run build` will cause Vite to watch your
files and update the build anytime an included file changes. It's basically a
way of keeping the `build` task running. (You'll want to run this in a separate
terminal session.) Even with this flag, however, **you must still remember to
run `npm run build` at least once to start the watch.**

## Phase 3: Deploying to Render

Once you've finished Phases 1 and 2, push your changes on the `main` branch. If
you have auto-deploy set up on Render--and you should--this push should trigger
a re-deployment of your Auth-Me app. (If it does not, log in to [Render], go to
your app's page, and click the `Manual Deploy` button on the upper right. Select
`Clear build cache & deploy` from the `Manual Deploy` dropdown menu.)

That's it! You shouldn't need to change anything on Render: you are still just
building and running your backend server. Now that backend server just has some
new routes that will serve files from the new __frontend/dist__ folder.

Open your deployed site--log in to [Render] if you don't remember the URL--and
check to see if you have successfully deployed your Express + React application
to Render!

If you see an `Application Error` or are experiencing different behavior than
what you see in your local environment, check the logs. The logs may clue you
into why you are experiencing errors or different behavior.

## Wrapping up

Congratulations, you've created a production-ready, dynamic, full-stack website
that can be securely accessed anywhere in the world! Give yourself a pat on the
back. You're a web developer!

If you ever need to update/redeploy your frontend, just follow these steps:

1. Make your changes to the files in the __frontend__ directory.
2. Run `npm run build` to refresh the build files in the __frontend/dist__
   directory with your changes.
3. Commit all changes to the `main` branch.
4. Push to GitHub.
5. Go to your site and confirm that the changes have been auto-deployed. (This
   last step might take a few minutes to manifest.)

[Render]: https://dashboard.render.com/
