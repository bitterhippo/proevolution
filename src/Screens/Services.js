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
  ];

  const tabs = [
    'How it works',
    'How it helps',
    'What it treats',
  ];

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
              <span style={styles.fancyText}>Services</span> > <span style={styles.fancyText}>{selectedService}</span>
            </div>
          </div>
          <div style={{...styles.currentServiceWrapper, justifyContent: 'space-between'}}>
            <div style={styles.accentuatedText}>
              { selectedService }
            </div>
            <button style={styles.styledButton}>Book Appointment</button>
          </div>
          <div style={styles.tabSelectors}>
            {
              tabs.map(tab => <div
                style={styles.tabText}
              >{tab}</div>)
            }
          </div>
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
    marginTop: 10,
    width: '70%',
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
  },
  accentuatedText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  tabSelectors: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'inline',
    gap: 20
  },
  tabText: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 16,
    backgroundColor: 'white'
  }
};

export default Services;