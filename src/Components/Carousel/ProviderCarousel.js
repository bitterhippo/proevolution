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
          <div style={{...styles.arrowBar, marginLeft: '5vw'}}>{"<"}</div>
          <div style={styles.innerCarousel}>
            {
              carouselData.map(currentItem =>
                <div>
                  { currentItem }
                </div>
              )
            }
          </div>
          <div style={{...styles.arrowBar, textAlign: 'right', marginRight: '5vw'}}>{">"}</div>
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
  },
  innerCarousel: {
    display: 'flex',
    flex: 4,
    flexDirection: 'inline-row',
    justifyContent: 'space-between',
    backgroundColor: 'green'
  },
  arrowBar: {
    flex: 1,
  }
};

export default ProviderCarousel;