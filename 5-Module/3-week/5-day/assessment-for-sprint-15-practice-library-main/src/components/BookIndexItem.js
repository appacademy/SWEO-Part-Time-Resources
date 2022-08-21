import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deleteBookAction } from '../store/book';
const BookIndexItem = ({ book }) => {
  const dispatch = useDispatch()

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(deleteBookAction(book.id))
  };

  return (
    <li>
      <Link to={`/books/${book.id}`}>Book #{book.id}</Link>
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
      <button onClick={(e) =>{
            e.preventDefault();
            dispatch(deleteBookAction(book.id))
      }}>Delete</button>
    </li>
  );
};

export default BookIndexItem;