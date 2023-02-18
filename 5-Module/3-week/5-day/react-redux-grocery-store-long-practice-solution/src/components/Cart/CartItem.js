import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCount, removeItem } from '../../store/cart';

function CartItem({ item }) {
  const dispatch = useDispatch();
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
          onChange={(e) => setCount(e.target.value)}
          onBlur={() => dispatch(updateCount(item.id, Number(count)))}
        />
        <button
          className="cart-item-button"
          onClick={() => dispatch(updateCount(item.id, item.count + 1))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(updateCount(item.id, item.count - 1))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;