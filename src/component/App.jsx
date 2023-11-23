import { getFoods } from '../api';
import FoodList from './FoodList';
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([]); 
  const [order , setOrder] = useState('createdAt');
  const sortedItems = items.sort((a,b) =>b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleCaloriesClick = () => setOrder('calorie');
  const handleDelete =(id) => {
    const nextItems = items.filter((item)=> item.id !== id);
    setItems(nextItems);
  };

  const handleLoad =  async (orderQuery) =>{
   const {foods} = await getFoods(orderQuery);
   setItems(foods);
  }

  useEffect(()=>{
    handleLoad(order);
  },[order]);

    return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCaloriesClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete}/>

    </div>
  );
}

export default App;
