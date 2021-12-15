import React, { useState } from 'react';
import { FiChevronsDown } from "react-icons/fi";
import { FiChevronsUp } from "react-icons/fi";


const DropDownButton = ({ title, content }) => {

  const [drawer, toggleDrawer] = useState(false);

  return (
    <div style={!drawer
      ? styles.dropDownWrapper
      : { ...styles.dropDownWrapper, borderBottom: '1px solid #C4C4C4' }
    }>
      <div
        style={drawer ? styles.dropDownTitleOpen : styles.dropDownTitle}
        onClick={() => toggleDrawer(!drawer)}
      >
        <div style={styles.titleText}>
          <div style={styles.dropDownTab}>
            {title} {drawer ? <FiChevronsUp /> : <FiChevronsDown />}
          </div>
        </div>
      </div>
      {drawer &&
        <div style={styles.hiddenContent}>
          <div style={styles.dropDownText}>
            {content}
          </div>
        </div>}
    </div>
  )
};

const styles = {
  dropDownWrapper: {
    borderLeft: '1px solid #C4C4C4',
    borderRight: '1px solid #C4C4C4',
    borderTop: '1px solid #C4C4C4',
    borderBottom: '1px solid #C4C4C4',
    borderRadius: 10,
  },
  dropDownTitle: {
    height: '100%',
    width: '100%',
  },
  dropDownTitleOpen: {
    background: 'rgba(32, 102, 32, 0.2)',
    borderBottom: '1px solid #C4C4C4',
    borderRadius: '10px 10px 0px 0px',
    height: '100%',
    width: '100%',
  },
  spacer: {
    marginLeft: 30
  },
  dropDownTab: {
    marginLeft: 20,
    fontWeight: 'bold',
    padding: '10px 0px'
  },
  dropDownText: {
    marginLeft: 20,
    padding: '10px 0px'
  }
};

export default DropDownButton;