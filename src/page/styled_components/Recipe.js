import styled from 'styled-components'

export const RecipeListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 20px;
    justify-content: space-evenly;
`;
export  const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    box-shadow: 0 3px 10px 0 #aaa;
`;
export  const CoverImage = styled.img`
  object-fit: cover;
  height: 300px;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  `;
export const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 12px;
`;
export const IngredientsText = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;
export const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;
export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;
export const Seecalories = styled(SeeMoreText)`
  color:red;
  border: solid 1px red;
`;
export const SeeNutrients = styled(SeeMoreText)`
  color: #5677fc;
  border: solid 1px #5677fc;
`;
