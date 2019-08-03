import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '@pokedex/ui/theme/media';

const Page = ({ children }) => <Section>{children}</Section>;

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 15px;
  text-align: center;
  ${media.tablet`
    padding-left: 20px;
    padding-right: 20px;
    max-width: 960px;
  `}
  ${media.desktop`
    padding-left: 20px;
    padding-right: 20px;
    max-width: 960px;
  `}
`;
