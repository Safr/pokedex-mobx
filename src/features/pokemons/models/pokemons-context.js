import { createContext } from 'react';
import { PokemonsStore } from './pokemons-store';

export function createStores() {
  return { pokemonsStore: new PokemonsStore() };
}

export const stores = createStores();

export const PokemonsContext = createContext(stores);
