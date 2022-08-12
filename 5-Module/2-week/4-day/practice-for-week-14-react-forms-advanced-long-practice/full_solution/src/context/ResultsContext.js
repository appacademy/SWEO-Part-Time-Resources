import { createContext, useContext, useState } from 'react';

const ResultsContext = createContext();

export const useResults = () => useContext(ResultsContext);

function ResultsProvider({ children }) {
  const [results, setResults] = useState(null);

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      {children}
    </ResultsContext.Provider>
  )
}

export default ResultsProvider;