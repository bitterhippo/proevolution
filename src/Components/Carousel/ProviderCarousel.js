import React, { useState } from 'react';
import CustomImg from '../ImgContainer/CustomImg';

const ProviderCarousel = () => {

  const [carouselCounter, setCarouselCounter] = useState(0);

  let carouselData = [
    { name: 'Guardian', img: 'Guardian', key: 1 },
    { name: 'Allstate', img: 'Allstate', key: 2 },
    { name: 'HSBC', img: 'HSBC', key: 3 }
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
                <div
                key={currentItem.key}
                >
                  <CustomImg 
                    height={50}
                    width={150}
                    image={currentItem.img}
                  />
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
    minHeight: '20vh',
    marginTop: '15vh',
    marginBottom: '15vh',
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
    marginTop: '6vh',
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
    fontSize: 32,
    textAlign: 'center',
    color: '#206620'
  }
};

export default ProviderCarousel;