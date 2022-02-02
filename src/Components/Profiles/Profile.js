import React from 'react';
import CustomImg from '../ImgContainer/CustomImg';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';
import DefaultPractionerData from '../DefaultPractionerData';

const Profile = ({ image, name, link }) => {

  return (
    <div style={styles.profileWrapper}>
      <CustomImg
        height={'14vw'}
        width={'14vw'}
        image={image}
      />
      <div style={styles.text}>
        {DefaultPractionerData[name].title}
      </div>
      <div style={styles.buttonWrapper}>
        <CustomButton
          padding="0.2vw 1.5vw 0.2vw 1.5vw">
          <Link
            to={{
              pathname: 'StaffView',
              state: {
                doctorImage: image,
                doctorName: name
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
    fontSize: '1.5vw',
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
    textDecoration: 'none',
    fontSize: '1vw'
  }
};

export default Profile;

