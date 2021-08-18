import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(!search ? false : true);

  const handleInputFocus = () => {
    setInputActive(true);
  }

  const handleInputBlur = () => {
    if (!search) {
      setInputActive(false);
    }
  }

  const handleChange = (e) => {
    onSearch(e.target.value);
  }

  return (
    <Container>
      <Logo>DCasa</Logo>
      <SearchInput
        type="text"
        placeholder="Procurar receitas"
        value={search}
        onChange={handleChange}
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}

      />
    </Container>
  );

}