import React, { useState } from "react";
function sanitize(type, value) {
  switch (type) {
    case 'number':
      return Number(value) || 0;

    default:
      return value;
  }
}
export default function FoodItForm() {
  const [values , setValues] = useState({
    foodName : '',
    calorie : sanitize(type , value),
    content : '',
  })

  const handleChange = (e) => {
    const {name , value} = e.target;
    setValues((prevValues)=>({
      ...prevValues,
      [name] : value,
    }));
  }

  


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={values.foodName} onChange={handleChange} />
      <input
        type="number"
        name="calorie"
        value={values.calorie}
        onChange={handleChange}
      />
      <textarea value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}
