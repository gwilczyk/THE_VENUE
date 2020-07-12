import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueNfo from './components/venueNfo/VenueNfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div
        className='App'
        style={{ height: '1500px', background: 'cornflowerblue' }}
      >
        <Header />
        <Element name='Featured'>
          <Featured />
        </Element>
        <Element name='VenueNFO'>
          <VenueNfo />
        </Element>
        <Element name='Highlights'>
          <Highlights />
        </Element>
        <Element name='Pricing'>
          <Pricing />
        </Element>
        <Element name='Location'>
          <Location />
        </Element>
        <Element name='Footer'>
          <Footer />
        </Element>
      </div>
    );
  }
}

export default App;
