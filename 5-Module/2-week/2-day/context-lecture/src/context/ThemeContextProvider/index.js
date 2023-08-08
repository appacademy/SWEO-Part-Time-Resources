import {createContext, useState} from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider({children}){

	const style = {
		"backgroundColor": "#8a6c1a",
		"color": "#a89f85"
	}

	return(
		<ThemeContext.Provider value={{style}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider;
