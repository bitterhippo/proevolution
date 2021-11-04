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
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20%',
  },
  input: {
    borderRadius: '10px',
    border: '2px solid green',
    width: '300px',
    height: '30px',
    marginLeft: '20%'
  }
};

export default FAQ;