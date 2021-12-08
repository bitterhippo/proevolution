import React, { useState } from 'react';
import CustomSVG from '../ImgContainer/CustomSVG';


const ProviderCarousel = () => {

  const [carouselCounter, setCarouselCounter] = useState(0);

  let carouselData = [
    { img: 'Guardian', key: 1 },
    { img: 'Allstate', key: 2 },
    { img: 'HSBC', key: 3 }
  ];

  return (
    <div style={styles.carouselWrapper}>
      <h2 style={styles.bannerText}>Our Providers</h2>
      <div style={styles.carouselMainWrapper}>
        <div style={styles.carouselSlider}>
          <div style={{ ...styles.arrowBar, marginLeft: '5vw' }}>
            <button style={styles.arrowButton}> {"<"} </button>
          </div>
          <div style={styles.innerCarousel}>
            {
              carouselData.map(currentItem =>
                <div
                  key={currentItem.key}
                >
                  <CustomSVG
                    height={160}
                    width={161}
                    image={currentItem.img}
                  />
                </div>
              )
            }
          </div>
          <div style={{ ...styles.arrowBar, textAlign: 'right', marginRight: '5vw' }}>
            <button style={styles.arrowButton}> {">"} </button>
          </div>
        </div>
      </div>
      <div style={styles.circleRow}>
        <div style={{...styles.circle, backgroundColor: '#434343'}}></div>
        <div style={styles.circle}></div>
        <div style={styles.circle}></div>
        <div style={styles.circle}></div>
      </div>
    </div>
  )
};

const styles = {
  carouselWrapper: {
    minHeight: '35vh',
    marginTop: '15vh'
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
    flex: 6,
    flexDirection: 'inline-row',
    justifyContent: 'space-between',
  },
  arrowBar: {
    flex: 1,
    color: "silver",
    fontSize: 30,
    fontWeight: 'bold',
    verticalAlign: '50%',
  },
  bannerText: {
    fontSize: 32,
    textAlign: 'center',
    color: '#206620',
    paddingTop: '5vh'
  },
  arrowButton: {
    backgroundColor: 'rgba(32, 102, 32, 0.009)',
    border: 'none',
    color: 'gray',
    fontSize: '3rem',
    margin: '23%',
    fontWeight: 'bold',
  },
  circle: {
    height: 15,
    width: 15,
    backgroundColor: 'white',
    borderRadius: '50%',
  },
  circleRow: {
    display: 'flex',
    flexDirection: 'inline-row',
    gap: 10,
    justifyContent: 'center'
  }
};

export default ProviderCarousel;