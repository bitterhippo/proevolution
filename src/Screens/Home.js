import React from 'react';
import ContentBlock from '../Components/Content/ContentBlock';
import BannerImg from '../Components/ImgContainer/BannerImg';
import ProviderCarousel from '../Components/Carousel/ProviderCarousel';
import CustomImg from '../Components/ImgContainer/CustomImg';


const Home = () => {

  let servicesData = [
    {title: 'Physiotherapy', img: 'Physiotherapy'},
    {title: 'Functional Rehab', img: 'FunctionalRehab'},
    {title: 'Nutritional Consulting', img: 'NutritionalCounselling'},
    {title: 'Theraputic Ultrasound', img: 'TherapueticUltrasound'},
    {title: 'Low Level Laser Therapy (LLLT)', img: 'Lazer'},
    {title: 'Personal Training', img: "PT"},
    {title: 'Registered Massage Therapy', img: 'Massage'},
    {title: 'Shockwave Therapy', img: 'ShockwaveTherapy'},
  ];


  return (
    <div style={styles.screen}>
      <BannerImg
        image={'CeaserTeam'}
        message={'Pro Evolution Wellness'}
        brightness={"dark"}
      />
      <div style={styles.contentBlock}>
        <ContentBlock
          header='Initial Assessment'
          content="Pro Evolution Wellness is a clinic created by two ambitious practioners that wanted to provide quality chiropractic services to their local community. Wnating to give back to the community that they grw up in, our goal is to give each member of the community a special, individualized service to promote active healthy lifestyles. We help a variety of patients from nutional consulting to functional rehab to theraputic ultrasound. With years of collective experience, our team provides quality advice and teratments to the Vaughn region."
          button="See More"
        />
        <ContentBlock
          header='WHO ARE WE'
          content="An Informed Examination will take place on your first visit, so that we can make or confirm a diagnosis, and understand the state and stage of your injury. We'll check your medical history, find out about your level of physical activity and any relevant lifestyle factors."
          button="Our Process"
          background={true}
        />
        <div style={styles.test}>
        <div style={styles.clipPathItem2}>
        </div>
        <div style={styles.clipPathItem1}>
        </div>
        </div>
      </div>
      <h2 style={styles.bannerText}>Our Services</h2>
      <div style={styles.servicesList}>
        {
          servicesData.map(currentItem => {
          return <div
            key={currentItem}
            style={styles.rowItem}
          >
            <CustomImg 
            height={125}
            width={125}
            image={`${currentItem.img}`}
            />
          </div>})
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
    marginTop: 30,
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
