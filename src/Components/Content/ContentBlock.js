import React from 'react';
import CustomImg from '../ImgContainer/CustomImg';
import CustomButton from '../CustomButton/CustomButton';

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
            <CustomButton 
            padding='5px 30px 5px 30px'
            margin='0 7vw 0 0'
            >{button}</CustomButton> : null}
        </div>
      </div>
      <div style={styles.imgContainer}>
        <CustomImg
          height={'35vh'}
          width={'30w'}
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