import Showcase from './Showcase';
<<<<<<< HEAD
import BaseStats from './Components/BaseStats';
=======
import BaseStats from './Components/BaseStats/BaseStats';
>>>>>>> 2022-Jan-E
import './App.css';

function App() {
  const baseStats = {
    hp: 45,
    attack: 49,
    defense: 49,
    spAttack: 65,
    spDef: 65,
    speed: 45,
  };
<<<<<<< HEAD

=======
>>>>>>> 2022-Jan-E
  const handleClick = () => {
    alert(
      `Special Stats\n\tSpecial Attack: ${baseStats.spAttack}\n\tSpecial Defense: ${baseStats.spDef}`
    );
  }
  return (
    <div className='main-wrapper background'>
      <Showcase />
<<<<<<< HEAD
      <BaseStats 
        stats={baseStats}
        click={handleClick}
      />
      
=======
      <BaseStats
        hp={baseStats.hp}
        attack={baseStats.attack}
        defense={baseStats.defense}
        speed={baseStats.speed}
        clicker={handleClick}
        
      />
>>>>>>> 2022-Jan-E
    </div>
  );
}

export default App;