import React from 'react';
import CustomImg from '../ImgContainer/CustomImg';

const ContentBlock = ({ header, content, button, background }) => {
  return (
    <div style={styles.contentBlockWrapper}>
      { background && <div style={styles.clipPathItem1 }></div> } 
      { background && <div style={styles.clipPathItem2 }></div> } 
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
    minHeight: 300,
    backgroundColor: 'gray',
  },
  buttonWrapper: {
    marginTop: 25,
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
};

export default ContentBlock;