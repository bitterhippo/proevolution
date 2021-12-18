import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Components/CustomButton/CustomButton';

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
          <Link
          style={styles.styledLink}
          to={'/'}
          >Continue
          </Link>
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
    padding: '5px 90px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
  },
  styledLink: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default Appointment;
