import React from 'react';
import CustomImg from '../ImgContainer/CustomImg';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';

const Profile = ({ image, name, link }) => {
  return (
    <div style={styles.profileWrapper}>
      {/* Place holder box for images */}
      <CustomImg
        height={'14vw'}
        width={'14vw'}
        image={image}
      />
      <div style={styles.text}>
        {name}
      </div>
      <div style={styles.buttonWrapper}>
        <CustomButton
          padding="0.5rem 1.5rem 0.5rem 1.5rem">
          <Link
            to={{
              pathname: 'StaffView',
              state: {
                doctorName: name,
                doctorImage: image
              }
          }}
            style={styles.styledLink}
          >
            Learn More
          </Link>
        </CustomButton>
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
    fontSize: '1rem',
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10
  },
  buttonWrapper: {
    marginTop: 10,
    textAlign: 'center'
  },
  styledLink: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default Profile;

