/* eslint-disable no-console */
import { observable, runInAction, action } from 'mobx';
import { computedFn } from 'mobx-utils';
import { ascendSort, fetchAsync, filterArrayByType } from '@lib';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

const flattenPokemons = data => ({
  id: data.id,
  avatar: data.sprites.front_default,
  name: data.name,
  type: data.types.map(type => type.type.name),
  weight: data.weight,
  height: data.height,
  speed: data.stats[0].base_stat,
  specialDefense: data.stats[1].base_stat,
  specialAttack: data.stats[2].base_stat,
  defense: data.stats[3].base_stat,
  attack: data.stats[4].base_stat,
  hp: data.stats[5].base_stat,
});

export class PokemonsStore {
  @observable pokemons = [];

  @observable pokemon = null;

  @observable loading = false;

  getFilteredPokemons = computedFn(function filterPokemons(searchValue) {
    return searchValue
      ? this.pokemons.filter(
          pokemon => pokemon.name.toLowerCase().indexOf(searchValue) > -1,
        )
      : this.pokemons;
  });

  getFilteredPokemonsByType = computedFn(function filterPokemons(type) {
    return type
      ? filterArrayByType(this.getFilteredPokemons(''), type)
      : this.getFilteredPokemons('');
  });

  @action fetchPokemons(limit = 10) {
    this.loading = true;
    fetchAsync(`${baseURL}?limit=${limit}`).then(res => {
      runInAction(() => {
        this.pokemons = [];
      });
      const results = [...res.data.results];
      results.forEach(resItem => {
        fetchAsync(resItem.url)
          .then(pokemons => {
            runInAction(() => {
              this.loading = false;
            });
            const pokemonsData = pokemons.data;

            runInAction(() => {
              this.pokemons = ascendSort([
                ...this.pokemons,
                flattenPokemons(pokemonsData),
              ]);
            });
          })
          .catch(err => {
            console.log('err', err);
          });
      });
    });
  }

  @action fetchPokemonById(id) {
    this.loading = true;
    fetchAsync(`${baseURL}/${id}`).then(res => {
      runInAction(() => {
        this.pokemon = flattenPokemons(res.data);
        this.loading = false;
      });
    });
  }
}
