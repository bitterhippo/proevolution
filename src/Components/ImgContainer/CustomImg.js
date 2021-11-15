import React from 'react';

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
  TherapueticUltrasound: TherapueticUltrasound
}

const CustomImg = ({ height, width, image }) => {
  return (
    <img 
    src={imgConnector[image]}
    style={{...styles.imgWrapper, height: height, width: width }}>
    </img>
  )
};

const styles = {
  imgWrapper: {
    height: 125,
    width: 125,
    zIndex: 1,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default CustomImg;