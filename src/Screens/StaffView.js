import React, { useState } from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';
import CustomButton from '../Components/CustomButton/CustomButton';
import CustomHeader from '../Components/CustomText/CustomHeader';
import CustomImg from '../Components/ImgContainer/CustomImg';
import Colors from '../Components/Colors';
import ProfileList from '../Components/Profiles/ProfileList';

const StaffView = (props) => {

  let { doctorImage, doctorName } = props.location.state

  const practionerList = [
    {
      name: 'Jeremy Johnson, RMT',
      img: 'PractList1'
    },
    {
      name: 'Vanessa Huges, RMT',
      img: 'PractList2'
    },
    {
      name: 'Lisa Andrews, PT',
      img: 'PractList3'
    }
  ];

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
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>
          </div>
          <CustomButton
            marginTop={'15vh'}
            padding={'5px 30px 5px 30px'}
          >
            Book An Appointment
          </CustomButton>
        </div>
        {/* Screen Right */}
        <CustomImg
          height={'35vh'}
          width={'30w'}
          image={doctorImage}
        />
      </div>
      <div style={styles.practionerList}>
        <CustomHeader> Our Staff </CustomHeader>
        <ProfileList listData={practionerList} />
      </div>
    </div>
  )
};

const styles = {
  splitScreen: {
    marginTop: '1000px',
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
  },
  practionerList: {
    marginTop: '25vh',
    width: '80%',
    margin: '0 auto 0 auto'
  }
};

export default StaffView;