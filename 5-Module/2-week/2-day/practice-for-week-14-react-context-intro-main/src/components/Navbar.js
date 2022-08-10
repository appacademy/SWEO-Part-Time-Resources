import horoscopeObj from '../data/horoscopes';
import {useContext } from 'react'
import { HoroscopeContext } from '../HoroscopeContext';


const Navbar = () => {
  const {setCurrentSign} = useContext(HoroscopeContext)
  const horoscopes = Object.keys(horoscopeObj);
  return (
    <nav>
      {horoscopes.map(sign => (
        <span
        onClick={() => setCurrentSign(sign)}
        key={sign}>{sign}</span>
      ))}
    </nav>
  );
};

export default Navbar;
