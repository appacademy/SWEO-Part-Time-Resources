import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFruits } from '../../store/fruitReducer';

const FruitComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFruits());
  }, [dispatch]);

  return (
    <div>
      <h1>FruitComponent</h1>
    </div>
  );
};
export default FruitComponent;
