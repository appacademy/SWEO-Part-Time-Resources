import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'

export const useTheme = () => {
	const theme = useContext(ThemeContext)
	return theme
}
