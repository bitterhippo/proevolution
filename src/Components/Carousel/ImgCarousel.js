import React, { useState } from 'react';
import CustomImg from '../ImgContainer/CustomImg';

const ImgCarousel = () => {

  const [selectedImg, setSelectedImg] = useState();
  const [currentImg, setCurrentImg] = useState(0);

  //onClick Handlers

  const onClickImg = (e) => {
    setSelectedImg(e.target.value);
  };

  const onArrowclick = (i) => {
    setCurrentImg(currentImg + i);
  };

  //Defaults

  const imgDefaults = [
    'AboutUs1',
    'Allstate',
    'Chiro',
    'Home1',
    'Home2',
    'PT'
  ];


  return (
    <div style={styles.mainWrapper}>
      <div style={styles.topRow}>
        {
          <CustomImg 
            height={'40vh'}
            width={'60vw'}
            image={imgDefaults[currentImg]}
          />
        }
      </div>
      <div style={styles.bottomRow}>
        <div style={{...styles.arrows, marginLeft: '5vw'}}>
          {`<`}
        </div>
        <div style={styles.bottomRowImages}>
          {
            imgDefaults.map(currentImg => <div>
              <CustomImg
                height={100}
                width={100}
                image={currentImg}
              />
            </div>)
          }
        </div>
        <div style={{...styles.arrows, marginRight: '5vw'}}>
          {`>`}
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
    gap: 20
  },
  mainWrapper: {
    minHeight: '20vh',
    minWidth: '100%',
    marginTop: 30
  },
  arrows: {
    color: 'gray',
    fontSize: '3rem',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold'
  }
};

export default ImgCarousel;