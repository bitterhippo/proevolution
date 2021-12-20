import React from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';
import CustomButton from '../Components/CustomButton/CustomButton';

const StaffView = ({ data }) => {
  return (
    <div>
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

  },
};

export default StaffView;