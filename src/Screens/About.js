import React from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';
import ProfileList from '../Components/Profiles/ProfileList';
import CustomImg from '../Components/ImgContainer/CustomImg';

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
          <div>
            <span style={styles.boldText}>An Informed Examination: </span>This will take place on your first visit, so that we can make or confirm a diagnosis, and udnerstand the state and stage of your injury. We'll check your medical history, find out about your level of physical activity and any relevant lifestyle factors.
          </div>
          <div>
            <span style={styles.boldText}>A Professional Diagnosis: </span>We'll diagnose the source of your injury, and establish whether it has caused any knock-on effects within your body. Your physical therapist will also help you understand your condition.
          </div>
          <div>
            <span style={styles.boldText}>A Unique Treatman Plan: </span>We've learned in our practice that no two patients are exactly alike, which is why your unique history, condition and hgoals will be reflected in the personalized treatment plan we plut together for you. This plan includes: skilled "hands on" treatments such as soft tissue-mobilization, acrupressure and manipulation, laser, ultrasound, electrical currents, acupuncture, and heat or ice to relieve, individuality, prescribed exercise programs.
          </div>
          <div>
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
      <div style={styles.practionerWrapper}>
        <ProfileList listData={staffList} />
      </div>
      <div>
        A carousel should go here.
      </div>
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
    fontSize: "32px",
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
    padding: '5px 20px 5px 20px',
  },
  splitView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'inline-row',
    marginTop: '40px',
    gap: '20px',
    justifyContent: 'center'
  },
  screen: {
    width: '50%',
    marginTop: '30px',
    marginLeft: '20px',
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
    marginTop: 50,
    width: '100%',
  }
};

export default About;
