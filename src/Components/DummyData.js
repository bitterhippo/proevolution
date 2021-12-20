import React from 'react';

//Components Import
import DropDownButtonList from '../Components/DropDownButton/DropDownButtonList';
import CustomImg from '../Components/ImgContainer/CustomImg';

let DummyData = {
  Chiropractic: {
    Howitworks: {
      text: <div>
        Chiropractic care uses a manual approach that focuses on reducing pain, and getting patients back to their optimal health and functionining. By performing a focused assessment, the doctor will diagnose the patient and create a tailored treatment plan.
        <div style={{ marginTop: 30 }}>
          <CustomImg
            height={'35vh'}
            width={'40vw'}
            image={'Chiro'}
          />
        </div>
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
          <li>Spine</li>
          <li>Hips</li>
          <li>Knees</li>
          <li>Ankes</li>
          <li>Shoulders</li>
          <li>Elbows</li>
          <li>Jaw</li>
          <li>Treating headaches</li>
        </ul>
      </div>
    },
    Whatittreats: {
      text: <DropDownButtonList
        listData={[
          { title: "testaronies", content: 'cheese' }
        ]} />
    }
  },
  Physiotherapy: {
    Howitworks: {
      text: <div>
        Physiotherapy rehabilitation focuses on restoring proper body function using movements and exercises to retain balance, coordination, gait, posture and strength.
        <div style={{ marginTop: 30 }}>
          <CustomImg
            height={'40vh'}
            width={'40vw'}
            image={'Thera1'}
          />
        </div>
      </div>
    },
    Howithelps: {
      text: <div>
        With a focus on improving quality of life, the physiotherapist will examine, diagnose and lead the patient through education and treatment to improve their health.
        <ul>
          <li>Exercise</li>
          <li>Muscle stimulation</li>
          <li>Ultrasound</li>
          <li>Laser</li>
          <li>Heat/Ice</li>
          <li>Manual therapy</li>
        </ul>
        Physiotherapists focus on all regions of the body including:
        <ul>
          <li>The back</li>
          <li>Hips</li>
          <li>Knees</li>
          <li>Ankles</li>
          <li>Shoulders</li>
          <li>Elbows</li>
          <li>Jaw</li>
          <li>And treating headaches</li>
        </ul>
      </div>
    },
    Whatittreats: {
      text: "This is Physiotherapy what it treats data"
    }
  },
  TherapueticUltrasound: {
    Howitworks: {
      text: <div>
        Ultrasound uses high frequency sound waes to create bibration and friction between particles within the tissues. 
        <br></br>
        <br></br>
        Pulsed ultrasound does not increase temperature, it allows for non-thermal effects suc as promoting soft tissue and bone repair by increasing cell permeability. this promotes general healing for all conditions.
        <br></br>
        <br></br>
        Ultrasound is useful for treating: acute tendon tears, sprains, capral tunnel syndrome,, chronic low back pain, muscle tightness, frozen shoulders, bursitilis, cysts and more.
        <div style={{ marginTop: 30 }}>
          <CustomImg
            height={'40vh'}
            width={'40vw'}
            image={'Physio1'}
          />
        </div>
      </div>
    },
    Howithelps: {
      text: <div>
        <ul>
          <li>The goal of your treatment is to eliminate pain while targeting muscle tightness, joint mobility, nerves, and increasing circulation.</li>
          <li>The effects of stress and improper physical functioning can be relieved while restoring the body to optimal health and well being.
          </li>
        </ul>
      </div>
    },
    Whatittreats: {
      text: "This is TherapueticUltrasound what it treats data"
    }
  },
  FunctionalRehab: {
    Howitworks: {
      text: <div>
        Work with a practioner who has created a rehab program tailored to your specific goals in order to achieve optimal functioning.
      </div>
    },
    Howithelps: {
      text: <div>
        With a focus on strength and flexibility, functional rehabilitation integrates proprioceptive and agility training to maximize perfromance.
      </div>
    },
    Whatittreats: {
      text: "This is FunctionalRehab what it treats data"
    }
  },
  NutritionalConsulting: {
    Howitworks: {
      text: <div>
        <ul>
          <li>A session with our Holistic Nutritionalist involves an in-depth assessment in order to identify imbalances that contribute to health issues.</li>
          <li>A customized health plan will be creatd to help you reach your goals.</li>
          <li>You will be educated about healthy eating habits, supplements, lifestyles changes, exercises, and how to take care of your body.
          </li>
        </ul>
      </div>
    },
    Howithelps: {
      text: <div>
        A health plan tailored to you can help to achieve goals. This can include:
        <ul>
          <li>Lose weight</li>
          <li>Maintain balance</li>
          <li>Resolve digestive problems</li>
          <li>Enhance strength performance and more</li>
        </ul>
      </div>
    },
    Whatittreats: {
      text: "This is NutritionalConsulting what it treats data"
    }
  }
};

export default DummyData;