import React from 'react';

const FootnoteLink = (link, props) => {

  console.log(props);

  return (
      <src style={style.FootnoteText}>
        {props.children}
      </src>
  )
};

const styles = {
  FootnoteText: {
    color: 'red',
    fontSize: 8
  }
};

export default FootnoteLink;