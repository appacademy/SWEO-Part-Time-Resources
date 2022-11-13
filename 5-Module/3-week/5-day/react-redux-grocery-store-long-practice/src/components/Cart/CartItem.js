import { useState, useEffect } from 'react';
//!!START SILENT
import { useDispatch } from 'react-redux';
import { updateCount, removeItem } from '../../store/cart';
//!!END

function CartItem({ item }) {
  //!!START SILENT
  const dispatch = useDispatch();
  //!!END
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          //!!START SILENT
          onChange={(e) => setCount(e.target.value)}
          onBlur={() => dispatch(updateCount(item.id, Number(count)))}
          //!!END
        />
        <button
          className="cart-item-button"
          //!!START SILENT
          onClick={() => dispatch(updateCount(item.id, item.count + 1))}
          //!!END
        >
          +
        </button>
        <button
          className="cart-item-button"
          //!!START SILENT
          onClick={() => dispatch(updateCount(item.id, item.count - 1))}
          //!!END
        >
          -
        </button>
        <button
          className="cart-item-button"
          //!!START SILENT
          onClick={() => dispatch(removeItem(item.id))}
          //!!END
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
