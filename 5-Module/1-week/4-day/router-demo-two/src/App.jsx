import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './components/Home'
import TweetIndex from './components/TweetIndex'
import TweetDetails from './components/TweetDetails'

import './App.css'
import SingleTweet from './components/SingleTweet'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'tweets',
    children: [
      {
        index: true,
        element: <TweetIndex />
      },
      {
        path: ':tweetId',
        element: <SingleTweet />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
