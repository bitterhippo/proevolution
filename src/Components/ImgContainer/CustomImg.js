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
import Chiro from "../../Images/Chiro.jpg";
import Allstate from "../../Images/Allstate.svg";
import Guardian from "../../Images/Guardian.svg";
import HSBC from "../../Images/HSBC.svg";
import Facility1 from "../../Images/Facility1.jpg";
import Facility2 from "../../Images/Facility2.jpg";
import Facility3 from "../../Images/Facility3.jpg";
import Facility4 from "../../Images/Facility4.jpg";
import Facility5 from "../../Images/Facility5.jpg";
import Facility6 from "../../Images/Facility6.jpg";
import Facility7 from "../../Images/Facility7.jpg";
import Physio1 from "../../Images/Physio1.jpg";
import Thera1 from "../../Images/Thera1.jpg";

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
  Chiro: Chiro,
  Allstate: Allstate,
  Guardian: Guardian,
  HSBC: HSBC,
  Facility1: Facility1,
  Facility2: Facility2,
  Facility3: Facility3,
  Facility4: Facility4,
  Facility5: Facility5,
  Facility6: Facility6,
  Facility7: Facility7,
  Physio1: Physio1,
  Thera1: Thera1
}

const CustomImg = ({ height, width, image }) => {

  return (
    <img
      src={imgConnector[image]}
      style={{ ...styles.imgWrapper, height: height, width: width }}>
    </img>
  )
};

const styles = {
  imgWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    objectFit: 'cover',
  }
};

export default CustomImg;