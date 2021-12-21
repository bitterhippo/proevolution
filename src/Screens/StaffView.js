import React from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';
import CustomButton from '../Components/CustomButton/CustomButton';

const StaffView = ( props ) => {

  console.log(props.match.params);

  return (
    <div style={styles.screen}>
      <BannerImg
        message={'Some idiots name'}
        img={'blank'}
      />
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