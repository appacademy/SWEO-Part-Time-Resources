import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";

const Layout = () => {
  return (
    <div className="app">
      <h1>App Component</h1>
      <nav className="comp nav">
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive? 'purple' : ''} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive? 'purple' : ''} to="/stocks">Stocks</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive? 'purple' : ''} to="/movies">Movies Anchor</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Home />
  // },
  // {
  //   path: 'stocks',
  //   element: <Stocks />
  // },
  // {
  //   path: 'movies',
  //   element: <Movies />
  // },
  // {
  //   path: '*',
  //   element: <h1>Page Not Found</h1>
  // }
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "stocks",
        element: <Stocks />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: '/not-logged-in',
        element: <h1>You Must Be Logged In To Enter.</h1>
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
