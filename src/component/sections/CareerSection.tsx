import React from 'react';
import Timeline from '../ui/timeline/Timeline';
import { careerData } from '@src/data/career';

const CareerSection: React.FC = () => (
  <section id="career">
    <h2 className="section__title">경력</h2>
    <Timeline items={careerData} topic='career' />
  </section>
);

export default CareerSection; 