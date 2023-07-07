import SingleItem from './SingleItem';
import './App.css';

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className='items-container'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};
export default Items;
