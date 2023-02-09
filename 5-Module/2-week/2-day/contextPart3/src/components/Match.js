import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

export default function Match() {
    const [match, setMatch] = useState(false);
    const { sign } = useContext(HoroscopeContext);
    console.log("log:", sign)
    const papaya = "table"
    console[papaya](sign)
    return (
        <>
        {match && (
            <div>
                {sign.name} matches with {sign.match}!
            </div>
        )}
            <button onClick={() => setMatch(!match)}>
                {match ? "Hide Match?" : "Render Match?"}
            </button>
        </>
    )
}