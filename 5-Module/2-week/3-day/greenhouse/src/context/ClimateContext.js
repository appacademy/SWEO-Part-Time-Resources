// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useContext, useState, useEffect } from "react";

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

const ClimateProvider = (props) => {
	const [temp, setTemp] = useState(50);
	const [desiredTemp, setDesiredTemp] = useState(temp);

	const [humidity, setHumidity] = useState(40);
	const [desiredHumidity, setDesiredHumidity] = useState(humidity);

	useEffect(() => {
		if (desiredTemp !== temp) {
			const changeTemp = () => {
				if (desiredTemp > temp) {
					setTemp((prev) => prev + 1);
				} else {
					setTemp((prev) => prev - 1);
				}
			};
			setTimeout(changeTemp, 1000);
		}
	}, [desiredTemp, temp]);

	useEffect(() => {
		if (humidity !== desiredHumidity) {
			const changeHumidity = () => {
				if (desiredHumidity > humidity) {
					setHumidity((prev) => prev + 1);
				} else {
					setHumidity((prev) => prev - 1);
				}
			};
            setTimeout(changeHumidity, 1000);
		}
	}, [humidity, desiredHumidity]);

	return (
		<ClimateContext.Provider
			value={{ temp, setDesiredTemp, humidity, setDesiredHumidity }}
		>
			{props.children}
		</ClimateContext.Provider>
	);
};

export default ClimateProvider;
