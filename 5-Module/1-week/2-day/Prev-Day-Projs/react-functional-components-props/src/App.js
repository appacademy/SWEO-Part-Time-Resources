import Showcase from './Showcase';
//!!START SILENT
import BaseStats from './BaseStats';
//!!END
import './App.css';

function App() {
  //!!START SILENT 
  const baseStats = {
    hp: 45,
    attack: 49,
    defense: 48,
    spAttack: 65,
    spDef: 66,
    speed: 47
  };
 
  const handleClick = () => {
    alert(
      `Special Stats\n\tSpecial Attack: ${baseStats.spAttack}\n\tSpecial Defense: ${baseStats.spDef}`
    );
  };

  //!!END
  return (
    <div className='main-wrapper background'>
      <Showcase />
      {/*!!START SILENT */}
      <BaseStats clicker={handleClick} stats={baseStats} />
      {/*!!END */}
    </div>
  );
}

export default App;
