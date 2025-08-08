import { SkillCardProps } from '@src/types/SkillCard';

export const skills: SkillCardProps[] = [
  {
    id: 1,
    title: 'Front-end',
    tags: ['JavaScript', 'TypeScript', 'React', 'vite', 'D3', 'OpenLayers', 'motion', 'Docusaurus'],
    description: ['공간 데이터 분석 및 시각화를 통한 공유 플랫폼 개발', '정부 연구기관 다수 프로젝트 프론트엔드 개발 리드', 'Docusaurus 기반 회사 기술블로그 구축', '카카오톡 챗봇 연동 웹 애플리케이션 개발', '웹 표준 및 접근성 준수', '크로스 브라우저 호환성 확보', '보안 관련 처리(SQL Injection, XSS)', 'Lazy Loading, 코드 스플리팅을 통한 사용자 경험 개선', '반응형 디자인 구현'],
    isScroll: true
  },
  {
    id: 2,
    title: 'Back-end',
    tags: ['Java', 'SpringBoot'],
    description: ['REST API 서버 설계 및 개발', '로그 파싱 및 분석 도구 개발', 'GeoServer 커스텀 함수 모듈 개발', 'SLD 자동 생성 및 발행 API 구현',  '업무 자동화 경험'],
    isScroll: true
  },
  {
    id: 3,
    title: 'DevOps / 인프라',
    tags: ['Git', 'CI/CD', 'Linux','온프레미스 서버 구축', '클라우드 서버 세팅'],
    description: ['서비스 배포 자동화 시스템 구축', 'CI/CD 파이프라인 설계 및 운영', '온프레미스 서버 인프라 관리', '다양한 리눅스 환경 클라우드 운영 경험'],
    isScroll: false
  },
  {
    id: 4,
    title: '데이터베이스 / Spatial',
    tags: ['PostgreSQL', 'PostGIS', 'Geoserver', 'QGIS', 'PyQGIS', 'GeoTools', 'OpenGXT', 'PgRouting'],
    description: ['공간 데이터 수집, 정제, 구축 및 가공', '주소 데이터 지오코딩 및 리버스 지오코딩', '공간 데이터 최적화 및 경량화', '공간 데이터 무결성 검증 및 복구', '실시간 사용자 정의 데이터 급간분석', 'GeoServer SQL View 활용한 동적 데이터 서비스', '지도 타일 캐싱을 통한 로딩 속도 개선', '다양한 공간데이터 포맷 처리 및 변환'],
    isScroll: true
  },
  {
    id: 5,
    title: 'Team Growth',
    tags: ['사내 스터디', '신입사원 온보딩 담당', 'CodeRabbit'],
    description: ['사내 기술 스터디 기획 및 운영', '신입사원 온보딩 프로그램 운영', '코드 리뷰 자동화 도구(CodeRabbit) 도입'],
    isScroll: false
  }
];