import React from 'react';
import { Provider } from '@/components/ui/provider.tsx';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SWRConfig } from 'swr';
import { fetcher } from '@/api';
import './next-i18next.config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Provider>
        <App />
      </Provider>
    </SWRConfig>
  </React.StrictMode>,
);
