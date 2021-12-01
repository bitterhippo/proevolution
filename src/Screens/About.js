import React from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';
import ProfileList from '../Components/Profiles/ProfileList';
import CustomImg from '../Components/ImgContainer/CustomImg';
import ImgCarousel from '../Components/Carousel/ImgCarousel';

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
      name: 'Dr. List Andrews',
      img: 'Home1'
    }
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
            <span style={styles.bigText}>Our Process</span>
          </div>
          <div style={styles.content}>
            <span style={styles.boldText}>An Informed Examination: </span>This will take place on your first visit, so that we can make or confirm a diagnosis, and udnerstand the state and stage of your injury. We'll check your medical history, find out about your level of physical activity and any relevant lifestyle factors.
          </div>
          <div style={styles.content}>
            <span style={styles.boldText}>A Professional Diagnosis: </span>We'll diagnose the source of your injury, and establish whether it has caused any knock-on effects within your body. Your physical therapist will also help you understand your condition.
          </div>
          <div style={styles.content}>
            <span style={styles.boldText}>A Unique Treatman Plan: </span>We've learned in our practice that no two patients are exactly alike, which is why your unique history, condition and hgoals will be reflected in the personalized treatment plan we plut together for you. This plan includes: skilled "hands on" treatments such as soft tissue-mobilization, acrupressure and manipulation, laser, ultrasound, electrical currents, acupuncture, and heat or ice to relieve, individuality, prescribed exercise programs.
          </div>
          <div style={styles.content}>
            <span style={styles.boldText}>Home Improvement Assignements: </span>As part of your treatment plan, we are also likely to assign you home exercises to help you heal faster, strengthen your system and achieve your goals.
          </div>
          <button style={styles.button}>Book an Initial Assessment</button>
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
      <div style={{ marginTop: '10vh', marginLeft: '10vw', marginRight: '15vw' }}>
        <span style={styles.bigText}>Our Staff</span>
      </div>
      <div style={styles.practionerWrapper}>
        <ProfileList listData={staffList} />
      </div>
      <div style={{ marginTop: '10vh', marginLeft: '10vw', marginRight: '15vw' }}>
        <span style={styles.bigText}>Our Facility</span>
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
  bigText: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "green"
  },
  boldText: {
    fontWeight: "bold",
  },
  button: {
    marginTop: 40,
    backgroundColor: '#206620',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '0.5rem 3rem 0.5rem 3rem',
  },
  splitView: {
    display: 'flex',
    flexDirection: 'inline-row',
    marginTop: '40px',
    gap: '20px',
    marginLeft: '10vw',
    marginRight: '10vw'
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
    fontSize: '1rem'
  }
};

export default About;
