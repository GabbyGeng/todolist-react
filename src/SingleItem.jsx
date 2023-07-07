import { useState } from 'react';
import './App.css';
import { AiTwotoneDelete } from 'react-icons/ai';

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        className='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        type='button'
        className='delete-btn'
        onClick={() => removeItem(item.id)}
      >
        <AiTwotoneDelete style={{ color: 'white', fontSize: '1.2rem' }} />
      </button>
    </div>
  );
};
export default SingleItem;
