import React, { useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomImg from '../ImgContainer/CustomImg';

const NavBar = () => {

  const navHeaders = ['Services', 'FAQ', 'About'];
  const [selectedNavHeader, setNavHeader] = useState('');

  return (
    <div style={styles.navBarWrapper}>
      <div style={{ ...styles.navBarItem, marginLeft: '5vw' }}>
        <Link 
        style={styles.navBarItem}
        to={"/"}>
          <CustomImg 
            height={125}
            width={125}
            image={"Logo"}
          />
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
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 14,
    textDecoration: 'none',
    borderBottom: '2px solid white',
  },
  navBarItem: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 14,
    textDecoration: 'none'
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
