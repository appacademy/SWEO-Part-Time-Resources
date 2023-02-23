import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePokemon, getPokemonTypes } from '../store/pokemon';

const EditPokemonForm = ({ pokemon, hideForm }) => {
  const pokeTypes = useSelector(state => state.pokemon.types);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(pokemon.number);
  const [attack, setAttack] = useState(pokemon.attack);
  const [defense, setDefense] = useState(pokemon.defense);
  const [imageUrl, setImageUrl] = useState(pokemon.imageUrl);
  const [name, setName] = useState(pokemon.name);
  const [type, setType] = useState(pokemon.type);
  const [move1, setMove1] = useState(pokemon.moves[0]);
  const [move2, setMove2] = useState(pokemon.moves[1]);

  const updateNumber = (e) => setNumber(e.target.value);
  const updateAttack = (e) => setAttack(e.target.value);
  const updateDefense = (e) => setDefense(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateType = (e) => setType(e.target.value);
  const updateMove1 = (e) => setMove1(e.target.value);
  const updateMove2 = (e) => setMove2(e.target.value);

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...pokemon,
      number,
      attack,
      defense,
      imageUrl,
      name,
      type,
      move1,
      move2,
      moves: [move1, move2]
    };

    const updatedPokemon = await dispatch(updatePokemon(payload));
    if (updatedPokemon) {
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
    <section className="edit-form-holder centered middled">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Number"
          min="1"
          required
          value={number}
          onChange={updateNumber} />
        <input
          type="number"
          placeholder="Attack"
          min="0"
          max="100"
          required
          value={attack}
          onChange={updateAttack} />
        <input
          type="number"
          placeholder="Defense"
          min="0"
          max="100"
          required
          value={defense}
          onChange={updateDefense} />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={updateImageUrl} />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName} />
        <input
          type="text"
          placeholder="Move 1"
          value={move1}
          onChange={updateMove1} />
        <input
          type="text"
          placeholder="Move 2"
          value={move2}
          onChange={updateMove2} />
        <select onChange={updateType} value={type}>
          {pokeTypes.map(type =>
            <option key={type}>{type}</option>
          )}
        </select>
        <button type="submit">Update Pokemon</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default EditPokemonForm;