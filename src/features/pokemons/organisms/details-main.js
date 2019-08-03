import React from 'react';
import PropTypes from 'prop-types';

export const DetailsMain = ({ currentPokemon }) => (
  <table>
    <tbody>
      <tr>
        <td>Type</td>
        <td>
          {currentPokemon.type.map(typeItem => (
            <span key={typeItem} className={`type type-${typeItem}`}>
              {typeItem}
            </span>
          ))}
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>{currentPokemon.height}</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>{currentPokemon.weight}</td>
      </tr>
      <tr>
        <td>Speed</td>
        <td>{currentPokemon.speed}</td>
      </tr>
    </tbody>
  </table>
);

DetailsMain.propTypes = {
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
  }).isRequired,
};
