import React from 'react';

//Components Import
import DropDownButtonList from '../Components/DropDownButton/DropDownButtonList';
import CustomImg from '../Components/ImgContainer/CustomImg';
import FootnoteLink from '../Components/CustomText/FootnoteLink';

let DummyData = {
  Chiropractic: {
    Howitworks: {
      text: <div>
        Chiropractic care uses a manual approach that focuses on reducing pain, and getting patients back to their optimal health and functioning. By performing a focused assessment, the doctor will diagnose the patient and create a tailored treatment plan.
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
          { title: "What are the benefits?", content: <>Spinal manipulation, which chiropractors call "spinal adjustment" or "chiropractic adjustment", is the most common treatment used in chiropractic care.<FootnoteLink url={"https://en.wikipedia.org/wiki/Chiropractic#cite_note-NBCE_techniques-84"}>[84]</FootnoteLink> Spinal manipulation is a passive manual maneuver during which a three-joint complex is taken past the normal range of movement, but not so far as to dislocate or damage the joint.<FootnoteLink url="https://en.wikipedia.org/wiki/Chiropractic#cite_note-ACA-SMP-85">[85]</FootnoteLink> Its defining factor is a dynamic thrust, which is a sudden force that causes an audible release and attempts to increase a joint's range of motion.<FootnoteLink url={"https://en.wikipedia.org/wiki/Chiropractic#cite_note-ACA-SMP-85"}>[85]</FootnoteLink> High-velocity, low-amplitude spinal manipulation (HVLA-SM) thrusts have physiological effects that signal neural discharge from paraspinal muscle tissues, depending on duration and amplitude of the thrust are factors of the degree in paraspinal muscle spindles activation.<FootnoteLink url={"https://en.wikipedia.org/wiki/Chiropractic#cite_note-Pickar2007-86"}>[86]</FootnoteLink> Clinical skill in employing HVLA-SM thrusts depends on the ability of the practitioner to handle the duration and magnitude of the load.<FootnoteLink to={"https://en.wikipedia.org/wiki/Chiropractic#cite_note-Pickar2007-86"}>[86]</FootnoteLink> More generally, spinal manipulative therapy (SMT) describes techniques where the hands are used to manipulate, massage, mobilize, adjust, stimulate, apply traction to, or otherwise influence the spine and related tissues.<FootnoteLink url={"https://en.wikipedia.org/wiki/Chiropractic#cite_note-ACA-SMP-85"}>[85]</FootnoteLink></> },
          { title: "What are the potential health benefits?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "What are the costs?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "Can I use my insurance?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` }
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
      text: <DropDownButtonList
        listData={[
          { title: "What are the benefits?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "What are the potential health benefits?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "What are the costs?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "Can I use my insurance?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` }
        ]} />
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
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        <ul>
          <li>The goal of your treatment is to eliminate pain while targeting muscle tightness, joint mobility, nerves, and increasing circulation.</li>
          <li>The effects of stress and improper physical functioning can be relieved while restoring the body to optimal health and well being.
          </li>
        </ul>
      </div>
    },
    Whatittreats: {
      text: <DropDownButtonList
        listData={[
          { title: "What are the benefits?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "What are the potential health benefits?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "What are the costs?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "Can I use my insurance?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` }
        ]} />
    }
  },
  FunctionalRehab: {
    Howitworks: {
      text: <div>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        <div style={{ marginTop: 30 }}>
          <CustomImg
            height={'20rem'}
            width={'20rem'}
            image={'FunctionalRehab'}
          />
        </div>
      </div>
    },
    Howithelps: {
      text: <div>
        With a focus on strength and flexibility, functional rehabilitation integrates proprioceptive and agility training to maximize perfromance.
      </div>
    },
    Whatittreats: {
      text: <DropDownButtonList
        listData={[
          { title: "What are the benefits?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "What are the potential health benefits?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "What are the costs?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "Can I use my insurance?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` }
        ]} />
    }
  },
  NutritionalConsulting: {
    Howitworks: {
      text: <div>
        Here are some of the benefits of this:
        <ul>
          <li>A session with our Holistic Nutritionalist involves an in-depth assessment in order to identify imbalances that contribute to health issues.</li>
          <li>A customized health plan will be creatd to help you reach your goals.</li>
          <li>You will be educated about healthy eating habits, supplements, lifestyles changes, exercises, and how to take care of your body.
          </li>
        </ul>
        <div style={{ marginTop: 30 }}>
          <CustomImg
            height={'20rem'}
            width={'20rem'}
            image={'NutritionalCounselling'}
          />
        </div>
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
      text: <DropDownButtonList
        listData={[
          { title: "What are the benefits?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "What are the potential health benefits?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "What are the costs?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
          { title: "Can I use my insurance?", content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` }
        ]} />
    }
  }
};

export default DummyData;