import React from 'react';
import Header from "./components/header";
import "./App.scss";
import PropertyListing from './components/property-listing';

const App = () => {
  return (
      <div>
          <Header />
          <main className="main-section">
                <h2>Search Properties to rent :</h2>
                <PropertyListing/>
          </main>
      </div>
  )
}

export default App;