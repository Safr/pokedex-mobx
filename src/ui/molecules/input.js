import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  outline: none;
  font-style: normal;
  font-weight: normal;
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-radius: 5px;

  &::placeholder {
    color: #ccc;
  }
  transition: border-color 100ms linear;
  -webkit-tap-highlight-color: transparent;
`;

export const Input = React.forwardRef((props, ref) => {
  return <Wrapper {...props} ref={ref} />;
});

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
