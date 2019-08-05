import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Pagination = ({ data, activeShowCount, onPageSelect }) => {
  return (
    <PaginationList>
      {data.map(item => {
        return (
          <Li key={item} active={activeShowCount === item}>
            <button type="button" onClick={evt => onPageSelect(evt, item)}>
              {item}
            </button>
          </Li>
        );
      })}
    </PaginationList>
  );
};

Pagination.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeShowCount: PropTypes.number.isRequired,
  onPageSelect: PropTypes.func.isRequired,
};

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: auto;
  margin-top: 25px;
`;

const Li = styled.li`
    margin-right: 5px;

  button {
    font-size: inherit;
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.black};
    background:  ${({ active, theme }) =>
      active ? theme.colors.white : 'none'};
    cursor: pointer;

    &:hover {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export default PaginationList;
