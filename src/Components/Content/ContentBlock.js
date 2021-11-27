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
          height={400}
          width={400}
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
    fontSize: '4.5vh',
    fontWeight: 'bold'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    flex: 9
  },
  secondaryContent: {
    minWidth: '30%',
    minHeight: 300,
    backgroundColor: 'gray',
  },
  buttonWrapper: {
    marginTop: 25,
    textAlign: 'center',
    flex: 1
  },
  styledButton: {
    backgroundColor: '#206620',
    color: 'white',
    paddingLeft: 25,
    paddingRight: 25,
    height: '4vh',
    width: '12vw',
    fontSize: '1.2vw',
    borderRadius: 5,
    marginRight: '7vw'
  },
  clipPathItem1: {
    marginTop: "-100px",
    opacity: 0.3,
    position: 'absolute',
    backgroundColor: 'gray',
    zIndex: -2,
    height: '400px',
    width: '100%',
    clipPath: "polygon(0 41%, 100% 9%, 100% 69%, 0 100%)",
    minHeight: '300px',
  },
  clipPathItem2: {
    marginTop: "-100px",
    position: 'absolute',
    backgroundColor: '#bcf5a6',
    zIndex: -1,
    height: '400px',
    width: '100%',
    clipPath: "polygon(0 13%, 100% 37%, 100% 100%, 0 79%)",
    minHeight: '300px',
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