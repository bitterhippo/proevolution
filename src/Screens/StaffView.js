import React, { useState } from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';
import CustomButton from '../Components/CustomButton/CustomButton';

const StaffView = ( props ) => {

  console.log(props.location.state);

  let { doctorImage, doctorName } = props.location.state

  return (
    <div style={styles.screen}>
      <BannerImg
        message={doctorName}
        image={doctorImage}
      />
      <div>
        {props.location.state.doctorName}
      </div>
      <CustomButton>
        Book An Appointment
      </CustomButton>
    </div>
  )
};

const styles = {
  staffViewWrapper: {
    screen: {
      minHeight: '60vh'
    }
  },
};

export default StaffView;