import React, { useState } from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';

const Services = () => {

  const [selectedService, setSelectedService] = useState('Test');
  const [selectedTab, setSelectedTab] = useState('Test');

  const buttonValues = [
    'Chiropractic',
    'Physiotherapy',
    'Therapuetic Ultrasound',
    'Functional Rehab',
    'Nutritional Consulting',
  ]

  return (
    <div>
      <BannerImg
        image={'CeaserTeam'}
        message={'Pro Evolution Wellness'}
      />
      <div style={styles.whiteSpace}>
        <div style={styles.whiteSpaceContent}>
          <div style={styles.currentServiceWrapper}>
            <div>
              {selectedService}
            </div>
          </div>
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  )
};

const styles = {
  whiteSpace: {
    minHeight: '12vh',
    backgroundColor: 'gray',
  },
  whiteSpaceContent: {
    marginLeft: '35%',
    paddingTop: 25
  },
  fancyText: {
    color: 'green',
    textDecoration: 'underline',
  },
  styledButton: {
    backgroundColor: '#206620',
    color: 'white',
    borderRaidus: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  currentServiceWrapper: {
    display: 'flex',
    flexDirection: 'inline-row',
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'inline-row',
    marginLeft: 20
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'inline-row',
    gap: 5
  }
};

export default Services;