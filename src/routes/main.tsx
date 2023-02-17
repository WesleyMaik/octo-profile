import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { Providers } from '../components/Providers'
import { Header } from '../components/Header';

import "../style/global.css";
import { Affiliations } from '../components/Layout/Affiliations';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <Header />
      <App />
    </Providers>
  </React.StrictMode>,
);
