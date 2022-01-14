import React, { useState } from 'react';

//Components
import DropDownButtonList from '../Components/DropDownButton/DropDownButtonList';
import BannerImg from '../Components/ImgContainer/BannerImg';
import { FiSearch } from "react-icons/fi";

const FAQ = () => {

  const [filterValue, setFilterValue] = useState('');

  console.log(filterValue);

  //Default Data for lists.
  const questions = [
    {
      title: 'Do you Offer Virtual Sessions?',
      content: 'Although virtual sessions are possible for some services, certain kinds of direct rehabilitation will require in-house visits.'
    },
    {
      title: 'As a first-time patient, what should I expect at physiotherapy?',
      content: 'Slight pain and discomfort after the session is very possible for many first time patients. Because of this, it is often advised the patients refrain from any kind of strenious activity following a therapy session.'
    },
    {
      title: 'How often will I have to attend physiotherapy?',
      content: 'Until functionality is restored or pain is fully relived. This is a an assessment made not solely on the wishes of a doctor but also on the needs of the patient. Certain types of prologned treatments will often require longer treatments that injury-related damage.'
    },
    {
      title: 'What will be part of the treatment plan?',
      content: 'Treatment plans are custom tailored to each patient based specifically on what limitations they possess or on their needs. Treatment plans must be agreed on by the patient and approved by a doctor before effective rehabilition can begin.'
    },
    {
      title: 'Will my treatment be coverd by insurance?',
      content: 'Highly unlikely because they are fiendish bloodsucking chislers, however if by the grace of some heavenly diety you do manage to get it; we will not use it.'
    }
  ];

  //onChange handler for state changes.
  const handleChange = (e) => setFilterValue(e.target.value);

  return (
    <div style={styles.contentWrapper}>
      <BannerImg
        image={'FAQ2'}
        message={'Frequently Asked Questions'}
      />
      <div style={styles.primaryContent}>
        <div style={styles.inputContainer}>
          <FiSearch
            size={24}
            style={styles.styledIcon} />
          <div style={styles.input}>
            <input
              onChange={handleChange}
              placeholder={`Enter your question here`}
              style={styles.inputBox}>
            </input>
          </div>
        </div>
        <div style={styles.faqHeader}>
          Frequently Asked Questions
        </div>
        <DropDownButtonList
          listData={questions.filter(q => q.content.includes(filterValue))}
        />
      </div>
    </div>
  )
};

const styles = {
  contentWrapper: {
    minHeight: '80vh',
    marginBottom: '30vh'
  },
  primaryContent: {
    width: '65%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  },
  input: {
    position: 'relative',
    borderRadius: '10px',
    border: '2px solid #206620',
    width: '100%',
    height: '40px',
    boxShadow: '0 5px 10px rgb(0 0 0 / 0.2)'
  },
  inputBox: {
    position: 'absolute',
    top:'28%',
    left: '2%',
    border: 'none',
    outline: 'none',
    boxShadow: 'none'
  },
  faqHeader: {
    marginTop: '7%',
    fontSize: 28,
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginBottom: 20
  },
  inputContainer: {
    position: 'relative'
  },
  styledIcon: {
    position: 'absolute',
    top: '26%',
    left: '95%'
  }
};

export default FAQ;