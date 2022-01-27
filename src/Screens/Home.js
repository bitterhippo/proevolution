import React from 'react';
import ContentBlock from '../Components/Content/ContentBlock';
import CustomButton from '../Components/CustomButton/CustomButton';
import BannerImg from '../Components/ImgContainer/BannerImg';
import ProviderCarousel from '../Components/Carousel/ProviderCarousel';
import CustomImg from '../Components/ImgContainer/CustomImg';
import { Link } from 'react-router-dom';

import ClipBackground from '../Components/ClipBackgrounds/ClipBackground';
import Services from './Services';

const Home = () => {

  let servicesData = [
    { title: 'Physiotherapy', img: 'Physiotherapy' },
    { title: 'Functional Rehab', img: 'FunctionalRehab' },
    { title: 'Nutritional Consulting', img: 'NutritionalCounselling' },
    { title: 'Therapeutic Ultrasound', img: 'TherapueticUltrasound' },
    { title: 'Low Level Laser Therapy (LLLT)', img: 'Lazer' },
    { title: 'Personal Training', img: "PT" },
    { title: 'Registered Massage Therapy', img: 'Massage' },
    { title: 'Shockwave Therapy', img: 'ShockwaveTherapy' },
  ];

  let contentDefaults = [
    {
      header: 'Initial Assessment',
      content: 'Pro Evolution Wellness is a clinic created by two ambitious practioners that wanted to provide quality chiropractic services to their local community. Wanting to give back to the community that they grew up in, our goal is to give each member of the community a special, individualized service to promote active healthy lifestyles. We help a variety of patients from nutritional consulting to functional rehab to therapeutic ultrasound. With years of collective experience, our team provides quality advice and treatments to the Vaughan region.',
      button: 'See More',
      image: 'Home2',
      link: <Link to={Services}> See More </Link>
    },
    {
      header: 'WHO WE ARE',
      content: `An Informed Examination will take place on your first visit, so that we can make or confirm a diagnosis, and understand the state and stage of your injury. We'll check your medical history, find out about your level of physical activity and any relevant lifestyle factors. 
      In addition to clinical practice, other aspects of physical therapist practice include research, education, consultation, and health administration. Physical therapy is provided as a primary care treatment or alongside, or in conjunction with, other medical services. Physical therapy addresses the illnesses or injuries that limit a person's abilities to move and perform functional activities in their daily lives.[6] Our PTs use an individual's history and physical examination to arrive at a diagnosis and establish a management plan and, when necessary, incorporate the results of laboratory and imaging studies like X-rays, CT-scan, or MRI findings. In addition, our  PTs work with individuals to prevent the loss of mobility before it occurs by developing fitness and wellness-oriented programs for healthier and more active lifestyles, providing services to individuals and populations to develop, maintain and restore maximum movement and functional ability throughout the lifespan. This includes providing treatment in circumstances where movement and function are threatened by aging, injury, disease, or environmental factors. Functional movement is central to what it means to be healthy.`,
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
          link={<CustomButton
            margin="5vh 10vh 0 0"
            padding="5px 20px"
          >
            <Link
              to={'Services'}
              style={styles.styledLink}>
              See More
            </Link>
          </CustomButton>}
        />
        <ClipBackground>
          <ContentBlock
            header={contentDefaults[1].header}
            content={contentDefaults[1].content}
            button={"Our Process"}
            image={'Home1'}
            link={<CustomButton
              margin="5vh 10vh 0 0"
              padding="5px 20px"
            >
              <Link
                to={'About'}
                style={styles.styledLink}>
                See More
              </Link>
            </CustomButton>}
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
    marginTop: '40vh',
    fontSize: 32,
    textAlign: 'center',
    color: '#206620'
  },
  contentBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15vh',
    gap: '30vh'
  },
  servicesText: {
    fontSize: '1.5vw',
    fontWeight: 'bold'
  },
  providerCarousel: {
    marginTop: '25vh'
  },
  styledLink: {
    color: 'white',
    textDecoration: 'none'
  }
}

export default Home;
