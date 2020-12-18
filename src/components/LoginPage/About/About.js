import React from 'react';

import './About.scss';

const About = () => {
  return (
    <div className="about">
      <p className="about-infos-first">
        Le carnet de santé en ligne de vos bêtes à poils ou à plumes.
      </p>
      <p className="about-infos-second">
        Retrouvez toutes les infos de votre animal préféré, prévoyez ses rendez-vous, suivez ses soins, tout ça sur une seule et même application ! 
      </p>
      {/* <img src={blob} alt="colored blob" className="about-image-blue" />
      <img src={blob2} alt="colored blob" className="about-image-yellow" /> */}
      {/* <img src={blob} alt="colored blob" className="about-image-grey" /> */}
    </div>
  );
};

About.propTypes = {
};

export default About;
