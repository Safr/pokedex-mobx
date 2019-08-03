import React, { Suspense } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { renderRoutes } from 'react-router-config';
import { Loader } from '@pokedex/ui';
import { GlobalStyles } from './global-styles';
import { routes } from './routes';
import { theme } from './ui/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Normalize />
        <Suspense fallback={<Loader color="#f25f5c" />}>
          <AppWrapper>{renderRoutes(routes)}</AppWrapper>
        </Suspense>
      </>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
`;
