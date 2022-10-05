import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useState, useEffect } from 'react';

function Hygrometer() {
    const { humid, setHumid } = useClimate();
    const [choice, setChoice] = useState(humid);

    useEffect(() => {
        const change = setInterval(() => {
            if (humid > choice) {
                choice + 1 === humid
                    ? setChoice((prev) => prev + 1)
                    : setChoice((prev) => prev + 2);
            }
            if (humid < choice) {
                if (choice - 1 === humid) setChoice((prev) => prev - 1);
                else setChoice((prev) => prev - 2);
            }
        }, 1000);

        return () => clearInterval(change);
    }, [humid, choice, setChoice]);

    return (
        <section>
            <h2>Hygrometer</h2>
            <div className="actual-humid">Actual Humidity: {choice}%</div>
            <ReactSlider
                value={humid}
                onAfterChange={(val) => setHumid(val)}
                className="hygrometer-slider"
                thumbClassName="hygrometer-thumb"
                trackClassName="hygrometer-track"
                ariaLabel={'Hygrometer'}
                orientation="vertical"
                min={0}
                max={100}
                renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                )}
                renderTrack={(props, state) => (
                    <div {...props} index={state.index}></div>
                )}
                invert
                pearling
                minDistance={1}
            />
        </section>
    );
}

export default Hygrometer;
