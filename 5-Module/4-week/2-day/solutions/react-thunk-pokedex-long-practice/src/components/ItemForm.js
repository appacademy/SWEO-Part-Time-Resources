import { useState } from 'react';
//!!START SILENT
import { useDispatch, useSelector } from 'react-redux';
import { updateItem, createItem } from '../store/items';
//!!END
//!!ADD
// import { useSelector } from 'react-redux';
//!!END_ADD

//!!START SILENT
const ItemForm = ({ itemId, hideForm, pokemonId }) => {
//!!END
//!!ADD
// const ItemForm = ({ itemId, hideForm }) => {
//!!END_ADD
  let item = useSelector(state => state.items[itemId]);
  //!!START SILENT
  const isAdd = !item;
  if (!item) {
    item = {
      name: "",
      happiness: "",
      price: ""
    };
  }
  const dispatch = useDispatch();
  //!!END

  const [happiness, setHappiness] = useState(item.happiness);
  const [price, setPrice] = useState(item.price);
  const [name, setName] = useState(item.name);

  const updateName = (e) => setName(e.target.value);
  const updateHappiness = (e) => setHappiness(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //!!START SILENT
    const payload = {
      ...item,
      name,
      happiness,
      price
    };

    const returnedItem = isAdd 
      ? await dispatch(createItem(payload, pokemonId)) 
      : await dispatch(updateItem(payload));
    //!!END
    //!!ADD
    // // const payload = {
    // //   ...item,
    // //   name,
    // //   happiness,
    // //   price
    // // };
    //
    // let returnedItem;
    //!!END_ADD
    if (returnedItem) {
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
    <section className="edit-form-holder centered middled">
      <form className="item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName}
          //!!START SILENT
          autoFocus={isAdd ? "autoFocus" : undefined}
          //!!END
        />
        <input
          type="number"
          placeholder="Happiness"
          min="0"
          max="100"
          required
          value={happiness}
          onChange={updateHappiness}
        />
        <input
          type="number"
          placeholder="Price"
          required
          value={price}
          onChange={updatePrice}
        />
        {/*!!START SILENT */}
        <button type="submit">{isAdd ? "Add" : "Update"} Item</button>
        {/*!!END */}
        {/*!!ADD */}
        {/* <button type="submit">Update Item</button> */}
        {/*!!END_ADD */}
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default ItemForm;
