import React from 'react';
import Profile from './Profile';

const ProfileList = ({ listData }) => {
  return (
    <div style={styles.mainWrapper}>
      {
        listData.map(currentItem => <Profile 
          key={currentItem.name}
          name={currentItem.name}
          image={currentItem.img}
        />)
      }
    </div>
  )
};

const styles = {
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  }
};

export default ProfileList;