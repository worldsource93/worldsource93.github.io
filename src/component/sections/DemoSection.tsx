import React from 'react';
import { LuConstruction } from 'react-icons/lu';

const DemoSection: React.FC = () => (
  <section id="contact" style={{ display: 'flex' }}>
    <h2 className="section__title">Demo</h2>
    <div style={{ width: 'fit-content', maxWidth: 1100, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex' }}>
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '9px' }}>
          <LuConstruction size={24} />
          <LuConstruction size={24} />
        </div>
          <p className="rainbow-gradient">공 사 중</p>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '9px' }}>
          <LuConstruction size={24} />
          <LuConstruction size={24} />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
        <LuConstruction size={24} />
      </div>
      <img src="/bonobono.png" alt="bonobono picture" style={{ width: 170}}/>
    </div>
  </section>
);

export default DemoSection; 