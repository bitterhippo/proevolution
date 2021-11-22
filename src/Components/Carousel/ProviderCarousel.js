import React, { useState } from 'react';

const ProviderCarousel = () => {

  const [carouselCounter, setCarouselCounter] = useState(0);

  let carouselData = [
    'Guardian', 'Allstate', 'HSBC'
  ];

  return (
    <div>
      Carousel
      <div style={styles.carouselMainWrapper}>
        <div style={styles.carouselSlider}>
          <div> left arrow </div>
          <div> Stuff will go here</div>
          <div> right arrow </div>
        </div>
      </div>
    </div>
  )
};

const styles = {
  carouselMainWrapper: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-evenly'
  },
  carouselSlider: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    width: '100%'
  }
};

export default ProviderCarousel;