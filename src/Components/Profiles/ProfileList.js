import React from 'react';
import Profile from './Profile';

const ProfileList = ({ listData }) => {
  return (
    <div style={styles.mainWrapper}>
      {
        listData.map(currentItem => <Profile 
          name={currentItem.name}
        />)
      }
    </div>
  )
};

const styles = {
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    marginTop: 25,
  }
};

export default ProfileList;