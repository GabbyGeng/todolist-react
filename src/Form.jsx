import { useState } from 'react';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName('');
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder=' type your todo items here'
        value={newItemName}
        onChange={(event) => {
          setNewItemName(event.target.value);
        }}
      />
      <button type='submit' className='form-btn'>
        Add
      </button>
    </form>
  );
};

export default Form;
