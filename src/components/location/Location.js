import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42232.15127571855!2d-0.3942458260427218!3d48.58094347369473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48098d237655302b%3A0xfa35acc29aa9793a!2zNjE2MDAgTGEgRmVydMOpLU1hY8Op!5e0!3m2!1sen!2sfr!4v1594482340849!5m2!1sen!2sfr'
        width='100%'
        height='600px'
        frameBorder='0'
        allowFullScreen
        title='Location'
      />

      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
