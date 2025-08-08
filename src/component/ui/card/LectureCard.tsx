import React from "react";
import { LectureCardProps } from "@src/types/LectureCard";
import "./LectureCard.css";

export const LectureCard: React.FC<LectureCardProps> = ({
  title,
  company,
  period,
  tags,
  description
}) => (
  <div className="card-info-lecture">
    <h3 className="card-info-lecture-title">{title}</h3>
    {
      company && <div className="card-info-lecture-company">{company}</div>
    }
    {
      period && <div className="card-info-lecture-period">{period}</div>
    }

    {tags && tags.length > 0 && (
      <div className="card-info-lecture-tags">
        {tags.map((tag, i) => (
          <span key={i} className="card-info-lecture-tag">
            {tag}
          </span>
        ))}
      </div>
    )}
    <div>
      {
        description && description.map(des => <p className="card__description">{des}</p>)
      }
    </div>

  </div>
);