import horoscopesObj from '../data/horoscopes';
import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Navbar = () => {

  const { setCurrentSign } = useContext(HoroscopeContext)

  const horoscopes = Object.keys(horoscopesObj);
  console.log('NavBar component rendering');
  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={() => setCurrentSign(sign)}>
        {sign}
        </span>
      ))}
    </nav>
  )
};

export default Navbar;
