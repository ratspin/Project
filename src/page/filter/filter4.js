
// import * as React from 'react';
// import { useState } from "react";
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// import Axios from "axios";
// import RecipeTile from "../RecipeTile";
// // import {RecipeComponent} from '../RecipeComponent';
// // import {RecipeListContainer} from '../styled_components/Recipe';

// export default function Filter1() {
//   const [dietLabels, setdishType] = useState("");
//   const [recipes, setrecipes] = useState([]);
//   const [query, setquery] = useState("");
  
//   const APP_ID = "5ed03060";
//   const APP_KEY = "91001199901b59990e413c4286c3fcc3";
//   const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&dishType=${dietLabels}`;
  
//   const getRecipeInfo = async () => {
//     var result = await Axios.get(url);
//     setrecipes(result.data.hits);
//     console.log(result.data.hits);
//   };
  
//   const onSubmit = (e) => {
//     e.preventDefault();
//     getRecipeInfo();
//   };
  
//   return (
//     <div>
//       <form  onSubmit={onSubmit}>
//         <input
//           type="text"
//           placeholder="search"
//           autoComplete="Off"
//           value={query}
//           onChange={(e) => setquery(e.target.value)}
//         />
//         <input 
//          type="submit" value="Search" />
//         {/* <div >
//                     <FormControlLabel  onChange = {() => setdishType("bread")} control={<Checkbox  />} label="bread" />
//                     <FormControlLabel  onChange = {() => setdishType("drinks")} control={<Checkbox  />} label="drinks" />
//                     <FormControlLabel  onChange = {() => setdishType("egg")} control={<Checkbox  />} label="egg" />
//         </div> */}
//         <div >
//             <div onChange = {() => setdishType("bread")} > <input type="checkbox" /><label>bread</label> </div>
//             <div onChange = {() => setdishType("drinks")}> <input type="checkbox" /><label>drinks</label> </div>
//             <div onChange = {() => setdishType("egg")}>    <input type="checkbox" /><label>egg</label> </div>
//         </div>
//       </form>
//       <p>{dietLabels}</p>
//       <div className="app__recipes">
//           {recipes !== [] &&recipes.map((recipe) => {
//               return <RecipeTile recipe={recipe} />;
//             })}
//       </div>
//     </div>
// );
// }


import React, { useState } from "react";
import "./CheckboxLabels.css";

export default function Filter2() {
  const [checkedList, setCheckedList] = useState([]);
  const listData = [
    { id: "1", value: "เนื้อหมู" },
    { id: "2", value: "เนื้อไก่" },
    { id: "3", value: "เนื้อปลา" },
    { id: "4", value: "เนื้อวัว" },
    { id: "5", value: "เนื้อเป็ด" },
  ];
 
  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedList([...checkedList, value]);
    } else {
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };
  return (
   
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <p className="title">โปรดเนื้อสัตว์ที่คุณชื่นชอบ</p>
                </div>
        <div className="list-container">
              {checkedList.map((item, index) => {
                  return (
        <div className="chip">
              <p className="chip-label">{item}</p>
        </div>);
          })}
        </div>
        <div className="card-body">
          {listData.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container">
                <input
                  type="checkbox"
                  name="languages"
                  value={item.value}
                  onChange={handleSelect}
                />
                <label>{item.value}</label>
              </div>
            );
          })}
        </div>
      </div>
        </div>
 
  );
}