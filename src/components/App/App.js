import React from 'react';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import './App.css';



function App() {

  const business = {imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const searchYelp = (term, location, sortBy) => {
  console.log(`${term}, ${location}, ${sortBy}`)
}

const businesses = [business, business,business,business,business ];
  return (
    <div className="App">
    <h1>ravenous</h1>
    <SearchBar searchYelp={searchYelp} />
    <BusinessList businesses={businesses}/>
  </div>
  );
}

export default App;
