import bulbasaur from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Snorlax";
  const pokeCharacteristics = {
    type: "Normal",
    move: "Rest"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaur} alt="bulbasaur" />
      <h2>
        <span style={{ backgroundColor: "green", color: "white" }}>{favPokemon}'s type is {pokeCharacteristics.type}</span>
      </h2>
      <h2>{favPokemon}'s move is {pokeCharacteristics.move}</h2>
    </div>
  );
};

export default Showcase;