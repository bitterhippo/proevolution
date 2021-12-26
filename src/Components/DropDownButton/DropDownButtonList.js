import React from 'react';
import DropDownButton from './DropDownButton';

const DropDownButtonList = ({ listData }) => {
  return (
    <div style={styles.dropDownListContainer}>
      {
        listData.map(currentItem => <DropDownButton 
          key={currentItem.title}
          title={currentItem.title}
          content={currentItem.content}
        />)
      }
    </div>
  )
};

const styles = {
  dropDownListContainer: {
    justifyContent: 'start',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
  }
};

export default DropDownButtonList;