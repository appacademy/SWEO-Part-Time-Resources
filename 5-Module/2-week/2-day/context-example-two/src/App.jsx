import { useState } from 'react'
import ThemeContext from './contexts/ThemeContext'
import Page from './components/Page'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  if(theme === 'light'){
    document.body.style.background = 'white'
    document.body.style.color = 'black'
  }

  if(theme === 'dark'){
    document.body.style.color = 'white'
    document.body.style.background = 'black'
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Page />
    </ThemeContext.Provider>
  )
}

export default App
