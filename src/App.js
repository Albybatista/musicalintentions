import './App.css';
import React, { Fragment } from 'react';
import MainPage from './components/MainPage';
import Carousel from './components/Carousel';

function App() {
  return (
    <Fragment>
    <div className="container">
      <Carousel />
      <MainPage />
    </div>
    </Fragment>
  );
}

export default App;
