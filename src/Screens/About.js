import React from 'react';
import ContentBlock from '../Components/Content/ContentBlock';
import BannerImg from '../Components/ImgContainer/BannerImg';

const About = () => {

  let staffList = [
    {
      name: 'Jeremy Johnson',
      image: 'none'
    },
    {
      name: 'Vanessa Huges',
      image: 'none'
    },
    {
      name: 'Simba Woop',
      image: 'none'
    },
    {
      name: 'Quincy Jones',
      image: 'none'
    }
  ]

  return (
    <div>
      <BannerImg
        image={'CeaserTeam'}
        message="About us"
      />
      <div>
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
      <button style={styles.button}>Book an Appointment</button>
      <div style={StyleSheet.staffList}>
        {
          staffList.map(currentMember => <div>
            {currentMember.name}
            <button style={StyleSheet.staffListButton}></button>
          </div>)
        }
      </div>
      <div>
        A carousel should go here.
      </div>
    </div>
  )
};

const styles = {
  aboutScreenWrapepr: {

  },
  staffList: {
    display: 'flex',
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
    backgroundColor: 'green',
    color: 'white',
  }
}

export default About;
