import { Switch, Route } from "react-router-dom";
import Greenhouse from "./components/Greenhouse";
import Navigation from "./components/Navigation";
import Thermometer from "./components/Thermometer";
import Hygrometer from "./components/Hygrometer";
//!!START SILENT
// To run the bonus Thermometer and Hygrometer, comment out the preceding 2
// lines and uncomment the following 2 lines:
// import Thermometer from "./components/Thermometer/ThermometerBonus"
// import Hygrometer from "./components/Hygrometer/HygrometerBonus"
//!!END

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/thermometer">
          <Thermometer />
        </Route>
        <Route path="/hygrometer">
          <Hygrometer />
        </Route>
        <Route path="/">
          <Greenhouse />
        </Route>
      </Switch>
    </>
  );
}

export default App;
