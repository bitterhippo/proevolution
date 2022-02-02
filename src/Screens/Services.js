import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../Components/ImgContainer/BannerImg';
import DummyData from '../Components/DummyData';
import ProfileList from '../Components/Profiles/ProfileList';
import Colors from '../Components/Colors';
import CustomButton from '../Components/CustomButton/CustomButton';


const Services = () => {

  const [selectedService, setSelectedService] = useState('Chiropractic');
  const [selectedTab, setSelectedTab] = useState('How it works');

  const buttonValues = [
    'Chiropractic',
    'Physiotherapy',
    'Therapeutic Ultrasound',
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
        image={'SB'}
        message={'Services'}
        brightness={'dark'}
      />
      {/*  White Space Screen with selectors  */}
      <div style={styles.whiteSpace}>
        <div style={styles.whiteSpaceSpacer}>
        </div>
        <div style={styles.whiteSpaceContent}>
          <div style={styles.currentServiceWrapper1}>
            <div>
              <span style={styles.fancyText}>Services</span> {">"} <span style={styles.fancyText}>{selectedService}</span>
            </div>
          </div>
          <div style={{ ...styles.currentServiceWrapper, justifyContent: 'space-between' }}>
            <div style={styles.accentuatedText}>
              {selectedService}
            </div>
            <CustomButton
              margin="0 10vw 0 0"
              padding="5px 40px"
            >
              <Link
                style={styles.styledLink}
                to={'Appointment'}
              >
                Book Appointment
              </Link>
            </CustomButton>
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
    padding: '8px 40px',
    fontWeight: 'bold',
    fontSize: 16,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))'
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
    marginLeft: '5vw',
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
    padding: '15px 15px 0px 15px',
    fontSize: 20,
    backgroundColor: 'white'
  },
  tabTextUnselected: {
    fontWeight: 'bold',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: '15px 15px 0px 15px',
    fontSize: 20,
  },
  mainContentSplit: {
    display: 'flex',
    flexDirection: 'inline-flex',
    marginTop: 20,
    marginBottom: '15vh',
    gap: '5vw',
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5vw',
    gap: 10,
    maxWidth: 280
  },
  practionersWrapper: {
    margin: '0 15vw 0 15vw'
  },
  practionerText: {
    fontSize: "1.6vw",
    maxFontSize: '32px',
    fontWeight: "bold",
    color: Colors.Primary
  },
  serviceDataWrapper: {
    width: '60%'
  },
  defaultDataWrapper: {
    minHeight: '28vw'
  },
  styledLink: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default Services;