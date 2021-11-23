import React from 'react';
//IMG FILES
import Logo from '../../Images/Logo.svg';
import Allstate from '../../Images/Allstate.jpg';
import Chiro from '../../Images/Chiro.jpg';

const CustomSVG = () => {

  const imgConnections = {
    Logo: Logo,
    Allstate: Allstate,
    Chiro: Chiro
  }

  return (
    <img
      style={styles.CustomSVGWrapper}
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