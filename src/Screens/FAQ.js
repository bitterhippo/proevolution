import React from 'react';

//Components
import DropDownButtonList from '../Components/DropDownButton/DropDownButtonList';

const FAQ = () => {
  return (
    <div style={styles.contentWrapper}>
      <div style={styles.primaryContent}> 
      <input 
      style={styles.input}
      placeholder="Frequently Asked Questions"></input>
      </div>
    </div>
  )
};

const styles = {
  contentWrapper: {
    height: '80vh'
  },
  primaryContent: {
    backgroundColor: 'red',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    borderRadius: '10px',
    border: '2px solid green',
    width: '300px',
    height: '30px'
  }
};

export default FAQ;