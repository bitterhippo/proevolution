import React from 'react';
import Colors from '../Colors';

const CustomHeader = (props) => {
  return (
    <span style={styles.headerText}>
      { props.children }
    </span>
  )
};

const styles = {
  headerText: {
    fontSize: "30px",
    fontWeight: "bold",
    color: Colors.Colors.Primary
  }
};

export default CustomHeader;