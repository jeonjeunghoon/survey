import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';

import { theme } from './styles/theme.ts';
import { global } from './styles/global.ts';

import Router from './router/index.tsx';
import { store } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
