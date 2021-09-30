import React from 'react';
//IMGFILES
import CeaserTeam from "../../Images/CeaserTeam.jpg";

const BannerImg = ({ image, message }) => {

  const imgConnector = {
    CeaserTeam: CeaserTeam
  }

  return (
    <div style={styles.bannerImgWrapper}>
      <div style={styles.bannerText}>
        {message}
      </div>
      <img
        style={styles.img}
        src={imgConnector[image]} />
    </div>
  )
};

const styles = {
  bannerImgWrapper: {
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '3vh',
    position: 'absolute',
    zIndex: 5,
    left: '50%',
    top: '25%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    marginBottom: 0,
    paddingBottom: 0
  },
  img: {
    width: '100%',
    height: '30vh',
    objectFit: 'cover',
    overflow: 'hidden',
    filter: 'brightness(50%)',
    zIndex: -1
  }
};

export default BannerImg;