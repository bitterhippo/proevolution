import React, { useState } from 'react';
import BannerImg from '../Components/ImgContainer/BannerImg';
import DummyData from '../Components/DummyData';
import ProfileList from '../Components/Profiles/ProfileList';


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
      img: 'PractList1'
    },
    {
      name: 'VanessaHuges, RMT',
      img: 'PractList2'
    },
    {
      name: 'Lisa Andrews, PT',
      img: 'PractList3'
    }
  ]

  return (
    <div>
      <BannerImg
        image={'CeaserTeam'}
        message={'Pro Evolution Wellness'}
        brightness={'dark'}
      />
      {/*  White Space Screen with selectors  */}
      <div style={styles.whiteSpace}>
        <div style={styles.whiteSpaceSpacer}>
        </div>
        <div style={styles.whiteSpaceContent}>
          <div style={styles.currentServiceWrapper1}>
            <div>
              <span style={styles.fancyText}>Services</span> > <span style={styles.fancyText}>{selectedService}</span>
            </div>
          </div>
          <div style={{ ...styles.currentServiceWrapper, justifyContent: 'space-between' }}>
            <div style={styles.accentuatedText}>
              {selectedService}
            </div>
            <button style={{ ...styles.styledButton, marginRight: '15vw' }}>Book an Initial Assessment</button>
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
              style={selectedService === currentButton ? { ...styles.styledButton, backgroundColor: '#003400' } : styles.styledButton}
              onClick={() => setSelectedService(currentButton)}
            >{currentButton}</button>)
          }
        </div>
        <div style={styles.serviceDataWrapper}>
          <div style={styles.defaultDataWrapper}>
            {DummyData[selectedService.split(' ').join('')][selectedTab.split(' ').join('')].text}
          </div>
        </div>
      </div>
      <div style={styles.practionersWrapper}>
        <span style={styles.practionerText}>Our Chiropractors :</span>
        <ProfileList listData={practionerList} />
      </div>
    </div>
  )
};

const styles = {
  whiteSpace: {
    marginTop: '-5px',
    display: 'flex',
    flexDirection: 'inline-row',
    minHeight: '16vh',
    backgroundColor: 'rgba(32, 102, 32, 0.2)',
    gap: "5vw"
  },
  whiteSpaceSpacer: {
    minWidth: "15vw",
    marginLeft: 50,
    minWidth: 210
  },
  whiteSpaceContent: {
    marginTop: '5vh',
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
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 8,
    paddingBottom: 8,
    fontWeight: 'bold',
    fontSize: 16
  },
  currentServiceWrapper: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'inline-row',
    marginLeft: '5.5vw',
    gap: 20
  },
  currentServiceWrapper1: {
    display: 'flex',
    flexDirection: 'inline-row',
    marginLeft: '5.5vw',
    gap: 20
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'inline-row',
    gap: 5
  },
  accentuatedText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  tabSelectors: {
    marginTop: '2vh',
    marginLeft: '5.5vw',
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
    marginLeft: '5vw',
    gap: 5,
    maxWidth: 280
  },
  practionersWrapper: {
    marginLeft: '15vw',
    marginRight: '15vw'
  },
  practionerList: {
    display: 'flex',
    gap: '4vw',
    marginTop: 20,
    flexDirection: 'inline-row',
    justifyContent: 'space-between',
  },
  practionerText: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "green"
  },
  serviceDataWrapper: {
    width: '60%'
  },
  defaultDataWrapper: {
    minHeight: '28vw'
  }
};

export default Services;