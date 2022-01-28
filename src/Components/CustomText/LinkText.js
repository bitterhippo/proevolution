import React from 'react';

const LinkText = (props) => {
  return (
    <span>
      <a style={styles.linkText} href={props.url}>{props.children}</a>
    </span>
  )
};

const styles = {
  linkText: {
    textDecoration: 'none',
    underline: 'none'
  }
};

export default LinkText;