import React from 'react';


const FooterNav = () => {


  const footNavLinks = [
    {
      name: 'About', Links: ['Our Story', 'Our Staff', 'Our Facilities', 'Our Providers', 'Our Locations', 'FAQS']
    },
    {
      name: 'Health Concerns', Links: ['Spinal Injuries', 'Knee Injuries', 'Ankle and Foot Injuries', 'Upper Limb Injuries', 'Head and Jaw Pain', 'Post-Surgical']
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
    marginTop: 30,
    bottom: '0%',
  },
  footerNavList: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    color: 'white'
  },
  footerNavItem: {
    color: 'white',
  }
}
export default FooterNav;