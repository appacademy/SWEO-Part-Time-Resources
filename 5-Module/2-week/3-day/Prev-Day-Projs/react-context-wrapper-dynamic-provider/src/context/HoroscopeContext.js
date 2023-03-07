//!!START SILENT
import { createContext, useState } from 'react';
import horoscopesObj from '../data/horoscopes';
//!!END
//!!ADD
// import { createContext } from 'react';
//!!END_ADD

export const HoroscopeContext = createContext();
//!!START SILENT

const HoroscopeProvider = props => {
  const [currentSign, setCurrentSign] = useState('Leo');
  const sign = horoscopesObj[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
//!!END
