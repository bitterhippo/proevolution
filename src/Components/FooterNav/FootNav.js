import React from 'react';

const FooterNav = () => {

  const footNavLinks = [ {name: 'About', Links: ['Our Story', 'Our Staff', 'Our Facilities', 'Our Providers', 'Our Locations', 'FAQS']}]



  return (
    <div style={styles.footerNavWrapper}>
      {
        footNavLinks.map(currentFootNavLink => <div
        key={currentFootNavLink.name}
        >
          {currentFootNavLink.name}
          </div>)
      }
    </div>
  )
};

const styles = {
  footerNavWrapper : {
    backgroundColor: 'green',
    width: '15vh',
    position: 'absolute',
    bottom: '0%',
  },
  footerNavList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },
  footerNavItem: {
    color: 'white',
  }
}
export default FooterNav;