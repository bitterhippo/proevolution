import React from 'react';

const ContentBlock = ({ header, content, button }) => {
  return (
    <div style={styles.contentBlockWrapper}>
      <div>
        <div style={styles.mainContent}>
          <span style={styles.bannerText}>{header}</span>
          <br></br>
          {content}
          <div style={styles.buttonWrapper}>
            {button !== "" ?
              <button style={styles.styledButton}>{button}</button> : null}
          </div>
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
    marginLeft: 35,
    marginRight: 35,
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
  },
  buttonWrapper: {
    textAlign: 'center',
  },
  styledButton: {
    marginTop: 20,
    backgroundColor: '#206620',
    color: 'white',
    paddingLeft: 25,
    paddingRight: 25,
    height: '3vh',
    borderRadius: 5
  }
};

export default ContentBlock;