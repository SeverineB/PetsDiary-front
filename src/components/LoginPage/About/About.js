import React from 'react';

import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about-infos">
        <p className="about-infos-paragraph">
          Le <strong>carnet de santé</strong> en ligne de vos bêtes à poils ou à plumes.
        </p>
        <p className="about-infos-paragraph">
          Retrouvez toutes les infos de votre animal préféré, prévoyez ses <strong>rendez-vous</strong>, suivez ses <strong>soins</strong>, tout ça sur une seule et même application&nbsp;! 
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
};

export default About;
