import React from 'react';
import Colors from '../../Components/Colors';

const CustomButton = (props) => {

  return (
    <button style={
      {
        ...styles.button,
        padding: props.padding,
        margin: props.margin
      }
    }>
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