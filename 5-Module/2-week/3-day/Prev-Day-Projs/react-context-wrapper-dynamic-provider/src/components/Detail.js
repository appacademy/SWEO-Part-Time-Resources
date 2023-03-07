import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Detail = () => {
  //!!START SILENT
  const { sign } = useContext(HoroscopeContext);
  //!!END
  //!!ADD
  // const horoscopesObj = useContext(HoroscopeContext);
  //!!END_ADD

  return (
    <div className='details'>
      {/*!!START SILENT */}
      <img alt='horoscope name' src={sign.backgroundImg} />
      <h2>{sign.name}</h2>
      <h4>Element: {sign.element}</h4>
      <h4>Traits: {sign.traits}</h4>
      {/*!!END */}
      {/*!!ADD */}
      {/* <img */}
        {/* src='https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg' */}
        {/* alt='' */}
      {/* /> */}
      {/* <h2>Current Sign Name</h2> */}
      {/* <h4>Element: </h4> */}
      {/* <h4>Traits: </h4> */}
      {/*!!END_ADD */}
    </div>
  );
};

export default Detail;
