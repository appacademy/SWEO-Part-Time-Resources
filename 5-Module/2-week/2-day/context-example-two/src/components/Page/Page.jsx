import Header from "../Header";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";

export default function Page() {
    const themeState = useContext(ThemeContext)

    console.log(themeState, 'from Page component')


  return (
    <Header />
  )
}
