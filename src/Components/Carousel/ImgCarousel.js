import React, { useState } from 'react';
import CustomImg from '../ImgContainer/CustomImg';

const ImgCarousel = () => {

  const [selectedImg, setSelectedImg] = useState();
  const [counter, setCounter] = useState(0);

  //onClick Handlers

  const onClickImg = (e) => {
    setSelectedImg(e.target.value);
  };

  const onArrowclick = (i) => {
    if (counter + i >= 0 && counter + i < imgDefaults.length)
    {
      setCounter(counter + i);
    }
  };

  //Defaults

  const imgDefaults = [
    {name: 'Facility1', key: 1},
    {name: 'Facility2', key: 2},
    {name: 'Facility3', key: 3},
    {name: 'Facility4', key: 4},
    {name: 'Facility5', key: 5},
    {name: 'Facility6', key: 6},
    {name: 'Facility7', key: 7},
  ];


  return (
    <div style={styles.mainWrapper}>
      <div style={styles.topRow}>
        {
          <CustomImg
            height={'60vh'}
            width={'80vw'}
            image={imgDefaults[counter]}
          />
        }
      </div>
      <div style={styles.bottomRow}>
        <div
          style={{ ...styles.arrows, marginLeft: '5vw' }}
        >
          <button
            style={styles.arrowButton}
            onClick={() => onArrowclick(-1)}
          >
            {`<`}
          </button>
        </div>
        <div style={styles.bottomRowImages}>
          {
            imgDefaults
              .filter(currentImg => currentImg != imgDefaults[counter])
              .map(currentImg => <div
                key={currentImg.key}
              >
                <CustomImg
                  height={'12vw'}
                  width={'12vw'}
                  image={currentImg.name}
                />
              </div>)
          }
        </div>
        <div
          style={{ ...styles.arrows, marginRight: '5vw' }}
        >
          <button
            style={styles.arrowButton}
            onClick={() => onArrowclick(1)}
          >
            {`>`}
          </button>
        </div>
      </div>
    </div>
  )
};

const styles = {
  topRow: {
    display: 'flex',
    flexDirection: 'column',
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-between',
    marginTop: 20,

  },
  bottomRowImages: {
    display: 'flex',
    flexDirection: 'inline-row',
    marginTop: 'auto',
    marginBottom: 'auto',
    gap: 20,
  },
  mainWrapper: {
    minHeight: '20vh',
    minWidth: '100%',
    marginTop: 30,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: 'rgba(32, 102, 32, 0.2)'
  },
  arrows: {
    color: 'gray',
    fontSize: '3rem',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold'
  },
  arrowButton: {
    backgroundColor: 'rgba(32, 102, 32, 0.009)',
    border: 'none',
    color: 'gray',
    fontSize: '3rem',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold',
  }
};

export default ImgCarousel;