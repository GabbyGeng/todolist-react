import SingleItem from './SingleItem';
import './App.css';

const Items = ({ items, removeItem }) => {
  return (
    <div className='items-container'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </div>
  );
};
export default Items;
