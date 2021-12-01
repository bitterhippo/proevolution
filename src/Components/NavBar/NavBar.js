import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const NavBar = () => {

  const navHeaders = ['Services', 'FAQ', 'About'];
  const [selectedNavHeader, setNavHeader] = useState('');

  return (
    <div style={styles.navBarWrapper}>
      <div style={{ ...styles.navBarItem, marginLeft: '5vw' }}>
        <Link
          style={styles.navBarItem}
          to={"/"}>
        </Link>
      </div>
      <div style={styles.navLinks}>
        {
          navHeaders.map(currentNavHeader => <div
            onMouseEnter={() => setNavHeader(currentNavHeader)}
            onMouseLeave={() => setNavHeader("")}
            key={currentNavHeader}
            style={styles.navBarItem}
          >
            <Link
              style={selectedNavHeader === currentNavHeader
                ? styles.selectedNavBarItem
                : styles.navBarItem}
              to={currentNavHeader}>{currentNavHeader}
            </Link>
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
    height: '6vh',
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
  selectedNavBarItem: {
    color: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
    textDecoration: 'none',
    borderBottom: '2px solid white',
  },
  navBarItem: {
    color: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
    textDecoration: 'none'
  },
  navBarButton: {
    fontSize: '1vw',
    border: '2px solid white',
    backgroundColor: 'green',
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingTop: '6px',
    paddingBottom: '6px',
    paddingLeft: '35px',
    paddingRight: '35px',
    color: 'white',
    borderRadius: 5,
  }
}

export default NavBar;
