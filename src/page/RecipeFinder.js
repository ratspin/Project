import React, { useState } from "react";
import Axios from "axios";
import {RecipeComponent} from './RecipeComponent'
import {Container,Header,AppName,SearchBox,SearchIcon,SearchInput} from './styled_components/Search-header'
import {RecipeListContainer} from './styled_components/Recipe'
const APP_ID = "5ed03060&";
const APP_KEY = "91001199901b59990e413c4286c3fcc3";

const RecipeFinder = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&search?to=16&app_id=${APP_ID}&app_key=${APP_KEY}`,
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
            Recipe Finder
          </AppName>
          <SearchBox>
            <SearchIcon src="/finder/search-icon.svg" />
            <SearchInput
              placeholder="Search"
              value={searchQuery}
              onChange={onTextChange}
            />
          </SearchBox>
          <AppName>{/* <RecipeImage src="/finder/hamburger.svg" /> */}Recipe Finder</AppName>
          {/* <FormGroup><FormControlLabel control={<Checkbox defaultChecked />} label="Label" /></FormGroup> */}
        </Header>
        <RecipeListContainer>
          {recipeList !== [] &&recipeList.map((recipe) => {
            return <RecipeComponent  recipe={recipe.recipe} />;
          })}
        </RecipeListContainer>  
      </Container>
  );
}

export default RecipeFinder;


