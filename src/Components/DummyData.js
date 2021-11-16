import React from 'react';

//Components Import
import BannerImg from '../Components/ImgContainer/BannerImg';
import DropDownButtonList from '../Components/DropDownButton/DropDownButtonList';

let DummyData = {
  Chiropractic: {
    Howitworks: {
      text: <div>
        Chiropractic care uses a manual approach that focuses on reducing pain, and getting patients back to their optimal health and functionining. By performing a focused assessment, the doctor will diagnose the patient and create a tailored treatment plan.
      </div>
    },
    Howithelps: {
      text: <div>
        The goal is to reduce pain and restore proper function, for this various techniques are used including:
        <ul>
          <li>Adjustments</li>
          <li>Mobilizations</li>
          <li>Ultrasound</li>
          <li>Acupuncture</li>
          <li>Muscle release techniques</li>
          <li>Rehab exercises</li>
        </ul>
        Chiropractors focs on all regions of the body including:
        <ul>
          <li>spine</li>
          <li>hips</li>
        </ul>
      </div>
    },
    Whatittreats: {
      text: <DropDownButtonList 
      listData={[
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