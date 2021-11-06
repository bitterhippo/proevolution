import React, { useState } from 'react';

const DropDownButton = ({ title, content }) => {

  const [drawer, toggleDrawer] = useState(false);

  return (
    <div style={drawer
      ? styles.dropDownWrapper
      : styles.dropDownWrapperOpen}>
      <div
        style={ drawer 
          ? {...styles.dropDownContainer, backgroundColor: 'gray'}
          : {...styles.dropDownWrapperOpen, backgroundColor: 'white'}
      }
        onClick={() => toggleDrawer(!drawer)}
      >
        <div style={styles.titleText}>{title} An Arrow</div>
      </div>
      {drawer && <div style={styles.hiddenContent}>{content}</div>}
    </div>
  )
};

const styles = {
  dropDownContainer: {
    border: '1px solid black',
    borderRadius: 5,
    height: 20,
    padingTop: 10,
    paddingBottom: 10,
  },
  dropDownWrapper: {
    width: '100%'
  },
  dropDownWrapperOpen: {
    border: '1px solid black',
    borderRadius: 5,
    height: 20,
    padingTop: 10,
    paddingBottom: 10,
  },
  titleText: {
    marginLeft: 30,
    marginTop: 5
  }
};

export default DropDownButton;