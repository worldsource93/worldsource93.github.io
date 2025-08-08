import { TimelineItem } from '@src/types/Timeline';

export const projectData: TimelineItem[] = [
  {
    id: '1',
    date: '2025.04 - 진행 중',
    title: '국토지리정보원 National Atlas 출품작 제작',
    subtitle: 'International GIS Conferences in Canada 2025 출품',
    description: 'WebGL과 d3.js를 활용한 국가지도집 제작 및 공간데이터 최적화',
    details: [
      'PO 역할 수행, 프로젝트 전체 아키텍처 설계',
      'SHP 형식 30MB → DB 1.4MB, 웹 전송 685KB로 95~97% 용량 축소',
      'PostGIS 기반 공간 쿼리 속도 10~20배 개선',
      '지도 렌더링 시간 10배 이상 단축',
      '협력기관 기술 자문 및 데이터 구축 가이드 제공'
    ],
    tags: ['React', 'JavaScript', 'WebGL', 'd3.js', 'OpenLayers', 'Spring Boot', 'PostGIS'],
    type: 'project'
  },
  {
    id: '2',
    date: '2023.11 - 진행 중',
    title: '환경영향평가 스코핑 의사결정 지원시스템',
    subtitle: '한국환경산업기술원 R&D 과제',
    description: '환경영향평가 절차 단순화 및 객관성 확보를 위한 의사결정 시스템',
    details: [
      'R&D 연구개발 실무담당자 및 PO 역할',
      '2026년 환경부 EIASS 업무시스템 도입 확정',
      '전반적인 시스템 설계 및 데이터베이스 구조 개선',
      '유저·관리자 시스템 개발 및 REST API 구축',
      '2025년 4월부터 시범운영 시작'
    ],
    tags: ['React', 'JavaScript', 'Spring Boot', 'PostgreSQL', 'OpenLayers', 'PostGIS'],
    type: 'project'
  },
  {
    id: '3',
    date: '2021.10 - 진행 중',
    title: 'KRIHS Interactive Report',
    subtitle: '국토연구원 정책 소통 플랫폼',
    description: '국토연구원 정책 논문을 시각화한 대민 소통 플랫폼 개발 및 운영',
    details: [
      '총 13개 주제의 리포트 제작 (미공개 포함)',
      'PO 역할 및 REST API 개발 담당 (2022.03~)',
      '기술 스택 변경 (JSP → React) 주도',
      'i18n을 활용한 다국어 지원 (한글, 영문)',
      '리포트 관리용 어드민 시스템 구축'
    ],
    tags: ['React', 'JavaScript', 'JSP', 'Spring', 'PostgreSQL', 'OpenLayers', 'd3.js', 'i18n'],
    type: 'project'
  },
  {
    id: '4',
    date: '2024.10 - 2024.12',
    title: 'KMI 한국해양수산개발원',
    subtitle: '부산광역시 해양 스토리맵 제작',
    description: '부산광역시 홍보를 위한 인터랙티브 해양 스토리맵 플랫폼 개발',
    details: [
      '짧은 기간 내 기획부터 준공까지 전체 프로세스 소화',
      'Naver 1784, ArcGIS Maps 사이트 분석 및 UX 패턴 적용',
      'One page scroll + horizontal scroll 조합 구현',
      '1인 개발로 전체 시스템 구축',
      '개발 소스 및 데이터 타 업체 이관 완료'
    ],
    tags: ['React', 'TypeScript', 'Redux', 'OpenLayers', 'motion', 'i18n'],
    type: 'project'
  },
  {
    id: '5',
    date: '2024.03 - 2024.07',
    title: 'KRIHS ODA Geospatial MAPs: CAMBODIA',
    subtitle: '캄보디아 개발현황 및 한국 ODA 데이터 시각화',
    description: '캄보디아 개발 데이터와 한국 ODA 데이터를 시각화한 인사이트 플랫폼',
    details: [
      '다양한 이해관계자와의 협업 (ODA 전문가, 연구진, 디자이너)',
      '주제도별 데이터 급간분류 및 레이어 스타일 생성 자동화',
      '직관적인 데이터 탐색 환경 제공',
      '1인 개발로 설계부터 운영까지 전담',
      '전문가들이 쉽게 인사이트를 얻을 수 있는 UI/UX 구현'
    ],
    tags: ['React', 'JavaScript', 'Spring Boot', 'JPA', 'PostgreSQL', 'OpenLayers'],
    type: 'project'
  },
  {
    id: '6',
    date: '2020.03 - 2023.05',
    title: 'PINOGIO Studio',
    subtitle: '지도 기반 포스팅 플랫폼',
    description: '공간데이터 기반 레이어 발행 및 지도 기반 포스팅 제작·공유 플랫폼',
    details: [
      '대시보드 및 동적 지도 포함 포스팅 시스템 구축',
      '공간도형 추가/수정/삭제 기능 개발',
      '레이어 스타일링 도구 구현',
      '일관성 있는 UI를 위한 디자인 시스템 도입',
      '사용자 중심의 편의기능 기획 및 개발'
    ],
    tags: ['React', 'JavaScript', 'Material-UI', 'OpenLayers', 'PostgreSQL'],
    type: 'project'
  },
  {
    id: '7',
    date: '2021.02 - 2021.04',
    title: 'DL E&C 카카오톡 활용 챗봇 및 웹 어플리케이션',
    subtitle: '오시공 하자 절감 프로젝트',
    description: '세대옵션 불일치로 인한 오시공 하자를 사전에 방지하는 챗봇 시스템',
    details: [
      '1인 개발로 전체 시스템 구축',
      '카카오톡 메신저를 활용한 편리한 사전점검 시스템',
      '기존 엑셀 관리 및 수기점검의 불편함 개선',
      '통상 1000세대당 8건 → 5320세대에서 10건으로 오시공 75% 감소',
      '2021.04~2024.12, 약 3년 9개월간 24/365 무중단 서비스 제공'
    ],
    tags: ['React', 'JavaScript', 'Spring Boot', 'JPA', 'PostgreSQL', 'KakaoTalk API'],
    type: 'project'
  },
  {
    id: '8',
    date: '2025.07 - 진행중',
    title: '회사 기술블로그 제작',
    subtitle: '망고시스템 기술 공유 플랫폼',
    description: '기술적 도전과 해결 과정을 공유하는 팀 성장 중심의 기술 블로그',
    details: [
      'Docusaurus 커스터마이징을 통한 블로그 플랫폼 구축',
      'GitHub utterances를 활용한 댓글 시스템 구현',
      'Vercel과 GitHub을 활용한 CI/CD 파이프라인 구축',
      '팀 내 기술 공유 문화 조성'
    ],
    tags: ['React', 'Docusaurus', 'Vercel', 'GitHub', 'CI/CD'],
    type: 'project'
  }
];