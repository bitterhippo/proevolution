import React, { useState } from 'react';
import CustomSVG from '../ImgContainer/CustomSVG';
import Colors from '../../Components/Colors';

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
          <div style={styles.arrowBar}>
            <button
             style={{...styles.arrowButton, left: '7%'}}
             onClick={() => carouselCounter >= 1 ? setCarouselCounter((previousState) => previousState -=1) : null}
            > {"<"} </button>
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
          <div style={styles.arrowBar}>
            <button 
            style={{...styles.arrowButton, right: '2%'}}
            onClick={() => carouselCounter <= carouselData.length - 1 ?setCarouselCounter((previousState) => previousState +=1) : null}
            > {">"} </button>
          </div>
        </div>
      </div>
      <div style={styles.circleRow}>
        <div style={carouselCounter === 0 ? { ...styles.circle, backgroundColor: '#434343' } : styles.circle} />
        <div style={carouselCounter === 1 ? { ...styles.circle, backgroundColor: '#434343' } : styles.circle}/>
        <div style={carouselCounter === 2 ? { ...styles.circle, backgroundColor: '#434343' } : styles.circle}/>
        <div style={carouselCounter === 3 ? { ...styles.circle, backgroundColor: '#434343' } : styles.circle}/>
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
    position: 'relative',
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-evenly',
  },
  carouselSlider: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-around',
    width: '100%',
  },
  innerCarousel: {
    display: 'flex',
    flex: 6,
    flexDirection: 'inline-row',
    justifyContent: 'space-between',
  },
  arrowBar: {
    postion: 'relative',
    flex: 1,
    color: "silver",
    fontSize: 30,
    fontWeight: 'bold',
    verticalAlign: 'center',
  },
  bannerText: {
    fontSize: 32,
    textAlign: 'center',
    color: '#206620',
    paddingTop: '5vh'
  },
  arrowButton: {
    position: 'absolute',
    backgroundColor: 'rgba(32, 102, 32, 0.009)',
    border: 'none',
    color: 'gray',
    fontSize: '3rem',
    fontWeight: 'bold',
    top: '45%',
    transform: 'translate(-50%, -50%)',
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