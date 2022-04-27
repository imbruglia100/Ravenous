import React, { useState } from 'react';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import './App.css';
import Yelp from '../../util/Yelp.js';


function App() {

  const [businesses, setBusinesses] = useState([]);

const searchYelp = async (term, location, sortBy) => {
    setBusinesses(await Yelp.search(term, location, sortBy))
}
  console.log(businesses)
  return (
    <div className="App">
    <h1>ravenous</h1>
    <SearchBar searchYelp={searchYelp} />
    <BusinessList businesses={businesses}/>
  </div>
  );
}

export default App;
