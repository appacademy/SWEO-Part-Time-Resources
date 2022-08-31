import Showcase from './Showcase';
import BaseStats from './BaseStats';
<<<<<<< HEAD
import PokeMoves from './Components/PokeMoves';
=======
import PokeMoves from './Components/PokeMoves/PokeMoves';
>>>>>>> 2022-Jan-E
import './App.css';

function App() {
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
      `Special Stats:\n\tSpecial Attack: ${baseStats.spAttack}\n\tSpecial Defense: ${baseStats.spDef}`
    );
  };

  return (
    <div className='main-wrapper background'>
      <Showcase />
      <BaseStats clicker={handleClick} stats={baseStats} />
      <PokeMoves />
    </div>
  );
}

export default App;