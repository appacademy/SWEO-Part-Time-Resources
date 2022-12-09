import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
  const { temp, humidity } = useClimate();
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temp}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;