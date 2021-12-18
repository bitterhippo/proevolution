import React from 'react';
import Colors from '../../Components/Colors';

const CustomButton = ({ padding, margin, buttonName }) => {

  console.log(Colors);

  return (
    <button style={{...styles.button, padding: padding, margin: margin}}>
      {buttonName}
    </button>
  )
};

const styles = {
  button: {
    backgroundColor: Colors.Colors.Primary,
    color: 'white',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
  }
};

export default CustomButton;