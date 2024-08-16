import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import RandomImages from './components/randomImages';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<RandomImages />} />
      </Routes>
    </div>
  );
};
export default App;