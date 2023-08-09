import {createContext} from 'react'

export const ThemeContext = createContext()


export default function ThemeContextProvider({children}){

	const style = {
		"color": "#9d9da3",
		"backgroundColor": "#342c8a"
	}

	return (
		<ThemeContext.Provider value={{"style" : style}}>
			{children}
		</ThemeContext.Provider>
	)
}
