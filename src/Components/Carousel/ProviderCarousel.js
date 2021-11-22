import React, { useState } from 'react';

const ProviderCarousel = () => {

  const [carouselCounter, setCarouselCounter] = useState(0);

  let carouselData = [
    'Guardian', 'Allstate', 'HSBC'
  ];

  return (
    <div style={styles.carouselWrapper}>
      <h2 style={styles.bannerText}>Our Services</h2>
      <div style={styles.carouselMainWrapper}>
        <div style={styles.carouselSlider}>
          <div style={{ ...styles.arrowBar, marginLeft: '5vw' }}>{"<"}</div>
          <div style={styles.innerCarousel}>
            {
              carouselData.map(currentItem =>
                <div>
                  {currentItem}
                </div>
              )
            }
          </div>
          <div style={{ ...styles.arrowBar, textAlign: 'right', marginRight: '5vw' }}>{">"}</div>
        </div>
      </div>
    </div>
  )
};

const styles = {
  carouselWrapper: {
    height: '20vh'
  },
  carouselMainWrapper: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-evenly',
  },
  carouselSlider: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-around',
    width: '100%'
  },
  innerCarousel: {
    display: 'flex',
    flex: 4,
    flexDirection: 'inline-row',
    justifyContent: 'space-between',
  },
  arrowBar: {
    flex: 1,
    color: "silver",
    fontSize: 30,
    fontWeight: 'bold'
  },
  bannerText: {
    marginTop: '15vh',
    fontSize: 32,
    textAlign: 'center',
    color: '#206620'
  }
};

export default ProviderCarousel;