import React from 'react';
import CustomImg from '../ImgContainer/CustomImg';

const ContentBlock = ({ header, content, button, background, image }) => {
  return (
    <div style={styles.contentBlockWrapper}>
      <div style={styles.buttonAlign}>
        <div style={styles.mainContent}>
          <span style={styles.bannerText}>{header}</span>
          <br></br>
          <div style={styles.content}>
            {content}
          </div>
        </div>
        <div style={styles.buttonWrapper}>
          {button !== "" ?
            <button style={styles.styledButton}>{button}</button> : null}
        </div>
      </div>
      <div style={styles.imgContainer}>
        <CustomImg
          height={'40vh'}
          width={'35w'}
          image={image}
        />
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
    fontSize: '30px',
    fontWeight: 'bold'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  secondaryContent: {
    minWidth: '30%',
    minHeight: 300,
    backgroundColor: 'gray',
  },
  buttonWrapper: {
    marginTop: 40,
    textAlign: 'center',
    flex: 1
  },
  styledButton: {
    backgroundColor: '#206620',
    color: 'white',
    padding: '0 30px 0 30px',
    height: '4vh',
    fontSize: '18px',
    borderRadius: 5,
    marginRight: '7vw',
    fontWeight: 'bold',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
  },
  buttonAlign: {
    display: 'flex',
    flexDirection: 'column',
  },
  imgContainer: {
    marginRight: '3vw'
  },
  content: {
    marginLeft: '3vw'
  }
};

export default ContentBlock;