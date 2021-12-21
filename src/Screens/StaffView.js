import React, { useState } from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';
import CustomButton from '../Components/CustomButton/CustomButton';
import CustomHeader from '../Components/CustomText/CustomHeader';
import Colors from '../Components/Colors';
import ProfileList from '../Components/Profiles/ProfileList';

const StaffView = (props) => {

  console.log(props.location.state);

  let { doctorImage, doctorName } = props.location.state

  return (
    <div>
      <BannerImg
        message={doctorName.split(',')[0]}
        image={doctorImage}
        brightness={'dark'}
      />
      <div style={styles.splitScreen}>
        {/* Screen Left */}
        <div style={styles.screenOne}>
          <CustomHeader>
            {doctorName}
          </CustomHeader>
          <div>
            <span style={styles.titleText}>Chiropractor</span>
            <div>
              text about this person
            </div>
          </div>
          <CustomButton
            padding={'5px 30px 5px 30px'}
          >
            Book An Appointment
          </CustomButton>
        </div>
        {/* Screen Right */}

      </div>
      <CustomButton
        padding={'5px 30px 5px 30px'}
      >
        Book An Appointment
      </CustomButton>
      <div>

      </div>
    </div>
  )
};

const styles = {
  splitScreen: {
    marginTop: '10vh',
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: '0 auto 0 auto'
  },
  screenOne: {
    flex: 2,
  },
  titleText: {
    color: Colors.Primary,
    size: '12px',
    fontWeight: 'bold'
  }
};

export default StaffView;