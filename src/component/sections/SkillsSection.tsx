import React from 'react';
import { CardSection } from './CardSection';
import { skills } from '@src/data/skill';

const SkillsSection: React.FC = () => (
  <section id="skills">
    <h2 className="section__title">기술</h2>
    <CardSection data={skills} />
  </section>
);

export default SkillsSection; 