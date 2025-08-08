import { aboutInfo } from '@src/data/aboutInfo';
import React from 'react';
import { TypingEffect } from '../ui/typing/TypingEffect';

const AboutSection: React.FC = () => (
  <section id="about">
    <h2 className="section__title">About</h2>
      <div className="about__content-wrapper">
        <div className="about__info-wrapper">
          <TypingEffect
            texts={aboutInfo.introduce}
            typingSpeed={40}
            pauseBetweenTexts={200}
          />
        </div>
      </div>
  </section>
);

export default AboutSection; 