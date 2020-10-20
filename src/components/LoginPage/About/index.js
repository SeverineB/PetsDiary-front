import React from 'react';

import blob from '../../../assets/img/blob2.svg';
import blob2 from '../../../assets/img/blob3.svg';

import './About.scss';

const About = () => {
  return (
    <div className="about">
      <p className="about-infos">
        Le carnet de santé en ligne de vos bêtes à poils ou à plumes.
      </p>
      <p className="about-infos">
        Retrouvez toutes les infos de votre animal préféré, prévoyez ses rendez-vous, suivez ses soins, tout ça sur une seule et même application ! 
      </p>
      <img src={blob} alt="colored blob" className="about-image-blue" />
      <img src={blob2} alt="colored blob" className="about-image-yellow" />
    </div>
  );
};

About.propTypes = {
};

export default About;
