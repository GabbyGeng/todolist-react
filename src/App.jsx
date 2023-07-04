import './App.css';
import './index.css';
import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  return (
    <main className='todo-main-section'>
      <h2>Todo List</h2>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </main>
  );
}

export default App;
