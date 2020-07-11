import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  boxes = [
    {
      price: 100,
      position: 'Balcony',
      desc:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis possimus eum commodi porro ullam accusamus?',
      linkto: '#',
      delay: 350
    },
    {
      price: 150,
      position: 'Medium',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veritatis modi libero est possimus quas? Asperiores, commodi!',
      linkto: '#',
      delay: 0
    },
    {
      price: 250,
      position: 'Star',
      desc:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, impedit. Aspernatur mollitia numquam minima!',
      linkto: '#',
      delay: 700
    }
  ];
  //   state = {
  //     prices: [100, 150, 250],
  //     positions: ['Balcony', 'Medium', 'Star'],
  //     desc: [
  //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis possimus eum commodi porro ullam accusamus?',
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veritatis modi libero est possimus excepturi delectus nulla quas? Asperiores, commodi!',
  //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, impedit. Aspernatur mollitia numquam minima!'
  //     ],
  //     linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s']
  //   };

  showBoxes = () =>
    this.boxes.map((box, index) => (
      <Zoom key={index} delay={box.delay} duration={3000}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>{box.position}</span>
              <span>${box.price}</span>
            </div>
            <div className='pricing_description'>{box.desc}</div>
            <div className='pricing_button'>
              <MyButton
                text='Purchase'
                link={box.linkto}
                bck='#ffa800'
                color='#fff'
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
