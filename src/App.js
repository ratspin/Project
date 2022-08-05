import React, { useState } from "react";
import styled from 'styled-components'
import Axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

import {
  Header,
  RecipeImage,
  AppName,
  SearchBox,
  SearchIcon,
  SearchInput,
} from './components/header'
import {
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  SeeMoreText,
  IngredientsText
} from './components/Recipe'

const APP_ID = "5ed03060";
const APP_KEY = "05d029db9db9febdd61b9d9ad8d03e6e	";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;
const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState("");
  const { label, image, ingredients, url } = props.recipe;
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
              <th>Weight(g)</th>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{parseFloat(ingredient.weight).toFixed( 2 )}</td>
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
      <CoverImage src={image} alt={label} />
      <RecipeName>{label}</RecipeName>
      <IngredientsText onClick={() => setShow(!show)}>
        Ingredients
      </IngredientsText>     
      <SeeMoreText onClick={() => window.open(url)}>        
        See Complete Recipe
      </SeeMoreText> 
    </RecipeContainer>
  );
};



const App = () => {
  // const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&search?to=16&app_id=${APP_ID}&app_key=${APP_KEY}&to=100&from=0`,
      );
      updateRecipeList(response.data.hits);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    // updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500); 
    updateTimeoutId(timeout); 
  };



  return (
      <Container>
        <Header>
          <AppName>
            <RecipeImage src="/finder/hamburger.svg" />
            Recipe Finder
          </AppName>
          <SearchBox>
            <SearchIcon src="/finder/search-icon.svg" />
            <SearchInput
              placeholder="Search Recipe"
              // value={searchQuery}
              onChange={onTextChange}
            />
          </SearchBox>
        </Header>
        <RecipeListContainer>
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <Placeholder src="/finder/hamburger.svg" />
        )}
        </RecipeListContainer>  
      </Container>



  );
}

export default App;
