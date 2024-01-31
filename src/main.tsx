import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';

import App from './App.tsx';

import { theme } from './styles/theme.ts';
import { global } from './styles/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
