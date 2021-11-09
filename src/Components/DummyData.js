import React from 'react';

//Components Import
import BannerImg from '../Components/ImgContainer/BannerImg';
import DropDownButtonList from '../Components/DropDownButton/DropDownButtonList';

let DummyData = {
  Chiropractic: {
    Howitworks: {
      text: <div>
        This is the data for Chiropractic how it works.
      </div>
    },
    Howithelps: {
      text: "This is Chiropractic how it helps data"
    },
    Whatittreats: {
      text: <DropDownButtonList listData={[
        {title: "testaronies", content: 'cheese'}
      ]} />
    }
  },
  Physiotherapy: {
    Howitworks: {
      text: "This is Physiotherapy how it works data"
    },
    Howithelps: {
      text: "This is Physiotherapy how it helps data"
    },
    Whatittreats: {
      text: "This is Physiotherapy what it treats data"
    }
  },
  TherapueticUltrasound: {
    Howitworks: {
      text: "This is TherapueticUltrasound how it works data"
    },
    Howithelps: {
      text: "This is TherapueticUltrasound how it helps data"
    },
    Whatittreats: {
      text: "This is TherapueticUltrasound what it treats data"
    }
  },
  FunctionalRehab: {
    Howitworks: {
      text: "This is FunctionalRehab how it works data"
    },
    Howithelps: {
      text: "This is FunctionalRehab how it helps data"
    },
    Whatittreats: {
      text: "This is FunctionalRehab what it treats data"
    }
  },
  NutritionalConsulting: {
    Howitworks: {
      text: "This is NutritionalConsulting how it works data"
    },
    Howithelps: {
      text: "This is NutritionalConsulting how it helps data"
    },
    Whatittreats: {
      text: "This is NutritionalConsulting what it treats data"
    }
  }
};

export default DummyData;