import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//!!START SILENT
import { createPokemon, getPokemonTypes } from '../store/pokemon';
import { ValidationError } from '../utils/validationError';
import ErrorMessage from './ErrorMessage';
//!!END
//!!ADD
// import { getPokemonTypes } from '../store/pokemon';
//!!END_ADD

const CreatePokemonForm = ({ hideForm }) => {
  //!!START SILENT
  const [errorMessages, setErrorMessages] = useState({});
  //!!END
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

    //!!START SILENT
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
    //!!END
    //!!ADD
    // // const payload = {
    // //   number,
    // //   attack,
    // //   defense,
    // //   imageUrl,
    // //   name,
    // //   type,
    // //   move1,
    // //   move2,
    // //   moves: [move1, move2]
    // // };
    //!!END_ADD

    let createdPokemon;
    //!!START SILENT
    try {
      createdPokemon = await dispatch(createPokemon(payload));
    } catch (error) {
      if (error instanceof ValidationError) setErrorMessages(error.errors);
      // If error is not a ValidationError, add slice at the end to remove extra
      // "Error: "
      else setErrorMessages({ overall: error.toString().slice(7) })
    }
    //!!END
    if (createdPokemon) {
      //!!START SILENT
      setErrorMessages({});
      //!!END
      history.push(`/pokemon/${createdPokemon.id}`);
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    //!!START SILENT
    setErrorMessages({});
    //!!END
    hideForm();
  };

  return (
    <section className="new-form-holder centered middled">
      {/*!!START SILENT */}
      <ErrorMessage message={errorMessages.overall} />
      {/*!!END */}
      <form className="create-pokemon-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Number"
          min="1"
          required
          value={number}
          onChange={updateNumber} />
        {/*!!START SILENT */}
        <ErrorMessage label={"Number"} message={errorMessages.number} />
        {/*!!END */}
        <input
          type="number"
          placeholder="Attack"
          min="0"
          max="100"
          required
          value={attack}
          onChange={updateAttack} />
        {/*!!START SILENT */}
        <ErrorMessage label={"Attack"} message={errorMessages.attack} />
        {/*!!END */}
        <input
          type="number"
          placeholder="Defense"
          min="0"
          max="100"
          required
          value={defense}
          onChange={updateDefense} />
        {/*!!START SILENT */}
        <ErrorMessage label={"Defense"} message={errorMessages.defense} />
        {/*!!END */}
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={updateImageUrl} />
        {/*!!START SILENT */}
        <ErrorMessage label={"Image URL"} message={errorMessages.imageUrl} />
        {/*!!END */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName} />
        {/*!!START SILENT */}
        <ErrorMessage label={"Name"} message={errorMessages.name} />
        {/*!!END */}
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
        {/*!!START SILENT */}
        <ErrorMessage label={"Moves"} message={errorMessages.moves} />
        {/*!!END */}
        <select onChange={updateType} value={type}>
          {pokeTypes.map(type =>
            <option key={type}>{type}</option>
          )}
        </select>
        {/*!!START SILENT */}
        <ErrorMessage label={"Type"} message={errorMessages.type} />
        {/*!!END */}
        <button type="submit">Create new Pokemon</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default CreatePokemonForm;
