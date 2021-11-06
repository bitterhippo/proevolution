import React, { useState } from 'react';

const DropDownButton = ({ title, content }) => {

  const [drawer, toggleDrawer] = useState(false);

  return (
    <div style={styles.dropDownWrapper}>
      <div
        style={styles.dropDownTitle}
        onClick = {() => toggleDrawer(!drawer)}
      >
        <div style={styles.titleText}>{title} An Arrow</div>
      </div>
      {drawer && <div style={styles.hiddenContent}>{content}</div>}
    </div>
  )
};

const styles = {
  dropDownWrapper: {
    border: '1px solid black',
    borderRadius: 5,
  },
  dropDownTitle: {
    borderBottom: '1px solid black'
  }
};

export default DropDownButton;