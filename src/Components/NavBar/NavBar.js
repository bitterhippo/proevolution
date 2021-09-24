import React from 'react';

const NavBar = () => {

  const navHeaders = ['Health Concerns', 'Services', 'Treatments', 'About'];


  return (
    <div style={styles.navBarWrapper}>
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
    </div>
  )
};

const styles = {
  navBarWrapper : {
    backgroundColor: 'green',
    height: '5vh'
  },
  navLinks: {
    width: "50%",
    display: "flex",
    flexDirection: "inline-flex",
    justifyContent: 'space-between',
    height: '100%',
    marginLeft: '25%',
  },
  navBarItem: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
}

export default NavBar;
