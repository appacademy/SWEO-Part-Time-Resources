import React, { useState } from 'react';

const InventoryQuestion = ({name, stem, onChange}) => {
    const [value, setValue] = useState('');

    return (
        <div className="inventory-question">
            <p className="inventory-prompt">{stem}</p>
            <select
                name={name}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                value={value}
                className="inventory-select"
            >
                <Options />
            </select>
        </div>
    );
}

const Options = () => {
    return [
        <option key="prompt" value="" disabled>Select one...</option>,
        <option key="1" value="1">Strongly Disagree</option>,
        <option key="2" value="2">Disagree</option>,
        <option key="3" value="3">Neutral</option>,
        <option key="4" value="4">Agree</option>,
        <option key="5" value="5">Strongly Agree</option>,
    ];
};

export default InventoryQuestion;
