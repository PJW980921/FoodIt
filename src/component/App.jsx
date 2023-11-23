import FoodList from './FoodList';
import { useState } from 'react';
import items from '../mock.json';

function App() {
  const [order , setOrder] = useState('createdAt');
  const sortedItems = items.sort((a,b) =>b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleCaloriesClick = () => setOrder('calorie');
    return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCaloriesClick}>칼로리순</button>
      <FoodList items={sortedItems} />
    </div>
  );
}

export default App;
