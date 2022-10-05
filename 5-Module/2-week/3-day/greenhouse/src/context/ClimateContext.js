import { createContext, useContext, useState } from 'react';

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

const ClimateContext = createContext();

const ClimateProvider = (props) => {
    const [temp, setTemp] = useState(50);
    const [humid, setHumid] = useState(40);

    return (
        <ClimateContext.Provider value={{ temp, setTemp, humid, setHumid }}>
            {props.children}
        </ClimateContext.Provider>
    );
};

export const useClimate = () => useContext(ClimateContext);

export default ClimateProvider;
