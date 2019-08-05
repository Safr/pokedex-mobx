import React, { useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import media from '@pokedex/ui/theme/media';
import { Page } from '@features/common/templates';
import { Loader, Tabs } from '@pokedex/ui';
import { PokemonsContext } from '../models/pokemons-context';
import { DetailsMain, DetailsStats } from '../organisms';

export const Pokemon = observer(props => {
  const { pokemonsStore } = useContext(PokemonsContext);
  const [tabValue, setTabValue] = useState('main');
  const tabsContent = useMemo(
    () => [
      {
        label: 'Main',
        value: 'main',
      },
      {
        label: 'Stats',
        value: 'stats',
      },
    ],
    [],
  );

  useEffect(() => {
    pokemonsStore.fetchPokemonById(props.match.params.id);
  }, [pokemonsStore, props.match.params.id]);

  if (pokemonsStore.loading && !pokemonsStore.pokemon) {
    return <Loader />;
  }

  if (pokemonsStore.pokemon) {
    return (
      <Page>
        <DetailsHeader>
          <Link to="/">
            <Logo>Pokedex</Logo>
          </Link>
          <h1>{pokemonsStore.pokemon.name}</h1>
          <SpanId>
            <img src={pokemonsStore.pokemon.avatar} alt="avatar" />
          </SpanId>
        </DetailsHeader>
        <Tabs
          filled="true"
          stretched
          currentValueColor="#f25f5c"
          tabs={tabsContent}
          currentValue={tabValue}
          onChange={e => {
            setTabValue(e);
          }}
        />
        {tabValue === 'main' && (
          <DetailsMain currentPokemon={pokemonsStore.pokemon} />
        )}

        {tabValue === 'stats' && (
          <DetailsStats currentPokemon={pokemonsStore.pokemon} />
        )}
      </Page>
    );
  }
  return null;
});

Pokemon.defaultProps = {
  currentPokemon: null,
};

Pokemon.propTypes = {
  currentPokemon: PropTypes.shape({
    attack: PropTypes.number,
    avatar: PropTypes.string,
    defense: PropTypes.number,
    height: PropTypes.number,
    hp: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    specialAttack: PropTypes.number,
    specialDefense: PropTypes.number,
    speed: PropTypes.number,
    type: PropTypes.arrayOf(PropTypes.string),
    weight: PropTypes.number,
  }),
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export const DetailsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};

  h1 {
    font-size: 25px;
    ${media.tablet`
      font-size: 32px;
    `}
  }

  a {
    font-size: 20px;
    margin-left: 14px;
    color: ${({ theme }) => theme.colors.red};
    ${media.tablet`
      font-size: 30px;
    `}
  }
`;

export const Logo = styled.span`
  padding: 1px;
`;

export const SpanId = styled.span`
  font-size: 10px;
`;

export const Details = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DetailsImage = styled.figure`
  margin: 0 auto;
`;
