import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext"

const SideCard = () => {
  // const banana = useContext(HoroscopeContext);
  console.log("***** SIDECARD RENDERING *****");
  return (
    <div className='side-card'>
      <h1>React Context with Horoscopes</h1>
    </div>
  );
};

export default SideCard;