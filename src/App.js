import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueNfo from './components/venueNfo/VenueNfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div
        className='App'
        style={{ height: '1500px', background: 'cornflowerblue' }}
      >
        <Header />
        <Featured />
        <VenueNfo />
        <Highlights />
        <Pricing />
      </div>
    );
  }
}

export default App;
