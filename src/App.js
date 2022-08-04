import {
  Container,
  Header,
  RecipeImage,
  AppName,
  SearchBox,
  SearchIcon,
  SearchInput,
} from './components/header'



function App() {
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
              // onChange={onTextChange}
            />
          </SearchBox>
        </Header>
        pai
      </Container>



  );
}

export default App;
