import { useState, useContext } from "react";

import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);

  return (
    <>
      <button onClick={() => setMatch(!match)}>Match</button>
      {
        match &&
        <div>{sign.match}</div>
      }
    </>
  );
};

export default Match;