import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomImg from '../ImgContainer/CustomImg';
import Colors from '../../Components/Colors';


const NavBar = () => {

  const navHeaders = ['Services', 'FAQ', 'About'];
  const [selectedNavHeader, setNavHeader] = useState('');

  const currentPath = window.location.pathname.substring(1, window.location.pathname.length);

  console.log(currentPath);

  return (
    <div style={styles.navBarWrapper}>
      <div style={{ ...styles.navBarItem, marginLeft: '5vw' }}>
        <Link
          style={styles.navBarItem}
          onClick={() => setNavHeader("")}
          to={"/"}>
          <CustomImg
            height={45}
            width={154}
            image={"Logo"}
          />
        </Link>
      </div>
      <div style={styles.navLinks}>
        {
          navHeaders.map(currentNavHeader => <div
            onClick={() => setNavHeader(currentNavHeader)}
            key={currentNavHeader}
            style={styles.navBarItem}
          >
            <Link
              style={currentNavHeader === currentPath
                ? styles.selectedNavBarItem
                : styles.navBarItem}
              to={currentNavHeader}>{currentNavHeader}
            </Link>
          </div>)
        }
      </div>
      <button style={styles.navBarButton}>
        <Link
        style={styles.styledNav}
        to={'appointment'}
        onClick={() => setNavHeader("")}
        >
          Book Appointment
        </Link>
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
    width: "30%",
    display: "flex",
    flexDirection: "inline-flex",
    height: '100%',
    marginLeft: '15vw',
    marginRight: '10vw',
    gap: '5vw',
  },
  selectedNavBarItem: {
    color: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
    textDecoration: 'none',
    borderBottom: '3px solid white',
  },
  navBarItem: {
    color: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
    textDecoration: 'none'
  },
  navBarButton: {
    fontSize: '1em',
    border: '2px solid white',
    backgroundColor: '#206620',
    margin: 'auto 0 auto 10vw',
    padding: '6px 22px',
    color: 'white',
    borderRadius: 5,
  },
  styledNav: {
    textDecoration: 'none',
    color: 'white'
  }
}

export default NavBar;
