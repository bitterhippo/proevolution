import React from 'react';
import CeaserTeam from "../../Images/CeaserTeam.jpg";

const BannerImg = ({ image, message }) => {
  return (
    <div style={styles.bannerImgWrapper}>
      <h1 style={styles.bannerText}> {message} </h1>
      <img src={CeaserTeam} />
    </div>
  )
};

const styles = {
  bannerImgWrapper : {
    width: '100%',
    height: '20vh',
  }, 
  bannerText : {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '3vh'
  }
};

export default BannerImg;