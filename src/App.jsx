import React from 'react';
import './App.css';
import header from './components/header';

import List from './page/List';
import Header from './components/header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}
