import React from 'react';

const NavBar = () => {

  const navHeaders = ['Services', 'FAQ', 'About'];


  return (
    <div style={styles.navBarWrapper}>
      <div style={{...styles.navBarItem, marginLeft: '5vw'}}>
        LOGO
      </div>
      <div style={styles.navLinks}>
        {
          navHeaders.map(currentNavHeader => <div
            key={currentNavHeader}
            style={styles.navBarItem}
          >
            {currentNavHeader}
          </div>)
        }
      </div>
      <button style={styles.navBarButton}>
        Book Appointment
      </button>
    </div>
  )
};

const styles = {
  navBarWrapper: {
    backgroundColor: '#206620',
    height: '5vh',
    display: 'flex',
    flexDirection: 'inline-row'
  },
  navLinks: {
    width: "50%",
    display: "flex",
    flexDirection: "inline-flex",
    height: '100%',
    marginLeft: '25%',
    gap: '5vw'
  },
  navBarItem: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 14
  },
  navBarButton: {
    border: '2px solid white',
    backgroundColor: 'green',
    height: '50%',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'white',
    borderRadius: 5
  }
}

export default NavBar;
