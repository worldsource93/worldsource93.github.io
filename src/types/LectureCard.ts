export interface LectureCardProps {
  id: number;
  title: string;
  company: string;
  period: string;
  tags?: string[];
  description?: string[];
}

export interface LectureCardSectionProps {
  data: LectureCardProps[];
}