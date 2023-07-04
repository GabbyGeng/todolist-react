import { useState } from 'react';
import './App.css';
import { AiTwotoneDelete } from 'react-icons/ai';

const SingleItem = ({ key, item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        className='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isChecked && 'line-through',
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
