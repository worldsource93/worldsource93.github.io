import { TimelineItem } from '@src/types/Timeline';

export const careerData: TimelineItem[] = [
  {
    id: '1',
    date: '2020.01 - 현재',
    title: '주식회사 망고시스템',
    subtitle: '선임연구원 • 솔루션개발부',
    description: 'GIS 시각화 솔루션 제공하는 공간분석 전문 기업에서 프론트엔드 개발 및 R&D 업무 담당',
    details: [
      'PINOGIO Studio 솔루션의 전체 컨셉 디자인 변경 및 UI/UX 개선',
      '환경부 EIASS 환경영향평가 스코핑 의사결정 지원시스템 개발',
      '국토연구원 KRIHS Interactive Report 플랫폼 개발 및 운영',
      '사내 스터디 주최 및 개발 문화 조성, 신입사원 온보딩 담당',
      'WebGL, d3.js를 활용한 데이터 시각화 전문성 보유'
    ],
    tags: ['React', 'JavaScript', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'GIS', 'd3.js', 'WebGL'],
    type: 'career'
  },
  {
    id: '2',
    date: '2019.06 - 2019.12',
    title: 'LX 한국국토정보공사 공간정보아카데미',
    subtitle: ' 응용소프트웨어개발자 양성과정(6기)',
    description: '비전공자로 시작해 1차 프로젝트부터 최종 프로젝트 팀장까지 진행',
    details: [
      '2020 Best Champ 우수상 수상',
      "'문과생 개발자가 되다' 다큐멘터리 촬영"
    ],
    tags: ['JavaScript', 'Java', 'Android', 'GIS'],
    type: 'career'
  },
  {
    id: '3',
    date: '2016.03 - 2018.06',
    title: '육군본부',
    subtitle: '본부중대장 • 제 15항공단 201항공대대',
    description: '학군(ROTC) 54기 장교로 복무하며 리더십과 책임감을 기름',
    details: [
      '2016.06~2017.05: 육군 23사단 57연대 2대대 6중대 1소대장',
      '2017.06~2018.06: 육군항공 제 15항공단 201항공대대 본부중대장',
      '중위 만기전역',
      '조직 관리 및 팀 리더십 경험 축적'
    ],
    tags: ['리더십', '조직관리', '책임감'],
    type: 'career'
  }
];