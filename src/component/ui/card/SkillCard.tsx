import React from "react";
import { SkillCardProps } from "@src/types/SkillCard";
import "./SkillCard.css";
import { LuMousePointer2 } from "react-icons/lu";
import { PiMouseScroll } from "react-icons/pi";

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  tags,
  description,
  isScroll
}) => (
  <div className="card-container">
    <div className="card-flipper">
      {/* 앞면 - 기본 정보 */}
      <div className="card-front">
        <h3 className="card-info-title">{title}</h3>
        
        {tags && tags.length > 0 && (
          <div className="card-info-tags">
            {tags.map((tag, i) => (
              <span key={i} className="card-info-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="card-flip-indicator">
          <span>View Details</span>
          <LuMousePointer2 />
        </div>
      </div>

      {/* 뒷면 - 상세 정보 */}
      <div className="card-back">
        <h3 className="card-info-title">{title}</h3>
        { isScroll && <PiMouseScroll className="card-info-scroll" /> }
        

        {description && description.length > 0 && (
          <div className="card-descriptions">
            {description.map((des, i) => (
              <p key={i} className="card-description">{des}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);