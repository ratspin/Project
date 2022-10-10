import React, { useState } from "react";
import {RecipeListContainer,RecipeContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText,SeeNutrients,DialogImage} from '../old/styled_components/Recipe'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";


var Result = require('../../calculatetion/data');

export default function Show_info() {
  const [show, setShow] = useState("");
  const [show2, setShow2] = useState("");

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

  console.log(food_db)


  return (
  
    <RecipeListContainer>
        {food_db.map (data =>{return (<>
          <Dialog onClose={() => console.log("")}  open={!!show}>
            
            <DialogContent>
            {food_db.map (result =>{return (
              <DialogImage src={result.food_ingr} alt={"result.food_name"} />
            )})}      
            </DialogContent>

            <DialogActions>
              <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
            </DialogActions>
            
          </Dialog>

          <Dialog onClose={() => console.log("")}  open={!!show2}>
            <DialogContent>
              <DialogImage src="ingredients/ข้าวหมูแดง2.png" alt={"result.food_name"} />
            </DialogContent>
            <DialogActions>
              <SeeMoreText onClick={() => setShow2("")}>Close</SeeMoreText>
            </DialogActions>
          </Dialog>

          <RecipeContainer>
            <CoverImage src={data.food_img} alt="{result.food_name}" />
            <RecipeName>{data.food_name}</RecipeName>
            <SeeNutrients onClick={() => setShow(!show)} > ข้อมูลวัตถุดิบ</SeeNutrients>  
            <IngredientsText onClick={() => setShow2(!show2)} > ข้อมูลโภชนาการ </IngredientsText>
            {/* <SeeMoreText> Calories </SeeMoreText> */}
          </RecipeContainer>
          </>)})}
    </RecipeListContainer>
   
  )
} 