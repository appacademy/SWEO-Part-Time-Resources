import React, { useEffect, useState } from 'react'
import { useInventoryContext } from '../contexts/InventoryProvider';
import { Link } from 'react-router-dom';

const InventoryReport = () => {
    const { qValues } = useInventoryContext();
    const [results, setResults] = useState([])

    useEffect(() => {
        if (qValues && qValues.length > 0) {
            let sum1 = 0;
            let sum2 = 0;
            let sum3 = 0;
            for (let i=0; i<qValues.length; i++) {
                // 0 / 3 => mod 0, so that's in 1st sum
                if (i % 3 === 0) sum1 += qValues[i].value;
                if (i % 3 === 1) sum2 += qValues[i].value;
                if (i % 3 === 2) sum3 += qValues[i].value;
            }
            const totalSum = sum1 + sum2 + sum3;

            const percent1 = Math.round(100 * sum1 / totalSum);
            const percent2 = Math.round(100 * sum2 / totalSum);
            const percent3 = Math.round(100 * sum3 / totalSum);

            const percents = [
                {
                    label: 'Sight',
                    value: percent1,
                    sum: sum1,
                },
                {
                    label: 'Hearing',
                    value: percent2,
                    sum: sum2,
                },
                {
                    label: 'Touch, taste or smell',
                    value: percent3,
                    sum: sum3,
                },
            ];
            // sort on value with highest one first
            percents.sort((a,b) => a.value < b.value ? 1 : -1);
            setResults(percents);
        } else {
            setResults([]);
        }
    }, [qValues]);

    return (
        <div>
            <h2>Inventory Report</h2>
            {qValues && qValues.length > 0 
                ? <div>
                    <h3>Results</h3>
                    <ul>
                        {results.map((item) => <li key={item.label}>
                            {item.label}: {item.value}%
                        </li>)}
                    </ul>
                    <h3>Question Answers</h3>
                    <ul>
                        {qValues.map((item) => <li key={item.index}>{item.value}</li>)}
                    </ul>
                </div>
                : <div>Please take the <Link to="/inventory">inventory</Link>.</div>
            }
        </div>
    );
};

export default InventoryReport;