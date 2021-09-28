import React from 'react';
import ContentBlock from '../Components/Content/ContentBlock';
import BannerImg from '../Components/ImgContainer/BannerImg';

const Home = () => {

  let servicesData = [
    'Physiotherapy', 'Functional Rehab', 'Nutritional Consulting',
    'Theraputic Ultrasound', 'Low Level Laser Therapy (LLLT)',
    'Personal Training', 'Registered Massage Therapy', 'Shockwave Therapy'
  ];


  return (
    <div style={styles.screen}>
      <BannerImg
        image={'CeaserTeam'}
        message={'Pro Evolution Wellness'}
      />
      <div style={styles.contentBlock}>
        <ContentBlock
          header='WHO ARE WE'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <ContentBlock
          header='Initial Assessment'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
      <h2 style={styles.bannerText}>Our Services</h2>
      <div style={styles.servicesList}>
        {
          servicesData.map(currentItem => <div
            style={styles.rowItem}
          >
            <div style={styles.rowItemImg}>
            </div>
            {currentItem}
          </div>)
        }
      </div>
    </div>
  )
};

const styles = {
  servicesList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  rowItem: {
    flex: '1 0 25%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: 10,
    marginTop: 30
  },
  rowItemImg: {
    height: 100,
    width: 100,
    backgroundColor: 'gray',
    alignSelf: 'center'
  },
  bannerText: {
    marginTop: '15vh',
    fontSize: 32,
    textAlign: 'center',
    color: '#206620'
  },
  contentBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5vh',
    gap: '7.5vh'
  }
}

export default Home;
