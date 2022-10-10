import { useState } from "react";
import ShowResult from "./Show_Result";
import React  from 'react';
import {RecipeListContainer} from '../page/old/styled_components/Recipe'
var Result = require('../calculatetion/data2');


export default function App2() {
  const [result, setresult] = useState([]);

  var food_img = []
  var food_ingr = []
  var food_db = []
  var food_name = []
  var food_similar = []

  for(var i = 0; i < Result.length; i++) {
    food_img = "food/"+ Result[i].food + ".png"
    food_ingr = "ingredients/"+ Result[i].food + ".png"
    food_name = Result[i].food
    food_similar = Result[i].similar_rate
    food_db.push({food_img:food_img,food_ingr:food_ingr,food_name:food_name,food_similar:food_similar})
  }

  const getresultInfo = async () => {
    setresult(food_db);
    console.log(food_db);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    getresultInfo();
  };
  
  return (
    <div>
        <form  onSubmit={onSubmit}>
          <input   type="submit" value="Submit" />
        </form>

        <RecipeListContainer>
          {result !== [] &&result.map((data,) => {
              return <ShowResult data={data} />;
            })}
        </RecipeListContainer>

    </div>      
);
}

