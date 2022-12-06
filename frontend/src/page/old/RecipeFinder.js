import React, { useState } from "react";
import Axios from "axios";
import {RecipeComponent} from './RecipeComponent'
import {Container,Header,AppName,SearchBox,SearchIcon,SearchInput} from './styled_components/Search-header'
import {RecipeListContainer} from './styled_components/Recipe'
import {dietLabels} from './filter/Filter1'
import {healthLabels} from './filter/Filter2'
import {strings} from './filter/Filter3'

const APP_ID = "5ed03060&";
const APP_KEY = "91001199901b59990e413c4286c3fcc3";
const thai = "thai";


const RecipeFinder = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {

    const response = await Axios.get(
      ` https://api.edamam.com/search?q=${searchString}" "${strings}" "${thai}&app_id=${APP_ID}&app_key=${APP_KEY}&dietLabels=${dietLabels}&healthLabels=${healthLabels}&from=0&to=19`,
      ); 
      updateRecipeList(response.data.hits);
      console.log(response.data.hits);
      console.log(searchString);
      console.log(dietLabels);
      console.log(healthLabels);
      console.log(strings);
  };
  
  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500); 
    updateTimeoutId(timeout); 
  };

  return (
      <Container>
        <p>{dietLabels}</p>
        <Header>
          <AppName>Recipe Finder</AppName>
          <SearchBox>
            <SearchIcon src="/finder/search-icon.svg" />
            <SearchInput
              placeholder="Search"
              value={searchQuery}
              onChange={onTextChange}
            />
          </SearchBox>
          <AppName>Recipe Finder</AppName>
        </Header>

        {/* <br/>{dietLabels}<br/>{strings}<br/>{searchQuery}</p>
        <p>{strings}</p> */}
        
        <RecipeListContainer>
          {recipeList !== [] &&recipeList.map((recipe) => {
            return <RecipeComponent  recipe={recipe.recipe} />;
          })}
        </RecipeListContainer>  
      </Container>
  );
}

export default RecipeFinder;


