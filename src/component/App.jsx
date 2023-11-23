import FoodList from './FoodList';
import { useState } from 'react';
import mockItems from '../mock.json';

function App() {
  const [items, setItems] = useState(mockItems); 
  const [order , setOrder] = useState('createdAt');
  const sortedItems = items.sort((a,b) =>b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleCaloriesClick = () => setOrder('calorie');
  const handleDelete =(id) => {
    const nextItems = items.filter((item)=> item.id !== id);
    setItems(nextItems);
  }
    return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCaloriesClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
