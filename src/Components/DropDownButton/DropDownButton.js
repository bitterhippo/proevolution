import React, { useState } from 'react';

const DropDownButton = ({ title, content }) => {

  const [drawer, toggleDrawer] = useState(false);

  return (
    <div style={!drawer
      ? styles.dropDownWrapper
      : { ...styles.dropDownWrapper, borderBottom: '1px solid black' }
    }>
      <div
        style={drawer ? styles.dropDownTitleOpen : styles.dropDownTitle}
        onClick={() => toggleDrawer(!drawer)}
      >
        <div style={styles.titleText}>
          <div style={{ marginLeft: 30, fontWeight: 'bold'}}>
            {title} {drawer ? "Up Arrow" : "Down Arrow"}
          </div>
        </div>
      </div>
      {drawer &&
        <div style={styles.hiddenContent}>
          <div style={{ marginLeft: 30 }}>
            {content}
            </div>
        </div>}
    </div>
  )
};

const styles = {
  dropDownWrapper: {
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    borderRadius: 5,
  },
  dropDownTitle: {
    borderBottom: '1px solid black',
    borderTop: '1px solid black',
    height: '100%',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5
  },
  dropDownTitleOpen: {
    background: 'rgba(32, 102, 32, 0.2)',
    borderBottom: '1px solid black',
    borderTop: '1px solid black',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: '100%',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5
  },
  spacer: {
    marginLeft: 30
  }
};

export default DropDownButton;