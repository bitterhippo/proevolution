import React, { useState } from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';
import DummyData from '../Components/DummyData';


const Services = () => {

  const [selectedService, setSelectedService] = useState('Chiropractic');
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

  const practionerList = [
    {
      name: 'Jeremy Johnson, RMT',
      img: ''
    },
    {
      name: 'VanessaHuges, RMT',
      img: ''
    },
    {
      name: 'Lisa Andrews, PT',
      img: ''
    }
  ]

  return (
    <div>
      <BannerImg
        image={'CeaserTeam'}
        message={'Pro Evolution Wellness'}
      />
      {/*  White Space Screen with selectors  */}
      <div style={styles.whiteSpace}>
        <div style={styles.whiteSpaceSpacer}>
        </div>
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
            <button style={styles.styledButton}>Book an Appointment</button>
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
              style={selectedService === currentButton ? {...styles.styledButton, backgroundColor: '#003400'} : styles.styledButton}
              onClick={() => setSelectedService(currentButton)}
            >{currentButton}</button>)
          }
        </div>
        <div style={styles.serviceDataWrapper}>
          <div>
            {DummyData[selectedService.split(' ').join('')][selectedTab.split(' ').join('')].text}
          </div>
        </div>
      </div>
      <div style={styles.practionersWrapper}>
        <span style={styles.practionerText}>Our Chiropractors :</span>
        <div style={styles.practionerList}>
          {
            practionerList.map(currentPractioner => <div>
              <div
                key={currentPractioner}
                style={styles.practionerWrapper}
              >
                <div style={{
                  backgroundColor: 'gray', height: 150,
                  width: 150
                }}></div>
                <div style={styles.practionerText}>
                  {currentPractioner.name}
                </div>
                <div style={{textAlign: 'center', marginTop: 10}}>
                  <button style={styles.styledButton}>Learn More</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
};

const styles = {
  whiteSpace: {
    display: 'flex',
    flexDirection: 'inline-row',
    minHeight: '12vh',
    backgroundColor: 'rgba(32, 102, 32, 0.1)',
    gap: "5vw"
  },
  whiteSpaceSpacer: {
    minWidth: "10vw",
    marginLeft: 50,
    minWidth: 210
  },
  whiteSpaceContent: {
    marginTop: 25,
    width: '100%',
  },
  fancyText: {
    color: 'green',
    textDecoration: 'underline',
    fontWeight: 'bold'
  },
  styledButton: {
    backgroundColor: '#206620',
    color: 'white',
    borderRadius: 5,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
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
    textDecorationThickness: 2,
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
    marginBottom: 20,
    gap: '5vw',
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 50,
    gap: 5,
    maxWidth: 210
  },
  practionersWrapper: {
    maxWidth: '40%',
    marginTop: '10vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10vh'
  },
  practionerList: {
    display: 'flex',
    gap: '4vw',
    marginTop: 20,
    flexDirection: 'inline-row',
    justifyContent: 'space-between',
  },
  practionerText: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    minHeight: 40,
    marginTop: 10
  },
  serviceDataWrapper: {
    width: '60%'
  }
};

export default Services;