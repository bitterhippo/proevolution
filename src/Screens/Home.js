import React from 'react';
import ContentBlock from '../Components/Content/ContentBlock';
import BannerImg from '../Components/ImgContainer/BannerImg';
import ProviderCarousel from '../Components/Carousel/ProviderCarousel';
import CustomImg from '../Components/ImgContainer/CustomImg';
import CustomSVG from '../Components/ImgContainer/CustomSVG';

import ClipBackground from '../Components/ClipBackgrounds/ClipBackground';

const Home = () => {

  let servicesData = [
    { title: 'Physiotherapy', img: 'Physiotherapy' },
    { title: 'Functional Rehab', img: 'FunctionalRehab' },
    { title: 'Nutritional Consulting', img: 'NutritionalCounselling' },
    { title: 'Theraputic Ultrasound', img: 'TherapueticUltrasound' },
    { title: 'Low Level Laser Therapy (LLLT)', img: 'Lazer' },
    { title: 'Personal Training', img: "PT" },
    { title: 'Registered Massage Therapy', img: 'Massage' },
    { title: 'Shockwave Therapy', img: 'ShockwaveTherapy' },
  ];

  let contentDefaults = [
    {
      header: 'Initial Assessment',
      content: 'Pro Evolution Wellness is a clinic created by two ambitious practioners that wanted to provide quality chiropractic services to their local community. Wanting to give back to the community that they grw up in, our goal is to give each member of the community a special, individualized service to promote active healthy lifestyles. We help a variety of patients from nutional consulting to functional rehab to theraputic ultrasound. With years of collective experience, our team provides quality advice and teratments to the Vaughn region.',
      button: 'See More',
      image: 'Home2'
    },
    {
      header: 'WHO WE ARE',
      content: `An Informed Examination will take place on your first visit, so that we can make or confirm a diagnosis, and understand the state and stage of your injury. We'll check your medical history, find out about your level of physical activity and any relevant lifestyle factors. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.`,
      button: 'Our Process',
      image: 'Home1'
    }
  ];


  return (
    <div style={styles.screen}>
      <BannerImg
        image={'Hero'}
        message={'Pro Evolution Wellness'}
        brightness={"dark"}
      />
      <div style={styles.contentBlock}>
        <ContentBlock
          header={contentDefaults[0].header}
          content={contentDefaults[0].content}
          button="See More"
          image={'Home2'}
        />
        <ClipBackground>
          <ContentBlock
            header={contentDefaults[1].header}
            content={contentDefaults[1].content}
            button={"Our Process"}
            image={'Home1'}
          />
        </ClipBackground>
      </div>
      <h2 style={styles.bannerText}>Our Services</h2>
      <div style={styles.servicesList}>
        {
          servicesData.map(currentItem => {
            return <div
              key={currentItem.title}
              style={styles.rowItem}
            >
              <CustomImg
                height={'15vw'}
                width={'15vw'}
                image={`${currentItem.img}`}
              />
              <div>
                <span style={styles.servicesText}>{currentItem.title}</span>
              </div>
            </div>
          })
        }
      </div>
      <div style={styles.providerCarousel}>
        <ClipBackground>
          <ProviderCarousel />
        </ClipBackground>
      </div>
    </div>
  )
};

const styles = {
  servicesList: {
    display: 'flex',
    justifyContent: 'space-evenly',
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
    marginTop: '8vh',
    fontSize: 32,
    textAlign: 'center',
    color: '#206620'
  },
  contentBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10vh',
    gap: '15vh'
  },
  servicesText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  providerCarousel: {
    marginTop: '25vh'
  },
}

export default Home;
