import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateCount, getCartItemById } from '../../store/cart';
import { toggleLike } from '../../store/produce';

//!!END
function ProduceDetails({ produce }) {
  //!!START SILENT
  const dispatch = useDispatch();
  const cartItem = useSelector(getCartItemById(produce.id));

  const addToCart = () => {
    if (cartItem) return dispatch(updateCount(produce.id, cartItem.count + 1));
    dispatch(addItem(produce.id));
  };
  
  //!!END
  //!!ADD
  // const cartItem = {};
  //!!END_ADD

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          //!!START SILENT
          onClick={() => dispatch(toggleLike(produce.id))}
          //!!END
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          //!!START SILENT
          onClick={addToCart}
          //!!END
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;