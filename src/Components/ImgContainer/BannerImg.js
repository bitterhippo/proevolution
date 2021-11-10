import React from 'react';
//IMGFILES
import CeaserTeam from "../../Images/CeaserTeam.jpg";
import AboutUs1 from "../../Images/AboutUs1.jpg";
import AboutUsBanner from "../../Images/AboutUsBanner.jpg";
import FunctionalRehab from "../../Images/FunctionalRehab.jpg";
import Home1 from "../../Images/Home1.jpg";
import Home2 from "../../Images/Home2.jpg";
import Lazer from "../../Images/Lazer.jpg";
import Logo from "../../Images/Logo.svg";
import Massage from "../../Images/Massage.jpg";


const BannerImg = ({ image, height, width, message }) => {

  const imgConnector = {
    CeaserTeam: CeaserTeam,
  }

  return (
    <div style={{...styles.bannerImgWrapper, backgroundImage: imgConnector[image]}}>
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
    top: '20%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
  },
  img: {
    width: '100%',
    height: '30vh',
    objectFit: 'cover',
    overflow: 'hidden',
    filter: 'brightness(50%)',
  }
};

export default BannerImg;