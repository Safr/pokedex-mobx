import React, { useContext, useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import { Pagination } from '@pokedex/ui';
import { Page } from '@features/common/templates';
import { Header, List } from '../organisms';
import { PokemonsContext } from '../models/pokemons-context';

export const Pokemons = observer(() => {
  const { pokemonsStore } = useContext(PokemonsContext);
  const [searchValue, setSearchValue] = useState('');
  const [itemsCount, setItemsCount] = useState(10);

  const showCount = useMemo(() => [10, 20, 30], []);

  const handlePageSelect = (evt, count) => {
    evt.preventDefault();
    setItemsCount(count);
  };

  useEffect(() => {
    pokemonsStore.fetchPokemons(itemsCount);
  }, [itemsCount, pokemonsStore]);
  return (
    <Page>
      <Header onSearchValue={setSearchValue} />
      <List searchValue={searchValue} />
      <Pagination
        data={showCount}
        activeShowCount={itemsCount}
        onPageSelect={handlePageSelect}
      />
    </Page>
  );
});

Pokemons.propTypes = {};
