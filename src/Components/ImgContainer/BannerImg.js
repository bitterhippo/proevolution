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
import NutritionalCounselling from "../../Images/NutritionalCounselling.jpg";
import Physiotherapy from "../../Images/Physiotherapy.jpg";
import PractList1 from "../../Images/PractList1.jpg";
import PractList2 from "../../Images/PractList2.jpg";
import PractList3 from "../../Images/PractList3.jpg";
import PT from "../../Images/PT.jpg";
import ShockwaveTherapy from "../../Images/ShockwaveTherapy.jpg";
import TherapueticUltrasound from "../../Images/TherapueticUltrasound.jpg";
import Hero from "../../Images/Hero.jpg";
import FAQ2 from "../../Images/FAQ2.jpg";
import SB from "../../Images/SB.jpg";

const BannerImg = ({ image, message, brightness }) => {

  const imgConnector = {
    CeaserTeam: CeaserTeam,
    AboutUs1: AboutUs1,
    AboutUsBanner: AboutUsBanner,
    FunctionalRehab: FunctionalRehab,
    Home1: Home1,
    Home2: Home2,
    Lazer: Lazer,
    Logo: Logo,
    Massage: Massage,
    NutritionalCounselling: NutritionalCounselling,
    Physiotherapy: Physiotherapy,
    PractList1: PractList1,
    PractList2: PractList2,
    PractList3: PractList3,
    PT: PT,
    ShockwaveTherapy: ShockwaveTherapy,
    TherapueticUltrasound: TherapueticUltrasound,
    Hero: Hero,
    FAQ2: FAQ2,
    SB: SB
  }

  return (
    <div style={{
      ...styles.bannerImgWrapper
    }}>
      <img
        style={{ 
          ...styles.img, 
          filter: brightness === "dark" 
          ? "brightness(50%)" 
          : "brightness(80%)" 
        }}
        src={imgConnector[image]} />
      <div style={styles.bannerText}>
        {message}
      </div>
    </div>
  )
};

const styles = {
  bannerText: {
    color: 'white',
    fontSize: '3rem',
    zIndex: 1,
    textAlign: 'center',
    transform: 'translate(0%, -450%)',
    letterSpacing: 5,
  },
  img: {
    width: '100%',
    height: '100%',
    maxHeight: '55vh',
  },
};

export default BannerImg;