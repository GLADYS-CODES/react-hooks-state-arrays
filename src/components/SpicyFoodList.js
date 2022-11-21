import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  const [filterBy, setFilterBy] = useState("All");
  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") return true;

    return food.cuisine === filterBy;
  });

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();

const newFoodArray =[...foods, newFood];
setFoods(newFoodArray);

  }

  function handleLicClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id ===id) {
        return {...food, heatLevel: food.heatLevel + 1};
      }
      else {
        return food;
      }

    });
    setFoods(newFoodArray);
  }


  

function handeleFilterChange(event) {

  setFilterBy(event.target.value);
}
  return (
    <select name="filter" onChange={handeleFilterChange}>
    <option value="All">All</option>
    <option value="American">American</option>
    <option value="Sichuan">Sichuan</option>
    <option value="Thai">Thai</option>
    <option value="Mexican">Mexican</option>

    </select>
  );



  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLicClick(food.id)}>
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
