import Axios from "axios";
import "./RecipeFinder2.css";
import { useState } from "react";
import RecipeTile from "./RecipeTile";
import React  from 'react';
import {strings} from "./filter/Filter3";




export default function App2() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  // const [dishType, setdishType] = useState("breakfast");
  // const [dishType2, setdishType2] = useState("brunch");
  // const thai = "thai";
  // const st = "st";
  const APP_ID = "5ed03060";
  const APP_KEY = "91001199901b59990e413c4286c3fcc3";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // &mealType=${dishType}&mealType=${dishType2}
  
  
  
  const getRecipeInfo = async () => {
    // st = query+thai;
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };
  
  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza </h1>

      {/* <input classname="bottom" type="submit" /> */}
     

      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <p>{strings}</p>



      <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
    </div>
);
}

