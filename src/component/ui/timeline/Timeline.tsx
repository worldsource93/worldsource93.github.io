// components/Timeline.tsx

import React from 'react';
import { TimelineProps, TimelineItem } from '@src/types/Timeline';
import './Timeline.css';

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  topic: string;
}

const TimelineItemComponent: React.FC<TimelineItemProps> = ({ item, index, topic }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className={`timeline-item ${isLeft ? 'timeline-item-left' : 'timeline-item-right'}`}>
      <div className="timeline-content">
        <div className="timeline-date">{item.date}</div>
        <div className="timeline-card">
          <h3 className="timeline-title">{item.title}</h3>
          {item.subtitle && (
            <h4 className="timeline-subtitle">{item.subtitle}</h4>
          )}
          <p className="timeline-description">{item.description}</p>
          <ul className="timeline-details">
            {item.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          {item.tags && (
            <div className="timeline-tags">
              {item.tags.map((tag, idx) => (
                <span key={idx} className="timeline-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={`timeline-dot dot${index+1} ${topic}`}></div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items, topic }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {items.map((item, index) => (
        <TimelineItemComponent key={item.id} item={item} index={index} topic={topic} />
      ))}
    </div>
  );
};

export default Timeline;