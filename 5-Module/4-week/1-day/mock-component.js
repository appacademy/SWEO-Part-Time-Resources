import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { fetchFruits } from './mock-store/fruitsReducer';

export default function Component() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFruits());
  })
  return (
    null
  )
}