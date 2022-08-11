import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import { useTheme } from '../../context/ThemeContext';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const { themeName } = useTheme();

  return (
    <section>
      <img  className='greenhouse-img'
            src={themeName === 'day' ? dayImage : nightImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;