import React, { useState } from "react";

export default function FoodItForm() {
  const [foodName, setFoodName] = useState("");
  const [calorie, setCalorie] = useState(0);
  const [content, setContent] = useState("");

  const handleSearchFoodName = (e) => {
    setFoodName(e.target.value);
  };

  const handleSearchCalorie = (e) => {
    const nextCalorie = +e.target.value || 0;
    setCalorie(nextCalorie);
  };

  const handleSearchContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      foodName,
      calorie,
      content,
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={foodName} onChange={handleSearchFoodName} />
      <input
        type="number"
        name="calorie"
        value={calorie}
        onChange={handleSearchCalorie}
      />
      <input value={content} onChange={handleSearchContent} />
      <button type="submit">확인</button>
    </form>
  );
}
