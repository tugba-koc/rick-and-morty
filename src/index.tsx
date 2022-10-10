import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { WithProvider } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WithProvider />
  </React.StrictMode>
);
