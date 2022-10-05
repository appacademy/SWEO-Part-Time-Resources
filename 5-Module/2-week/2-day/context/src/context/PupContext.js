import { createContext, useState, useContext } from 'react';
import speedy from '../pups/speedy-pup.jpg';

export const PupContext = createContext();

export function PupProvider(props) {
    const [puppyType, setPuppyType] = useState(speedy);

    const contextObj = {
        puppyType: puppyType,
        setPuppyType: setPuppyType,
		name: "Zaviar"
    };
    return (
        <PupContext.Provider value={contextObj}>
            {props.children}
        </PupContext.Provider>
    );
}

export function usePuppyType() {
    return useContext(PupContext);
}
