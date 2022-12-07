import horoscopesObj from '../data/horoscopes';
import { HoroscopeConsumer } from '../context/HoroscopeContext';

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  const { setCurrentSign } = HoroscopeConsumer();
  console.log('Rendering from Navbar');
  return (
    <nav>
      {horoscopes.map(sign => (
        <span onClick={() => setCurrentSign(sign)} key={sign}>
        {sign}
        </span>
      ))}
    </nav>
  )
};

export default Navbar;