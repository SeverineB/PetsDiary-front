import React from 'react';

import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about-infos">
        <p className="about-infos-first">
          Le carnet de santé en ligne de vos bêtes à poils ou à plumes.
        </p>
        <p className="about-infos-second">
          Retrouvez toutes les infos de votre animal préféré, prévoyez ses rendez-vous, suivez ses soins, tout ça sur une seule et même application ! 
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
};

export default About;
