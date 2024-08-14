import { useContext } from "react"
import ThemeContext from "../../contexts/ThemeContext"
import './header.css'

export default function Header() {

    const themeState = useContext(ThemeContext)

    console.log(themeState)

    const handleClick = (e) => {
        e.preventDefault()

        if(themeState.theme === 'light'){
            themeState.setTheme('dark')
        }
        if(themeState.theme === 'dark'){
            themeState.setTheme('light')
        }

    }

  return (
    <div>
        <button className={`button-${themeState.theme}`} onClick={e => handleClick(e)}>change theme</button>
    </div>
  )
}
