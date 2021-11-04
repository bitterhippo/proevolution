import React, { useState } from 'react';

const DropDownButton = ({ title, content }) => {

  const [drawer, toggleDrawer] = useState(false);

  return (
    <div style={drawer
      ? styles.dropDownWrapper
      : styles.dropDownWrapperOpen}>
      <div
        style={{
          ...styles.dropDownContainer,
          backgroundColor: drawer === true ? '#D3D3D3' : 'white'
        }}
        onClick={() => toggleDrawer(!drawer)}
      >
        {title} An Arrow
      </div>
      {drawer && <div style={styles.hiddenContent}>{content}</div>}
    </div>
  )
};

const styles = {
  dropDownContainer: {
    border: '1px solid black',
    borderRadius: 5,
    height: 20
  },
  dropDownWrapper: {
    width: '100%'
  },
  dropDownWrapperOpen: {
    width: '100%',
    border: '1px solid black',
    backgroundColor: 'red'
  }
};

export default DropDownButton;