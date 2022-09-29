// import React, { useState } from "react";
// import Axios from "axios";
// import {RecipeComponent} from './RecipeComponent'
// import {Container,Header,SearchBox,Searchbutton,SearchInput} from './styled_components/Search-header'
// import {RecipeListContainer} from './styled_components/Recipe'
// import RecipeTile from "./RecipeTile";


// export default function Search() {

//   const [query, setquery] = useState("");
//   const [recipes, setrecipes] = useState([]);
//   const APP_ID = "5ed03060";
//   const APP_KEY = "91001199901b59990e413c4286c3fcc3";
//   const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

//   const getRecipeInfo = async () => {
//     var result = await Axios.get(url);
//     setrecipes(result.data.hits);
//     console.log(result.data.hits);
//   };
  
//   const onSubmit = (e) => {
//     e.preventDefault();
//     getRecipeInfo();
//   };

//     return (
        
//         <Container>
//           <Header>
//           <SearchBox onSubmit={onSubmit}>
//             <Searchbutton src="/finder/search-icon.svg"/>
//             <SearchInput
//               type="text"
//               placeholder="Search"
//               autoComplete="Off"
//               value={query}
//               onChange={(e) => setquery(e.target.value)}
//             />
//           </SearchBox>  <input className="app__submit" type="submit" value="Search" />
//         </Header>
//         <div>
//             {recipes !== [] && recipes.map((recipe) => {
//                 return <RecipeTile recipe={recipe} />;
//             })}
//         </div> 
//       </Container>
    
//   );
// }





