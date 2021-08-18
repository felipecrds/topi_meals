import React from 'react';
import {
  Container,
  RecipeArea,
  RecipePhoto,
  RecipeInfoArea,
  RecipeIngredients,
  RecipeHowTo
} from './styled'

export default ({ data }) => {
  return (
    <Container>
      <RecipeArea>

        <RecipePhoto src={data.strMealThumb} />
        <RecipeIngredients>
          Ingredientes
          {data.strIngredient1 && <div>{data.strMeasure1} {data.strIngredient1}</div>}
          {data.strIngredient2 && <div>{data.strMeasure2} {data.strIngredient2}</div>}
          {data.strIngredient3 && <div>{data.strMeasure3} {data.strIngredient3}</div>}
          {data.strIngredient4 && <div>{data.strMeasure4} {data.strIngredient4}</div>}
          {data.strIngredient5 && <div>{data.strMeasure5} {data.strIngredient5}</div>}
          {data.strIngredient6 && <div>{data.strMeasure6} {data.strIngredient6}</div>}
          {data.strIngredient7 && <div>{data.strMeasure7} {data.strIngredient7}</div>}
          {data.strIngredient8 && <div>{data.strMeasure8} {data.strIngredient8}</div>}
          {data.strIngredient9 && <div>{data.strMeasure9} {data.strIngredient9}</div>}
          {data.strIngredient10 && <div>{data.strMeasure10} {data.strIngredient10}</div>}
          {data.strIngredient11 && <div>{data.strMeasure11} {data.strIngredient11}</div>}
          {data.strIngredient12 && <div>{data.strMeasure12} {data.strIngredient12}</div>}
          {data.strIngredient13 && <div>{data.strMeasure13} {data.strIngredient13}</div>}
          {data.strIngredient14 && <div>{data.strMeasure14} {data.strIngredient14}</div>}
          {data.strIngredient15 && <div>{data.strMeasure15} {data.strIngredient15}</div>}
          {data.strIngredient16 && <div>{data.strMeasure16} {data.strIngredient16}</div>}
          {data.strIngredient17 && <div>{data.strMeasure17} {data.strIngredient17}</div>}
          {data.strIngredient18 && <div>{data.strMeasure18} {data.strIngredient18}</div>}
          {data.strIngredient19 && <div>{data.strMeasure19} {data.strIngredient19}</div>}
          {data.strIngredient20 && <div>{data.strMeasure20} {data.strIngredient20}</div>}

        </RecipeIngredients>

        <RecipeInfoArea>

          <RecipeHowTo>
            Modo de Preparo
            <p>
              {data.strInstructions}
            </p>
          </RecipeHowTo>
        </RecipeInfoArea>
      </RecipeArea>
    </Container>
  );

}