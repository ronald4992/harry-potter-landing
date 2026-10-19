import React from 'react';
import ReactDOM from 'react-dom/client';
import { injectContentsquareScript } from '@contentsquare/tag-sdk';
import App from './App';
import './index.css';

injectContentsquareScript({ clientId: 'bd90dd312c666' });

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
