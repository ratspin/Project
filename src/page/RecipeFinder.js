import React, { useState } from "react";
import Axios from "axios";
import {RecipeComponent} from './RecipeComponent'
import {Container,Header,RecipeImage,AppName,SearchBox,SearchIcon,SearchInput} from '../style/header'
import {RecipeListContainer} from '../style/Recipe'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// const APP_ID = "";
// const APP_KEY = "";

const RecipeFinder = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&search?to=16&app_id=5ed03060&app_key=91001199901b59990e413c4286c3fcc3&to=100&from=0`,
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
          <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          </FormGroup>
        </Header>
        <RecipeListContainer>
        {recipeList !== [] &&
  recipeList.map((recipe) => {
    return <RecipeComponent  recipe={recipe.recipe} />;
  })}
        </RecipeListContainer>  
      </Container>
  );
}

export default RecipeFinder;


