import React from 'react';
import { Container, CategoryImage } from './styled'

export default ({ data, activeCategory, setActiveCategory, setActiveCategoryName }) => {
  const handleCategoryClick = () => {
    setActiveCategory(data.idCategory)
    if (data.idCategory === 0) {
      setActiveCategoryName('Todas as categorias')
    } else {
      setActiveCategoryName(data.strCategory)
    }
  };

  return (
    <Container
      active={activeCategory}
      id={data.idCategory}
      onClick={handleCategoryClick}
      data-tip={data.strCategory}
      data-for="tip"
    >
      <CategoryImage src={data.strCategoryThumb} />
    </Container>
  );
}
