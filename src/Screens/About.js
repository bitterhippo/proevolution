import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../Components/ImgContainer/BannerImg';
import ProfileList from '../Components/Profiles/ProfileList';
import CustomImg from '../Components/ImgContainer/CustomImg';
import ImgCarousel from '../Components/Carousel/ImgCarousel';
import CustomButton from '../Components/CustomButton/CustomButton';
import CustomHeader from '../Components/CustomText/CustomHeader';

const About = () => {

  let staffList = [
    {
      name: 'Dr. Jeremy Johnson',
      img: 'PractList1'
    },
    {
      name: 'Dr. Vanessa Huges',
      img: 'PractList2'
    },
    {
      name: 'Dr. Mary Jaczek',
      img: 'PractList3'
    },
    {
      name: 'Dr. Lisa Andrews',
      img: 'Home1'
    }
  ];

  const defaultContent = [
    <>
      <span style={styles.boldText}>An Informed Examination: </span>This will take place on your first visit, so that we can make or confirm a diagnosis, and udnerstand the state and stage of your injury. We'll check your medical history, find out about your level of physical activity and any relevant lifestyle factors.
    </>,
    <>
      <span style={styles.boldText}>A Professional Diagnosis: </span>We'll diagnose the source of your injury, and establish whether it has caused any knock-on effects within your body. Your physical therapist will also help you understand your condition.
    </>,
    <>
      <span style={styles.boldText}>A Unique Treatman Plan: </span>We've learned in our practice that no two patients are exactly alike, which is why your unique history, condition and hgoals will be reflected in the personalized treatment plan we plut together for you. This plan includes: skilled "hands on" treatments such as soft tissue-mobilization, acrupressure and manipulation, laser, ultrasound, electrical currents, acupuncture, and heat or ice to relieve, individuality, prescribed exercise programs.
    </>,
    <>
      <span style={{ ...styles.boldText, marginBottom: '0px' }}>Home Improvement Assignements: </span>As part of your treatment plan, we are also likely to assign you home exercises to help you heal faster, strengthen your system and achieve your goals.
    </>
  ]

  return (
    <div>
      <BannerImg
        image={'AboutUsBanner'}
        message="About us"
      />
      <div style={styles.splitView}>
        {/* First Screen */}
        <div style={styles.screen}>
          <div style={{ marginBottom: 30 }}>
            <CustomHeader>Our Process</CustomHeader>
          </div>
          {
            defaultContent.map((currentItem, i) => {
              return <div
                style={styles.content}
                key={i}
              >
                {currentItem}
              </div>
            })
          }
          <CustomButton
            margin="40px 0 0 0"
            padding="0.5rem 3rem 0.5rem 3rem">
            <Link
            to={'Appointment'}
            style={styles.styledLink}
            >
            Book an Initial Assessment
            </Link>
          </CustomButton>
        </div>
        {/* Second Screen */}
        <div style={styles.imgHolder}>
          <CustomImg
            height={300}
            width={300}
            image={'Massage'}
          />
        </div>
      </div>
      <div style={styles.contentSpacer}>
        <CustomHeader>Our Staff</CustomHeader>
      </div>
      <div style={styles.practionerWrapper}>
        <ProfileList listData={staffList} />
      </div>
      <div style={styles.contentSpacer}>
        <CustomHeader>Our Facility</CustomHeader>
      </div>
      <ImgCarousel />
    </div>
  )
};

const styles = {
  staffList: {
    marginTop: '20vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'inline-row',
  },
  staffListButton: {
    backgroundColor: '#206620',
    color: 'white',
  },
  boldText: {
    fontWeight: "bold",
  },
  splitView: {
    display: 'flex',
    flexDirection: 'inline-row',
    marginTop: '40px',
    gap: '20px',
    margin: '0 10vw 0 10vw'
  },
  screen: {
    flex: 3,
    marginTop: '30px',
  },
  imgHolder: {
    marginTop: '100px',
    marginLeft: 40,
  },
  staffContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  practionerWrapper: {
    marginTop: 100,
    marginLeft: '10vw',
    marginRight: '10vw'
  },
  content: {
    fontSize: '1rem',
    marginBottom: '10px',
    marginRight: '7vw'
  }, 
  contentSpacer: {
    margin: "15vh 10vw 0 10vw"
  },
  styledLink: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default About;
