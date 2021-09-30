import React from 'react';
import ContentBlock from '../Components/Content/ContentBlock';
import BannerImg from '../Components/ImgContainer/BannerImg';
import ProviderCarousel from '../Components/Carousel/ProviderCarousel';

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
          content="An Informed Examination will take place on your first visit, so that we can make or confirm a diagnosis, and understand the state and stage of your injury. We'll check your medical history, find out about your level of physical activity and any relevant lifestyle factors."
          button="Our Process"
        />
        <ContentBlock
          header='Initial Assessment'
          content="Pro Evolution Wellness is a clinic created by two ambitious practioners that wanted to provide quality chiropractic services to their local community. Wnating to give back to the community that they grw up in, our goal is to give each member of the community a special, individualized service to promote active healthy lifestyles. We help a variety of patients from nutional consulting to functional rehab to theraputic ultrasound. With years of collective experience, our team provides quality advice and teratments to the Vaughn region."
          button="See More"
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
      <h2 style={styles.bannerText}>Our Providers</h2>
      <ProviderCarousel />
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
