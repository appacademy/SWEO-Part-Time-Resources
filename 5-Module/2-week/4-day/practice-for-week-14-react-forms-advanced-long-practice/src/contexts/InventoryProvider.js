import React, { useState, useEffect, useContext } from 'react';

const InventoryContext = React.createContext({});
export const useInventoryContext = () => useContext(InventoryContext);

const InventoryProvider = ({children}) => {
    // TODO: Remove temporary seed data for testing
    const [qValues, setQValues] = useState([
        { value: 1, index: 1 },
        { value: 2, index: 2 },
        { value: 3, index: 3 },
        { value: 4, index: 4 },
        { value: 5, index: 5 },
        { value: 1, index: 6 },
    ]);

    useEffect(() => {
        console.log('qValues', qValues);
    }, [qValues]);

    return (
        <InventoryContext.Provider value={{
            qValues: qValues,
            setQValues: setQValues,
        }}>
            {children}
        </InventoryContext.Provider>
    )
};

export default InventoryProvider;