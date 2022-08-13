import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

import {RecipeContainer,CoverImage,RecipeName,SeeMoreText,IngredientsText,SeeNewTab,Seecalories,SeeNutrients} from '../styled_components/Recipe'

export const RecipeComponent = (props) => {
    const [show, setShow] = useState("");
    // const [show2, setShow2] = useState("[]");
    const { label, image, ingredients, url,calories
      // ,totalNutrients 
    } = props.recipe;

    return (
      <RecipeContainer>
        <Dialog
          onClose={() => console.log("adsadad")}
          aria-labelledby="simple-dialog-title"
          open={!!show}
        >
          <DialogTitle>Ingredients</DialogTitle>
          <DialogContent>
            <RecipeName>{label}</RecipeName>
            <table>
              <thead>
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Measure</th>
              </thead>
              <tbody>
                {ingredients.map((ingredient, index) => (
                  <tr key={index} className="ingredient-list">
                    <td>{ingredient.text}</td>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <SeeNewTab onClick={() => window.open(url)}>See More</SeeNewTab>
            <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
          </DialogActions>
        </Dialog>

        {/* <Dialog
          onClose={() => console.log("adsadad")}
          aria-labelledby="simple-dialog-title"
          open={!!show2}
        >
          <DialogTitle>Nutrients</DialogTitle>
          <DialogContent>
            <RecipeName>{label}</RecipeName>
            <table>
              <thead>
                <th>Nutrients</th>
                <th>Quantity</th>
                <th>unit</th>
              </thead>
              <tbody>
                {totalNutrients.map((totalNutrients, index) => (
                  <tr key={index} className="ingredient-list">
                    <td>{totalNutrients.label}</td>
                    <td>{totalNutrients.quantity}</td>
                    <td>{totalNutrients.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <SeeMoreText onClick={() => setShow2("")}>Close</SeeMoreText>
          </DialogActions>
        </Dialog> */}

          <CoverImage src={image} alt={label} />
          <RecipeName>{label}</RecipeName>
          <IngredientsText onClick={() => setShow(!show)}>Ingredients</IngredientsText>  
          {/* <SeeNutrients onClick={() => setShow2(!show2)}> Nutrients</SeeNutrients>           */}
          <SeeNutrients onClick={() => setShow(!show)}> Nutrients</SeeNutrients>   
          <Seecalories>{calories.toFixed(0)} Calories / Serving</Seecalories>

      </RecipeContainer>
    );
  };