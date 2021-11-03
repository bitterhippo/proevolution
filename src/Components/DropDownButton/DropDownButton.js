import React, { useState } from 'react';

const DropDownButton = ({ title, content }) => {

  const [drawer, toggleDrawer] = useState(false);

  return (
    <div 
    style={{
      ...styles.dropDownContainer, 
     backgroundColor: drawer === true ? 'white' : '#D3D3D3'
    }}
    onClick={() => toggleDrawer(!drawer)}
    >
      { title } An Arrow
    </div>
  )
};

const styles = {
  dropDownContainer: {
    border: '1px solid black',
    width: '100%'
  }
};

export default DropDownButton;