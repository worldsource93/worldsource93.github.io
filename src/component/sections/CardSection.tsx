import React from "react";
import { SkillCard } from "../ui/card/SkillCard";
import { SkillCardProps, SkillCardSectionProps } from "../../types/SkillCard";
import { LectureCardProps, LectureCardSectionProps } from "@src/types/LectureCard";
import { LectureCard } from "../ui/card/LectureCard";

function isLectureCard(card: SkillCardProps | LectureCardProps): card is LectureCardProps {
  return (card as LectureCardProps).period !== undefined;
}

export const CardSection: React.FC<SkillCardSectionProps | LectureCardSectionProps> = ({ data }) => (
  <section className="card__section">
    <div className="card__section-grid">
      {data.map(card => (
        isLectureCard(card) ? <LectureCard key={card.id} {...card} /> : <SkillCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);