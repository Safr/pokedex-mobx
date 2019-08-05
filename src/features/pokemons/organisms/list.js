import React, { useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import media from '@pokedex/ui/theme/media';
import { Loader } from '@pokedex/ui';
import image from '../assets/location.svg';
import { PokemonsContext } from '../models/pokemons-context';
import { ListItem } from './list-item';

export const List = observer(({ searchValue }) => {
  const { pokemonsStore } = useContext(PokemonsContext);
  const [filterType, setFilterType] = useState(null);
  const filteredPokemons = pokemonsStore.getFilteredPokemons(searchValue);
  const filteredPokemonsByType = pokemonsStore.getFilteredPokemonsByType(
    filterType,
  );

  const handleFilterByType = useCallback(typeName => {
    setFilterType(typeName);
  }, []);

  const handleReset = useCallback(() => {
    setFilterType(null);
  }, []);

  const renderData = useCallback(
    filterData =>
      filterData.map(({ name, id, avatar, type }) => (
        <ListItem
          key={name}
          id={id}
          avatar={avatar}
          name={name}
          type={type}
          onFilterByType={handleFilterByType}
        />
      )),
    [handleFilterByType],
  );
  const filterResults = useCallback(() => {
    if (filteredPokemons.length === 0) {
      return (
        <P>
          <img src={image} alt="location" />
          No pokemons were found
        </P>
      );
    }
    return !filterType
      ? renderData(filteredPokemons)
      : renderData(filteredPokemonsByType);
  }, [filterType, filteredPokemons, filteredPokemonsByType, renderData]);

  if (pokemonsStore.loading && pokemonsStore.pokemons.length === 0) {
    return <Loader />;
  }
  return (
    <>
      <Wrapper isEmpty={filteredPokemons.length === 0}>
        {filterResults()}
      </Wrapper>
      {filterType ? <ResetBtn onClick={handleReset}>Reset</ResetBtn> : null}
    </>
  );
});

List.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  activePage: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      type: PropTypes.arrayOf(PropTypes.string.isRequired),
    }),
  ).isRequired,
  searchValue: PropTypes.string.isRequired,
};

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin: 0;
  margin-bottom: 20px;
  padding: 8px;
  text-align: center;
  ${media.tablet`
  grid-template-columns: ${({ isEmpty }) => (isEmpty ? '1fr' : '1fr 1fr')};
  `}
  ${media.desktop`
    grid-template-columns: ${({ isEmpty }) =>
      isEmpty ? '1fr' : '1fr 1fr 1fr'};
  `}
`;

export const P = styled.p`
  margin-bottom: 0;
  font-size: 28px;
  ${media.tablet`
    margin-right: auto;
    margin-left: auto;
    font-size: 35px;
  `}
  ${media.desktop`
    font-size: 45px;
  `}

  img {
    display: block;
    width: 100px;
    height: 100px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    ${media.tablet`
      width: 1200px;
      height: 120px;
    `}
    ${media.desktop`
      width: 140px;
      height: 140px;
    `}
  }
`;

export const ResetBtn = styled.button`
  width: 100px;
  height: 38px;
  margin: 0 auto;
  padding: 7px;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid transparent;
  background: none;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;
  cursor: pointer;
  ${media.desktop`
    margin: 0 auto;
    margin-top: 40px;
  `}
  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.white};
    background-color: transparent;
  }
`;
