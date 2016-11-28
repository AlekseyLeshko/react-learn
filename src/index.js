import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ShoppingList from './components/ShoppingList';

ReactDOM.render(
  <div>
    <App />
    <ShoppingList name="Aleksey" />
  </div>,
  document.getElementById('root')
);
