import React from 'react';
//IMG FILES
import Logo from '../../Images/Logo.svg';
import Allstate from '../../Images/Allstate.svg';
import HSBC from '../../Images/HSBC.svg';
import Guardian from "../../Images/Guardian.svg";


const CustomSVG = ({ height, width }) => {

  const imgConnections = {
    Allstate: Allstate,
    HSBC: HSBC,
    Guardian: Guardian
  }

  return (
    <img
      style={{
        ...styles.CustomSVGWrapper,
        height: height,
        width: width,
      }}
      src={imgConnections[Chiro]}>
    </img>
  )
};

const styles = {
  CustomSVGWrapper: {
    height: 100,
    width: 100,
  }
};

export default CustomSVG;