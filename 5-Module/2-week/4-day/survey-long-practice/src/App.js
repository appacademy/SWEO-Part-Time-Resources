import { Switch, Route } from 'react-router-dom';

import sampleData from './assets/sample.json';
import spiData from './assets/spi.json';
import bonusData from './assets/bonus.json';

import HomePage from './components/HomePage';
import Navigation from './navigation';
import SurveyPage from './components/SurveyPage';
import ReportPage from './components/ReportPage';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/sample">
            <SurveyPage survey={sampleData} />
          </Route>
          <Route path="/spi">
            <SurveyPage survey={spiData} />
          </Route>
          <Route path="/likert">
            <SurveyPage survey={bonusData} />
          </Route>
          <Route path="/report" exact>
            <ReportPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
