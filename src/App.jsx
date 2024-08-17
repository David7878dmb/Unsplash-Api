import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import RandomImages from './components/randomImages';
import SearchResults from './components/searchResults';
import Profile from './components/profile';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<RandomImages />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<div>Page not found</div>} />      
      </Routes>
    </div>
  );
};
export default App;