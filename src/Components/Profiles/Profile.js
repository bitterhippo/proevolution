import React from 'react';

const Profile = ({ image, name, link }) => {
  return (
    <div style={styles.profileWrapper}>
      {/* Place holder box for images */}
      <div style={styles.imgHolder}>
      </div>
      <div style={styles.text}>
        { name }
      </div>
    </div>
  )
};

const styles = {
  imgHolder: {
    height: 125,
    weight: 125,
    backgroundColor: 'gray'
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red'
  },
  text: {
    textAlign: 'center'
  }
};

export default Profile;

