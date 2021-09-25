import React from 'react';

const ContentBlock = ({ header, content }) => {
  return (
    <div style={styles.contentBlockWrapper}>
      <div>
        <div style={styles.mainContent}>
          <h2 style={styles.bannerText}>{header}</h2>
          {content}
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
    textAlign: 'center',
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