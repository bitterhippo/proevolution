import React from 'react';
import { ProgressPlugin } from 'webpack';
import Colors from '../../Components/Colors';

const CustomButton = ({ buttonName, padding, margin, props }) => {
  return (
    <button style={styles.button}>
      {props.children}
    </button>
  )
};

const styles = {
  button: {
    backgroundColor: Colors.Primary,
    color: 'white',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
  }
};

export default CustomButton;