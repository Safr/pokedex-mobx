import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toJS } from 'mobx';
import styled from 'styled-components';
import media from '@pokedex/ui/theme/media';

export const ListItem = memo(({ id, avatar, name, type, onFilterByType }) => {
  return (
    <Wrapper>
      <div>
        <h2 className="pokemon--species--name">{name}</h2>
        <SpanId>{`#${id}`}</SpanId>
        <Link to={`/pokemon/${id}`}>
          <figure className="pokemon--species--sprite">
            <img src={avatar} alt="avatar" />
          </figure>
        </Link>
        <Footer>
          <div>
            {type.map(typeItem => (
              <button
                type="button"
                key={typeItem.id}
                onClick={() => onFilterByType(toJS(typeItem))}
              >
                <span className={`type type-${typeItem}`}>{typeItem}</span>
              </button>
            ))}
          </div>
        </Footer>
      </div>
    </Wrapper>
  );
});

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterByType: PropTypes.func.isRequired,
};

export const Wrapper = styled.li`
  @media (min-width: 20px) and (max-width: 620px) {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  position: relative;
  display: flex;
  justify-content: center;
  max-width: 380px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  animation: bounce 0.4s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  img {
    cursor: pointer;
    transform: translateY(0);
    transition: all 0.3s ease;
  }

  &:hover img,
  &:active img {
    transform: translateY(5px);
  }

  ${media.desktop`
    margin-right: 10px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  `}

  h2 {
    padding-top: 10px;
  }
`;

export const SpanId = styled.span`
  position: absolute;
  top: 5px;
  right: 9px;
  font-weight: bold;
  display: inline-block;
  margin: 5px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.rose};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  .type:hover,
  .type:active {
    border: 1px solid ${({ theme }) => theme.colors.black};
    font-size: 15px;
  }
`;

export const Footer = styled.footer`
  margin: 0;
  padding: 8px;

  button {
    font-size: inherit;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
