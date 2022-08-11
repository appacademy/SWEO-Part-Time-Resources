import horoscopeObj from '../data/horoscopes';
import {useContext } from 'react'
import { HoroscopeContext } from '../Context/HoroscopeContext';
const Navbar = () => {
  const {setCurrentSign}  = useContext(HoroscopeContext)

  const horoscopes = Object.keys(horoscopeObj);
  return (
    <nav>
      {horoscopes.map(sign => (
        <span 
        onClick={function(){setCurrentSign(sign)}}
        key={sign}>{sign}</span>
      ))}
    </nav>
  );
};

export default Navbar;
