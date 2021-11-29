import React, { useState } from 'react';

const ImgCarousel = () => {

  const [selectedImg, setSelectedImg] = useState();
  const [currentImg, setCurrentImg] = useState(0);

  const onClickImg = (e) => {
    setSelectedImg(e.target.value);
  };

  const onArrowclick = (i) => {
    setCurrentImg(currentImg + i);
  }


  return (
    <div style={styles.mainWrapper}>
      <div style={styles.topRow}>
        BIG IMG
      </div>
      <div style={styles.bottomRow}>
        <div style={styles.arrows}>
          {`<`}
        </div>
        <div>
          Imgs
        </div>
        <div style={styles.arrows}>
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
    gap: 20
  },
  mainWrapper: {
    backgroundColor: 'red',
    minHeight: '20vh',
    minWidth: '100%',
    marginTop: 30
  },
  arrows: {
    color: 'gray',
    fontSize: '3rem'
  }
};

export default ImgCarousel;