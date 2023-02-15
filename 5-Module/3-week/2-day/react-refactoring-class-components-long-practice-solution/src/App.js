import { useState } from 'react';
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import AutoComplete from './components/Auto';

const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

const App = () => {
  const [showClock, setShowClock] = useState(true);
  const toggleClock = () => setShowClock(!showClock);
  
    return (
      <div className="widgets">
        <Folder folders={folders} />
        <Weather />
        <ClockToggle toggleClock={toggleClock}/>
        {showClock && <Clock />}
        <AutoComplete names={names} />
      </div>
    );
}

export default App;