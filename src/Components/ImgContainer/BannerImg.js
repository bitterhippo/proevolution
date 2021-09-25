import React from 'react';
import * as BannerNavImg from '../../Images/CeaserTeam.jpg';

const BannerImg = () => {
  return (
    <div style={styles.bannerImgWrapper}>
      <h1 style={styles.bannerText}> Pro Evolution </h1>
      <img src="./Images/CeaserTeam.jpg"></img>
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