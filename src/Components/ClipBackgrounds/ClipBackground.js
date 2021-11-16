import React from 'react';

const ClipBackground = (props) => {
  return (
    <div style={styles.clipWrapper}>
      {props.children}
    </div>
  )
};

const styles = {
  clipWrapper: {
  }
}

export default ClipBackground;