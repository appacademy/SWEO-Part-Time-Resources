import { useState, useContext } from 'react'
import Page from './components/Page';
import { ThemeContext, AuthContext } from './context/ThemeContext'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark');


  if(theme === 'dark') {
    document.body.style.background = "black"
    document.body.style.color = "blue"
  }
  if(theme === 'light') {
    document.body.style.background = "white"
    document.body.style.color = "black"
  }


  return (
   <ThemeContext.Provider value={{theme, setTheme}}>
      <Page/>
   </ThemeContext.Provider>
  )
}

export default App
