import React from 'react';
import { ProgressPlugin } from 'webpack';

const FootnoteText = (link, props) => {

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

export default FootnoteText;