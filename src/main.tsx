import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';

import { theme } from './styles/theme.ts';
import { global } from './styles/global.ts';

import Router from './router/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
);
