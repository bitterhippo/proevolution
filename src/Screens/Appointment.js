import React from 'react';

const Appointment = () => {
  return (
    <div style={styles.screen}>
      <div style={styles.headerText}>
        You Have Booked An Appointment!
      </div>
      <div style={styles.smallText}>
        Thank you! Please proceed with the rest of the demo
      </div>
      <div>
        <button
          style={styles.button}>
          Continue
        </button>
      </div>
    </div>
  )
};

const styles = {
  screen: {
    minHeight: '50vh',
    textAlign: 'center',
  },
  smallText: {
    marginTop: '5vh',
    fontSize: '14px',
  },
  headerText: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: '15vh'
  },
  button: {
    marginTop: '5vh',
    backgroundColor: '#206620',
    fontSize: '16px',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5,
    padding: '5px 90px'
  }
};

export default Appointment;
