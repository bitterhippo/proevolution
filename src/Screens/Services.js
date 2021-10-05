import React, { useState } from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';

const Services = () => {

  const [selectedService, setSelectedService] = useState('Test');
  const [selectedTab, setSelectedTab] = useState('How it works');

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
      {/*  White Space Screen with selectors  */}
      <div style={styles.whiteSpace}>
        <div style={styles.whiteSpaceContent}>
          <div style={styles.currentServiceWrapper}>
            <div>
              <span style={styles.fancyText}>Services</span> > <span style={styles.fancyText}>{selectedService}</span>
            </div>
          </div>
          <div style={{ ...styles.currentServiceWrapper, justifyContent: 'space-between' }}>
            <div style={styles.accentuatedText}>
              {selectedService}
            </div>
            <button style={styles.styledButton}>Book Appointment</button>
          </div>
          <div style={styles.tabSelectors}>
            {
              tabs.map(tab => <div
                style={selectedTab === tab ? styles.tabText : styles.tabTextUnselected}
                key={tab}
                onClick={() => setSelectedTab(tab)}
              >{tab}</div>)
            }
          </div>
        </div>
      </div>
      {/*  Secondary Screen  */}
      <div style={styles.mainContentSplit}>
        <div style={styles.buttonList}>
            {
              buttonValues.map(currentButton => <button
              key={currentButton}
              style={styles.styledButton}
              >{currentButton}</button>)
            }
        </div>
        <div>

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
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  currentServiceWrapper: {
    display: 'flex',
    flexDirection: 'inline-row',
    marginTop: 10,
    width: '70%',
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
  },
  tabTextUnselected: {
    fontWeight: 'bold',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 16,
  },
  mainContentSplit: {
    display: 'flex',
    flexDirection: 'inline-flex',
    marginTop: 20,
    marginBottom: 20
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 50,
    gap: 5
  }
};

export default Services;