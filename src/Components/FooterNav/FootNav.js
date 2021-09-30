import React from 'react';


const FooterNav = () => {


  const footNavLinks = [
    {
      name: 'About', Links: ['Our Story', 'Our Staff', 'Our Facilities', 'Our Providers', 'Our Locations', 'FAQS']
    },
    {
      name: 'Operating Hours', Links: [
        `Mon: 7 AM - 5 PM`,
        'Tues: 7 AM - 5 PM',
        'Weds: 7 AM - 5 PM',
        'Thurs: 7 AM - 5 PM',
        'Fri: 7 AM - 5 PM',
        'Sat: 7 AM - 5 PM',
        `Sunday:     Closed`
      ]
    },
    {
      name: 'Services', Links: ['Registered Massage Therapy', 'Accupuncture', 'Orthotics', 'Nutrition']
    },
  ];

  return (
    <div style={styles.footerNavWrapper}>
      {
        footNavLinks.map(currentFootNavLink => <div
          key={currentFootNavLink.name}
          style={styles.footerNavList}
        >
          <span style={{ textDecoration: 'underline' }}>{currentFootNavLink.name}</span>
          {
            currentFootNavLink.Links.map(currentLink => <div
              key={currentLink}
              style={styles.footerNavItem}
            >
              {currentLink}
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
    paddingBottom: 20
  },
  footerNavList: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
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
    fontSize: 14
  }
};

export default FooterNav;