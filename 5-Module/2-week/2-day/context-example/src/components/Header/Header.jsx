import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import './header.css'

export default function Header() {
  const themeState = useContext(ThemeContext); //grab the context based on the provider's value
  // ...

    const changeTheme = (e) => {
        if(themeState.theme === 'light'){
            themeState.setTheme('dark')
        }
        if(themeState.theme === 'dark'){
            themeState.setTheme('light')
        }
    }

  return (
    <div className={themeState}>
        <button className={`button-${themeState.theme}`} onClick={changeTheme}>change Theme</button>
    </div>
  )
}