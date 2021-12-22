import React from 'react';

2

const Mailto = ({ email, subject, body, children }) => {
  return (
    <a 
    style={styles.customLink}
    href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};

const styles = {
  customLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 14
  }
};

export default Mailto;