import React from 'react';
import {
  Container,
  RecipePhotoArea,
  RecipeButtonArea,
  RecipeInfoArea,
  RecipePhoto,
  RecipeName,
  RecipeButton
} from './styled'

export default ({ data, onClick }) => {

  const handleClick = () => {
    onClick(data);
  }

  return (
    < Container onClick={handleClick}>
      <RecipePhotoArea>
        <RecipePhoto src={data.strMealThumb} />
      </RecipePhotoArea>
      <RecipeInfoArea>
        <RecipeName>{data.strMeal}</RecipeName>
      </RecipeInfoArea>
      <RecipeButtonArea>
        <RecipeButton src="/assets/plus.png" />
      </RecipeButtonArea>
    </Container >
  );
}