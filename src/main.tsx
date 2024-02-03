import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index.ts';
import { Global, ThemeProvider } from '@emotion/react';

import { theme } from './styles/theme.ts';
import { global } from './styles/global.ts';

import Router from './router/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global styles={global} />
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
