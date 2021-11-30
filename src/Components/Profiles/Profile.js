import React from 'react';
import CustomImg from '../ImgContainer/CustomImg';

const Profile = ({ image, name, link }) => {
  return (
    <div style={styles.profileWrapper}>
      {/* Place holder box for images */}
      <CustomImg 
        height={'20vh'}
        width={'20vh'}
        image={image}
      />
      <div style={styles.text}>
        { name }
      </div>
      <div style={styles.buttonWrapper}>
        <button style={styles.styledButton}>Learn More</button>
      </div>
    </div>
  )
};

const styles = {
  imgHolder: {
    minHeight: 200,
    minWidth: 200,
    backgroundColor: 'gray'
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginTop: 10,
    textAlign: 'center'
  },
  styledButton: {
    backgroundColor: '#206620',
    color: 'white',
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 3,
    fontWeight: 'bold',
  }
};

export default Profile;

