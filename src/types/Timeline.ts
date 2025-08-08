export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  details: string[];
  tags?: string[];
  type: 'career' | 'project';
}

export interface TimelineProps {
  items: TimelineItem[];
  topic: string;
}