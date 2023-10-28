import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  const handleLiClick = (id) => {
    // Use a more descriptive variable name
    const filteredFoodList = foods.filter((food) => food.id < id);
    
    setFoods(filteredFoodList);
};


function handleAddFood() {
  const newFood = getNewRandomSpicyFood();

  // create a new array and use the spread operator to copy the elements.
  const newFoodList = [...foods, newFood]; 

  // Use the useState hook's setter function to update the state
  setFoods(newFoodList);
}

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)} >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>

    </div>
  );
}

export default SpicyFoodList;
