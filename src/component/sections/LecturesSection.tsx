import React from 'react';
import { CardSection } from './CardSection';
import { lectures } from '@src/data/lecture';

const LecturesSection: React.FC = () => (
  <section id="lectures">
    <h2 className="section__title">강의</h2>
    <CardSection data={lectures} />
  </section>
);

export default LecturesSection; 