import React from 'react';
import Timeline from '../ui/timeline/Timeline';
import { projectData } from '@src/data/project';

const ProjectsSection: React.FC = () => (
  <section id="projects">
    <h2 className="section__title">프로젝트</h2>
    <Timeline items={projectData} topic="project" />
  </section>
);

export default ProjectsSection; 