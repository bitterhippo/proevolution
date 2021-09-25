import React from 'react';

const ContentBlock = () => {
  return (
    <div style={styles.contentBlockWrapper}>
      <div>
        One piece of content
      </div>
      <div>
        One piece of content
      </div>
    </div>
  )
};

const styles = {
  contentBlockWrapper: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-evenly'
  },
};

export default ContentBlock;