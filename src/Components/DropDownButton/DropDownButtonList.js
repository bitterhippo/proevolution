import React from 'react';
import DropDownButton from './DropDownButton';

const DropDownButtonList = ({ listData }) => {
  return (
    <div style={styles.dropDownListContainer}>
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
    flexDirection: 'row',
    gap: 15
  }
};

export default DropDownButtonList;