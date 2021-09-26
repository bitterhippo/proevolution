import React from 'react';
import CeaserTeam from "../../Images/CeaserTeam.jpg";

const BannerImg = ({ image, message }) => {
  return (
    <div style={styles.bannerImgWrapper}>
      <h1 style={styles.bannerText}> {message} </h1>
      <img
        style={styles.img}
        src={CeaserTeam} />
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
    Left: '50'
  },
  img: {
    width: '100%',
    height: '40vh',
    objectFit: 'cover',
    filter: 'brightness(50%)',
    zIndex: -1
  }
};

export default BannerImg;