import { css } from 'styled-components';

const sizes = {
  phone: 320,
  tablet: 620,
  desktop: 960,
  giant: 1170,
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size](...args) {
      return css`
        @media (min-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    },
  };
}, {});

export default media;
