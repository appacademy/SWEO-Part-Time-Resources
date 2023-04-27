import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPokemon, getPokemonTypes } from '../store/pokemon';

const CreatePokemonForm = ({ hideForm }) => {
  const pokeTypes = useSelector(state => state.pokemon.types);
  const dispatch = useDispatch();
  const history = useHistory();
  const [number, setNumber] = useState(1);
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState(pokeTypes[0]);
  const [move1, setMove1] = useState('');
  const [move2, setMove2] = useState('');

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

  useEffect(() => {
    if (pokeTypes.length && !type) {
      setType(pokeTypes[0]);
    }
  }, [pokeTypes, type]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
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

    let createdPokemon;
    createdPokemon = await dispatch(createPokemon(payload));

    if (createdPokemon) {
      history.push(`/pokemon/${createdPokemon.id}`);
      hideForm();
    }
  };


  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
    <section className="new-form-holder centered middled">
      <form className="create-pokemon-form" onSubmit={handleSubmit}>
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
        <button type="submit">Create new Pokemon</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default CreatePokemonForm;
