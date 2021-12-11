import React from 'react';

const Apppointment = () => {
  return (
    <div>
      You Have Booked An Appointment!

      Thank you! Please proceed with the rest of the demo
      <button 
      style={styles.button}>
        Continue
      </button>
    </div>
  )
};

const style = {
  button: {
    backgroundColor: 'green',
    fontSize: '16px',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5
  }
};

export default Apppointment;
