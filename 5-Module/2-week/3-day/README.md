# Building and Using Custom Hooks in React
## 1. Understanding Custom Hooks
- **What is a Custom Hook?**
  - A JavaScript function whose name starts with "use" and that can call other hooks.
- **Why Use Custom Hooks?**
  - Reusability: Encapsulate logic that can be reused across multiple components.
  - Separation of concerns: Clean and maintainable code by separating component logic from UI.

## 2. Creating a Custom Hook
- **Example Scenario**: Let's say you want to fetch data from an API and use it in multiple components.
- **Creating the Hook**: `useFetch`

```js
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
```

## 3. Using the Custom Hook in a component

```js
import React from 'react';
import useFetch from './useFetch';

function DataDisplayComponent() {
    const { data, loading, error } = useFetch('/apiEndpoint');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <div>Data:</div>
            <div>{JSON.stringify(data)}</div>
        </div>
    );
}

export default DataDisplayComponent;
```