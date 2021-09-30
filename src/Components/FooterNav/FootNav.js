import React from 'react';


const FooterNav = () => {


  const footNavLinks = [
    {
      name: 'About', Links: [
        `Services`,
        `FAQ`,
        `About`
      ]
    },
    {
      name: 'Operating Hours', Links: [
        `Mon:     7 AM - 5 PM`,
        'Tues: 7 AM - 5 PM',
        'Weds: 7 AM - 5 PM',
        'Thurs: 7 AM - 5 PM',
        'Fri: 7 AM - 5 PM',
        'Sat: 7 AM - 5 PM',
        `Sunday:     Closed`,
      ]
    },
    {
      name: 'Contact', Links: [
        'Pro Evolution Wellness',
        '3905 Major Mackenzie Drive',
        'West, Unit 116',
        'Vaughan, Ontario',
        'L4H 4J9',
        <button style={styles.footButton}>Get Directions</button>
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
            currentFootNavLink.Links.map(currentLink => <div
              key={currentLink}
              style={styles.footerNavItem}
            >
              <span style={styles.footerText}>{currentLink}</span>
            </div>)
          }
        </div>)
      }
      <div style={styles.footerNavList}>
        <span style={styles.footerText}>905-303-0337</span>
        <br></br>
        <span>info@proevolutionwellness.ca</span>
        <br></br>
        <span style={styles.footerText}>3905 Major Mackenzie Drive</span>
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
    paddingTop: 20,
    paddingBottom: 20
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
    backgroundColor: '#206620'
  }
};

export default FooterNav;