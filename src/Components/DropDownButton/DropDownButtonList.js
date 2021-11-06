import React from 'react';
import DropDownButton from './DropDownButton';

const DropDownButtonList = ({ listData }) => {
  return (
    <div style={styles.dropDownListContainer}>
      <span></span>
      {
        listData.map(currentItem => <DropDownButton 
          title={currentItem.title}
          content={currentItem.content}
        />)
      }
    </div>
  )
};

const styles = {
  dropDownListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
};

export default DropDownButtonList;