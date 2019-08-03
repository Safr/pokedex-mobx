import { lazy } from 'react';

const PokemonsPage = lazy(() =>
  import('./pages').then(module => ({
    default: module.Pokemons,
  })),
);

const Pokemon = lazy(() =>
  import('./pages/single').then(module => ({
    default: module.Pokemon,
  })),
);
// export const PokemonsListPage = props => (
//   <Switch>
//     <Route
//       exact
//       path="/"
//       component={routeProps => <PokemonsList {...props} {...routeProps} />}
//     />
//     <Redirect to="/404" />
//   </Switch>
// );

// PokemonsListPage.propTypes = {
//   history: ReactRouterPropTypes.history.isRequired,
//   location: ReactRouterPropTypes.location.isRequired,
//   match: ReactRouterPropTypes.match.isRequired,
// };

// export default React.memo(PokemonsListPage);

export const routes = [
  {
    path: '/',
    component: PokemonsPage,
    exact: true,
  },
  {
    path: '/pokemon/:id',
    component: Pokemon,
  },
];
