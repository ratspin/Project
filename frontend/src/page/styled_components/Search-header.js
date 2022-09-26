import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
//  background-color: #FFA500;
  background-color: #FFFFFF;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  // box-shadow: 0 3px 6px 0 #555;
`;
export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // color: #FFA500;
  color: #FFFFFF;
`;
export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  // margin-left: 20px;
  width: 50%;
  background-color: white;
  // box-shadow: 0 3px 6px 0 #555;
  border: solid 1px #f8ae1a;
  `;
export const RecipeImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const Searchbutton = styled.button`
  width: 32px;
  height: 32px;
`;

export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  width: 100%;
`;
export const Foodfilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;