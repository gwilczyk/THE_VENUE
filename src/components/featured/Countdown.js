import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {
  state = {
    deadline: 'Dec, 24, 2020',
    days: '0',
    hours: '0',
    minutes: '0',
    secondes: '0'
  };

  getTimeUntil(deadline) {
    const time = (Date.parse(deadline) - Date.parse(new Date())) / 1000;
    const secondes = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600) % 24;
    const days = Math.floor(time / 86400);
    this.setState({ days, hours, minutes, secondes });
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    const { days, hours, minutes, secondes } = this.state;
    return (
      <Slide left delay={1000}>
        <div className='countdown_wrapper'>
          <div className='countdown_top'>event starts in</div>
          <div className='countdown_bottom'>
            <div className='countdown_item'>
              <div className='countdown_time'>{days}</div>
              <div className='countdown_tag'>days</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{hours}</div>
              <div className='countdown_tag'>hours</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{minutes}</div>
              <div className='countdown_tag'>minutes</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{secondes}</div>
              <div className='countdown_tag'>secondes</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;
