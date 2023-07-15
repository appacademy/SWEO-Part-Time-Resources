import { useState, useEffect } from 'react';
//!!END
//!!ADD
// import { useState } from 'react';
//!!END_ADD
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
//!!START SILENT
import { useDispatch, useSelector } from 'react-redux';
import { populateProduce } from './store/produce';
import { getCartOrder } from './store/cart';
//!!END

function App() {
  //!!START SILENT
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch]);

  //!!END
  const [showCart, setShowCart] = useState(false);
  
  //!!START SILENT
  const cartOrder = useSelector(getCartOrder);

  useEffect(() => {
    if (cartOrder.length) setShowCart(true);
  }, [cartOrder]);

  //!!END
  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => setShowCart(true)}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(false)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;