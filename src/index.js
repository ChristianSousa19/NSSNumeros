import React from 'react';
import ReactDOM from 'react-dom/client'; // Certifique-se de usar o .client
import App from './App';
import { FilterProvider } from './contexts/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Nova API do React 18
root.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
);
