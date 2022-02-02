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
        message={DefaultPractionerData[doctorName]}
        image={"AboutUsBanner"}
        brightness={'dark'}
      />
      <div style={styles.splitScreen}>
        {/* Screen Left */}
        <div style={styles.screenOne}>
          <CustomHeader>
            {DefaultPractionerData[doctorName]}
          </CustomHeader>
          <div>
            <span style={styles.titleText}>Chiropractor</span>
            <div>
              <br></br>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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