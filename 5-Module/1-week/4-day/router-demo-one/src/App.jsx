import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './components/Home'
import TweetIndex from './components/TweetIndex'
import TweetInfo from './components/TweetInfo'

import './App.css'

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
        element: <TweetIndex/>
      },
      {
        path: ':tweetId',
        element: <TweetInfo />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
