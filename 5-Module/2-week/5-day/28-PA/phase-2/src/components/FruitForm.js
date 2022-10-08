import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function FruitForm({ fruits }) {
    const [name, setName] = useState('');
    const [sweetness, setSweetness] = useState(1);
    const [color, setColor] = useState(COLORS[0]);
    const [seeds, setSeeds] = useState('yes');
    const [errors, setErrors] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const history = useHistory();

    const submit = () => {
        const data = {
            name,
            sweetness,
            color,
            seeds,
        };

        console.log(data);

        history.push('/');
    };

    useEffect(() => {
        const e = [];
        const exists = fruits.map((el) => el.name.toLowerCase());

        if (name.length < 3) e.push('Name must be 3 or more characters');
        if (name.length > 20) e.push('Name must be 20 characters or less');
        if (exists.includes(name.toLowerCase())) e.push('Name already exists.');
        if (sweetness < 1 || sweetness > 10)
            e.push('Sweetness must be between 1 and 10');

        if (e.length) setDisabled(true);
        else setDisabled(false);
        setErrors(e);
    }, [name, sweetness, fruits]);

    return (
        <form className="fruit-form" onSubmit={submit}>
            <ul className="errors">
                {errors.length > 0 &&
                    errors.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <h2>Enter a Fruit</h2>
            <ul className="errors"></ul>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Select a Color
                <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                >
                    {COLORS.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Sweetness
                <input
                    type="number"
                    name="sweetness"
                    value={sweetness}
                    onChange={(e) => setSweetness(e.target.value)}
                />
            </label>
            <label>
                <input
                    type="radio"
                    value="no"
                    name="seeds"
                    checked={seeds === 'no'}
                    onChange={() => setSeeds('no')}
                />
                No Seeds
            </label>
            <label>
                <input
                    type="radio"
                    value="yes"
                    name="seeds"
                    checked={seeds === 'yes'}
                    onChange={() => setSeeds('yes')}
                />
                Seeds
            </label>
            <button type="submit" disabled={disabled}>
                Submit Fruit
            </button>
        </form>
    );
}

export default FruitForm;
