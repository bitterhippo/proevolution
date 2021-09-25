import React from 'react';

const ContentBlock = () => {
  return (
    <div style={styles.contentBlockWrapper}>
      <div>
        <h2 style={styles.bannerText}>Some Text</h2>
        <div style={styles.mainContent}>
          Some other text Some other text Some other text Some other text Some other text Some other text Some other text Some other text
        </div>
      </div>
      <div style={styles.secondaryContent}>
        One piece of content
      </div>
    </div>
  )
};

const styles = {
  contentBlockWrapper: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-evenly',
    marginLeft: 20,
    marginRight: 20
  },
  bannerText: {
    textAlign: 'center'
  },
  mainContent: {
    width: '70%',
    textAlign: 'center',
  },
  secondaryContent: {
    width: '30%'
  }
};

export default ContentBlock;