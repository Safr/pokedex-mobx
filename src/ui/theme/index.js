export const colors = {
  black: '#333',
  bug: '#a8b820',
  dragon: '#7038f8',
  electric: '#f8d030',
  fairy: '#ee99ac',
  fighting: '#c03028',
  fire: '#f08030',
  flying: '#a890f0',
  ice: '#98d8d8',
  lightGray: '#ccc',
  ghost: '#705898',
  grass: '#78c850',
  ground: '#e0c068',
  normal: '#a8a878',
  psychic: '#f85888',
  poison: '#673ab7',
  red: '#f25f5c',
  rock: '#b8a038',
  rose: '#f42257',
  steel: '#b8b8d0',
  water: '#6890f0',
  white: '#fff',
  bgColor: 'rgba(179, 175, 171, .82)',
};

export const theme = {
  colors,
};

export function createTransition(
  props = ['all'],
  {
    duration = theme.duration.fast,
    easing = theme.easing.sharp,
    delay = 0,
  } = {},
) {
  const formatMs = milliseconds => `${Math.round(milliseconds)}ms`;

  return (Array.isArray(props) ? props : [props])
    .map(
      animatedProp =>
        `${animatedProp} ${
          typeof duration === 'string' ? duration : formatMs(duration)
        } ${easing} ${typeof delay === 'string' ? delay : formatMs(delay)}`,
    )
    .join(',');
}
