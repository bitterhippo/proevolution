import React from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';

const StaffView = ({ data }) => {
  return (
    <div>
      <BannerImg 
      message={'Some idiots name'}
      img={'blank'}
      />
      <button style={styles.appointmentButton}>Book An Appointment</button>
    </div>
  )
};

const styles = {
  staffViewWrapper: {

  },
  appointmentButton: {
    width: '5vw',
    height: '2vh',
    backgroundColor: 'green',
    color: 'white',
  }
};

export default StaffView;