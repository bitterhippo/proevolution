import React, { useState } from 'react';

const ProviderCarousel = () => {

  const [carouselCounter, setCarouselCounter] = useState(0);

  let carouselData = [
    'Guardian', 'Allstate', 'HSBC'
  ];

  return (
    <div>
      LOL
      <div style={styles.carouselMainWrapper}>
        <div style={styles.carouselSlider}>
          {
            carouselData.map(currentProvider => )
          }
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
    justifyContent: 'space-evenly'
  }
};

export default ProviderCarousel;