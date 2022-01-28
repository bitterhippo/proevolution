import React from 'react';

const FootnoteLink = (props) => {

  console.log(props);

  return (
    <span style={styles.footnoteText}>
      <a href={props.url}>{props.children}</a>
    </span>
  )
};

const styles = {
  footnoteText: {
    color: 'red',
    fontSize: 12,
    verticalAlign: 'top'
  }
};

export default FootnoteLink;