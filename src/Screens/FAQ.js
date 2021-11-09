import React from 'react';

//Components
import DropDownButtonList from '../Components/DropDownButton/DropDownButtonList';

const FAQ = () => {

  const questions = [
    {
      title: 'test', content: 'is this really capable of handling content that goes on for more than a single line?! I mean that im not sure if this will actuall be able to handle multiline content without formatting it in a really strange way.'
    },
    {
      title: 'test1', content: 'test'
    },
  ];




  return (
    <div style={styles.contentWrapper}>
      <div style={styles.primaryContent}>
        <input
          style={styles.input}
          placeholder="Search Frequently Asked Questions"></input>
        <div style={styles.faqHeader}>
          Frequently Asked Questions
        </div>
        <DropDownButtonList 
          listData={questions}
        />
      </div>
    </div>
  )
};

const styles = {
  contentWrapper: {
    height: '80vh'
  },
  primaryContent: {
    width: '65%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
  },
  input: {
    borderRadius: '10px',
    border: '2px solid green',
    width: '100%',
    height: '30px',
    boxShadow: '0 5px 10px rgb(0 0 0 / 0.2)'
  },
  faqHeader: {
    marginTop: '10%',
    fontSize: 28,
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginBottom: 20
  },
};

export default FAQ;