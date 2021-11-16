import React from 'react';

const ClipBackground = (props) => {
  return (
    <div style={styles.clipWrapper}>
      <div style={styles.clipPathItem1} />
      <div style={styles.clipPathItem2} />
      {props.children}
    </div>
  )
};

const styles = {
  clipWrapper: {
  },
  clipPathItem1: {
    marginTop: "-100px",
    position: 'absolute',
    backgroundColor: '#bcf5a6',
    zIndex: -1,
    height: '400px',
    width: '100%',
    clipPath: "polygon(0 41%, 100% 9%, 100% 69%, 0 100%)",
    minHeight: '300px',
  },
  clipPathItem2: {
    marginTop: "-100px",
    position: 'absolute',
    opacity: 0.3,
    backgroundColor: 'gray',
    zIndex: -2,
    height: '400px',
    width: '100%',
    clipPath: "polygon(0 13%, 100% 37%, 100% 100%, 0 79%)",
    minHeight: '300px',
  }
}

export default ClipBackground;