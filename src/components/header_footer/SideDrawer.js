import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  const scrollToElement = (element, offset) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      // offset: -133
      offset: offset
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component='nav'>
        <ListItem button onClick={() => scrollToElement('Featured', 0)}>
          Event Starts In
        </ListItem>
        <ListItem button onClick={() => scrollToElement('VenueNFO', -90)}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => scrollToElement('Highlights', -133)}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElement('Pricing', -90)}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToElement('Location', 0)}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
