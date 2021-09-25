import React from 'react';
import ContentBlock from '../Components/Content/ContentBlock';
import BannerImg from '../Components/ImgContainer/BannerImg';

const About = () => {

  let aboutContentBlock = [
    {
      header: "Our Process",
      contentBlock: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ];

  let staffList = [
    {
      name: 'Jeremy Johnson',
      image: 'none'
    },
    {
      name: 'Vanessa Huges',
      image: 'none'
    },
    {
      name: 'Simba Woop',
      image: 'none'
    },
    {
      name: 'Quincy Jones',
      image: 'none'
    }
  ]

  return (
    <div>
      <BannerImg 
        message="About us"
      />
      <ContentBlock
        header={aboutContentBlock[0].header}
        content={aboutContentBlock[0].contentBlock}
      />
      <div style={StyleSheet.staffList}>
        {
          staffList.map(currentMember => <div>
            {currentMember.name}
            <button style={StyleSheet.staffListButton}></button>
            </div>)
        }
      </div>
      <div>
        A carousel should go here.
      </div>
    </div>
  )
};

const style = {
  aboutScreenWrapepr: {

  },
  staffList: {
    display: 'flex',
    flexDirection: 'inline-row',
  },
  staffListButton: {
    backgroundColor: '#206620',
    color: 'white',
  }
}

export default About;
