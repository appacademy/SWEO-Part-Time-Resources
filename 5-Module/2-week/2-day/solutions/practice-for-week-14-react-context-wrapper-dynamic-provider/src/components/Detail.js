import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Detail = () => {
  const { sign: { backgroundImg, name, element, traits } } = useContext(HoroscopeContext);

  return (
    <div className='details'>
      <img
        src={backgroundImg}
        alt=''
      />
      <h2>{name}</h2>
      <h4>Element: {element}</h4>
      <h4>Traits: {traits}</h4>
    </div>
  );
};

export default Detail;