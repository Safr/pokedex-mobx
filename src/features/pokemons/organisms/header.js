import React, { useCallback, useEffect, createRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '@pokedex/ui/theme/media';
import { Input } from '@pokedex/ui';

export const Header = props => {
  const [inputValue, setInputValue] = useState('');
  const textInput = createRef();

  useEffect(() => {
    textInput.current.focus();
  }, [textInput]);

  const handleSearch = useCallback(evt => {
    setInputValue(evt.target.value);
    props.onSearchValue(evt.target.value);
  }, []);
  return (
    <HeaderContainer>
      <Title>Pokedex</Title>
      <Input
        type="search"
        ref={textInput}
        value={inputValue}
        placeholder="Search..."
        onChange={handleSearch}
      />
    </HeaderContainer>
  );
};

Header.propTypes = {
  onSearchValue: PropTypes.func.isRequired,
};

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 36px;
  ${media.tablet`
   font-size: 30px;
  `}
  ${media.desktop`
    font-size: 26px;
  `}
`;

export const HeaderContainer = styled.header`
  margin: 0;
  margin-bottom: 16px;
  ${media.tablet`
    margin-bottom: 20px;
  `}
`;
