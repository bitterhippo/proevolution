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
        <CustomButton
          margin="5vh 0 0 0"
          padding="5px 90px"
        >
          <Link
            style={styles.styledLink}
            to={'/'}
          >Continue
          </Link>
        </CustomButton>
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
  styledLink: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default Appointment;
