import React from 'react';
import { Link } from 'react-router-dom';

//Subcomponents
import BannerImg from '../Components/ImgContainer/BannerImg';
import CustomButton from '../Components/CustomButton/CustomButton';
import CustomHeader from '../Components/CustomText/CustomHeader';
import CustomImg from '../Components/ImgContainer/CustomImg';
import Colors from '../Components/Colors';
import ProfileList from '../Components/Profiles/ProfileList';
import DefaultPractionerData from '../Components/DefaultPractionerData';

const StaffView = (props) => {

  let { doctorImage, doctorName } = props.location.state

  const practionerList = [
    {
      name: 'Jeremy',
      img: 'PractList1'
    },
    {
      name: 'Vanessa',
      img: 'PractList2'
    },
    {
      name: 'Lisa',
      img: 'PractList3'
    }
  ];

  return (
    <div>
      <BannerImg
        message={DefaultPractionerData[doctorName].title}
        image={"AboutUsBanner"}
        brightness={'dark'}
      />
      <div style={styles.splitScreen}>
        {/* Screen Left */}
        <div style={styles.screenOne}>
          <CustomHeader>
            {DefaultPractionerData[doctorName].title}
          </CustomHeader>
          <div>
            <span style={styles.titleText}>Chiropractor</span>
            <div>
              {
                DefaultPractionerData[doctorName].content
              }
            </div>
          </div>
          <CustomButton
            margin={'5vh 0 0 0'}
            padding={'5px 30px 5px 30px'}
          >
            <Link
              style={styles.styledLink}
              to={'Appointment'}
            >
              Book Appointment
            </Link>
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
        <span style={styles.practionerText}>Our Staff</span>
        <ProfileList listData={practionerList} />
      </div>
    </div>
  )
};

const styles = {
  splitScreen: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10vh 15vw 10vw 15vw',
    gap: '5vw'
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
    width: '70%',
    margin: '0 auto 0 auto'
  },
  practionerText: {
    fontSize: "1.6vw",
    maxFontSize: '32px',
    fontWeight: "bold",
    color: Colors.Primary
  },
  styledLink: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default StaffView;