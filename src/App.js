import React, { useState } from "react";
import Axios from "axios";

import {
  RecipeComponent
} from './RecipeComponent'

import {
  Container,
  Header,
  RecipeImage,
  AppName,
  SearchBox,
  SearchIcon,
  SearchInput,
} from './components/header'
import {
  RecipeListContainer,

  Placeholder
} from './components/Recipe'

const APP_ID = "5ed03060";
const APP_KEY = "05d029db9db9febdd61b9d9ad8d03e6e	";

const App = () => {
  const [searchQuery, updateSearchQuery] = useState("");
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
    updateSearchQuery(e.target.value);
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
              value={searchQuery}
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
