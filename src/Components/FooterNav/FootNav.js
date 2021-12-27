import React from 'react';
import { Link } from 'react-router-dom';
//Components
import CustomSVG from '../ImgContainer/CustomSVG';
import Mailto from '../CustomText/Mailto';

const FooterNav = () => {


  const footNavLinks = [
    {
      name: '', Links: [
        <CustomSVG
          height={45}
          width={154}
          image={"Logo"}
        />,
        <Link
        to={'Services'}
        style={styles.styledLink}
        >Services
        </Link>,
        <Link
        to={'FAQ'}
        style={styles.styledLink}
        >FAQ
        </Link>,
        <Link
        to={'About'}
        style={styles.styledLink}
        >About
        </Link>
      ]
    },
    {
      name: 'Operating Hours', Links: [
        <div style={{ ...styles.timeItem, marginTop: 5 }}>
          <span>Mon:</span>
          <span>7 AM - 5 PM</span>
        </div>,
        <div style={styles.timeItem}>
          <span>Tue:</span>
          <span>7 AM - 5 PM</span>
        </div>,
        <div style={styles.timeItem}>
          <span>Wed:</span>
          <span>7 AM - 5 PM</span>
        </div>,
        <div style={styles.timeItem}>
          <span>Thur:</span>
          <span>7 AM - 5 PM</span>
        </div>,
        <div style={styles.timeItem}>
          <span>Fri:</span>
          <span>7 AM - 5 PM</span>
        </div>,
        <div style={styles.timeItem}>
          <span>Sat:</span>
          <span>7 AM - 5 PM</span>
        </div>,
        <div style={styles.timeItem}>
          <span>Sun:</span>
          <span>Closed</span>
        </div>
      ]
    },
    {
      name: 'Contact', Links: [
        'Pro Evolution Wellness',
        '3905 Major Mackenzie Drive',
        'West, Unit 116',
        'Vaughan, Ontario',
        'L4H 4J9',
        <button style={styles.footButton}><a>Get Directions</a></button>
      ]
    },
  ];

  return (
    <div style={styles.footerNavWrapper}>
      {
        footNavLinks.map(currentFootNavLink => <div
          key={currentFootNavLink.name}
          style={styles.footerNavList}
        >
          <span style={{ fontWeight: 'bold' }}>{currentFootNavLink.name}</span>
          {
            currentFootNavLink.Links.map((currentLink, index) => <div
              key={index}
              style={styles.footerNavItem}
            >
              <span style={styles.footerText}>{currentLink}</span>
            </div>)
          }
        </div>)
      }
      <div style={styles.footerNavList}>
        <br></br>
        <Mailto style={styles.customLink}>email: info@proevolutionwellness.ca</Mailto>
        <span style={styles.footerText}>phone: 905-303-0337</span>
        <span style={styles.footerText}>West, Unit 116</span>
        <span style={styles.footerText}>Vaughan, ON L4H 4J9</span>
      </div>
    </div>
  )
};

const styles = {
  footerNavWrapper: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: '#206620',
    position: 'relative',
    bottom: '0',
    paddingTop: 40,
    paddingBottom: 40,
    marginTop: '12vh'
  },
  footerNavList: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    color: 'white'
  },
  footerNavItem: {
    color: 'white',
  },
  contactInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerText: {
    fontSize: 12
  },
  footButton: {
    marginTop: 10,
    borderRadius: 5,
    border: '2px solid white',
    color: 'white',
    backgroundColor: '#206620',
    fontSize: 12,
    padding: ''
  },
  timeItem: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  styledLink: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'arrow'
  }
};

export default FooterNav;