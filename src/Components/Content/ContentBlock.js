import React from 'react';

const ContentBlock = ({ header, content }) => {
  return (
    <div style={styles.contentBlockWrapper}>
      <div>
        <div style={styles.mainContent}>
          <span style={styles.bannerText}>{header}</span>
          <br></br>
          {content}
        </div>
      </div>
      <div style={styles.secondaryContent}>
        Associated Content Image
      </div>
    </div>
  )
};

const styles = {
  contentBlockWrapper: {
    display: 'flex',
    flexDirection: 'inline-row',
    marginLeft: 20,
    marginRight: 20
  },
  bannerText: {
    textAlign: 'center',
    color: "#206620",
    fontSize: '2.5vh',
    fontWeight: 'bold'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  secondaryContent: {
    minWidth: '30%',
    backgroundColor: 'gray'
  }
};

export default ContentBlock;