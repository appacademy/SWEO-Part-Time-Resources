//!!START SILENT
import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';
//!!END
import horoscopesObj from '../data/horoscopes';

const Navbar = () => {
  //!!START SILENT
  const { setCurrentSign } = useContext(HoroscopeContext)
  //!!END
  const horoscopes = Object.keys(horoscopesObj);

  //!!START SILENT
  console.log('Navbar component rendering');

  //!!END
  return (
    <nav>
      {horoscopes.map(sign => (
        //!!START SILENT
        <span key={sign} onClick={() => setCurrentSign(sign)}>
          {sign}
        </span>
        //!!END
        //!!ADD
        // <span key={sign}>
        //   {sign}
        // </span>
        //!!END_ADD
      ))}
    </nav>
  )
};

export default Navbar;
