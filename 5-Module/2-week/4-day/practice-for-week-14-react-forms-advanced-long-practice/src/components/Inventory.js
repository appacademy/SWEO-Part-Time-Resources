import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useInventoryContext } from '../contexts/InventoryProvider';
import InventoryQuestion from './InventoryQuestion';

import spiData from '../mockdata/spi.json';

const Inventory = () => {
    const { setQValues } = useInventoryContext();
    const history = useHistory();

    const questionCount = spiData.questions.filter(
        q => q.type !== 'section'
    ).length;

    const [ready, setReady] = useState(false);
    const [values, setValues] = useState({});

    const handleValueUpdate = (code, value, index) => {
        const newValues = {...values};
        // 'value' comes from the form as a number string; make sure to store it
        // as an actual number instead so that the math functions in the report 
        // will work.
        // NOTE THAT THIS IS AN EXTRA STEP THAT WAS NOT SHOWN IN THE VIDEOS.
        newValues[code] = {value: Number(value) , index: index};
        setValues(newValues);

        const keys = Object.keys(newValues);
        setReady(keys.length === questionCount);
    };

    const handleSubmit = (e) => {
        // Prevent the default form behavior
        // so the page doesn't reload.
        e.preventDefault();

        const result = [];
        for (let prop in values) {
            result.push(values[prop]);
        }
        result.sort((a,b) => a.index < b.index ? -1 : 1)

        // put values in context so the report can access them
        setQValues(result);

        history.push('/report');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div><h2>Inventory Assessment</h2></div>
            {spiData.questions.map((q, index) => {
                if (q.type === 'section') {
                    return (
                        <h3 key={q.code}>{q.instructions}</h3>
                    );
                } else {
                    return (
                        <InventoryQuestion
                            name={q.code}
                            stem={q.stem}
                            key={q.code}
                            onChange={
                                (value) => handleValueUpdate(q.code, value, index)
                            }
                        />
                    );
                }
            })}
            <div className="form-buttons">
                <button type="submit" disabled={
                    !ready
                }>Submit</button>
            </div>
        </form>
    );
};

export default Inventory;