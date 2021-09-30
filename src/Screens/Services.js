import React, { useState } from 'react';

const Services = () => {

  const [selectedService, setSelectedService] = useState('');
  const [selectedTab, setSelectedTab] = useState('');

  const buttonValues = [
    'Chiropractic',
    'Physiotherapy',
    'Therapuetic Ultrasound',
    'Functional Rehab',
    'Nutritional Consulting',
  ]

  return (
    <div>
      <div style={styles.whiteSpace}>
        <span style={styles.styledText}>Services - {selectedService}</span>
        <div style={styles.currentServiceWrapper}>
          <div style={{color: 'black', size: '22'}}>
            {
              selectedService
            }
          </div>
          <button>Book Appointment</button>
        </div>
      </div>
      <div styles={style.mainContent}>
        <div style={styles.buttonList}>
            {
              buttonValues.map(currentValue => <button
              style={styles.styledButton}
              >
                {currentValue}
              </button>)
            }
        </div>
      </div>
    </div>
  )
};

const styles = {
  whiteSpace: {
    height: '20%',
    opacity: 0.1,
    backgroundColor: '#206620',
    marginLeft: '30%'
  },
  styledText: {
    color: 'green',
    textDecoration: 'underline',
  },
  styledButton: {
    backgroundColor: '#206620',
    color: 'white',
    borderRaidus: 5,
    paddingLeft: 10,
    paddingRight: 10
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