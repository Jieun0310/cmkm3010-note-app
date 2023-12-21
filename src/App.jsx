import React from 'react';
import './App.css';
import header from './components/header';
import { db } from './firebase';
import List from './page/List';
import Header from './components/header';

export default function App() {
  console.log(db);

  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}
