export interface SkillCardProps {
  id: number;
  title: string;
  tags?: string[];
  description?: string[];
  isScroll?: boolean
}

export interface SkillCardSectionProps {
  data: SkillCardProps[];
}