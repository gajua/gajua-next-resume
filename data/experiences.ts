export interface Project {
  id: string
  name: string
  image: string
  description: string
  details?: string
  technologies?: string[]
  link?: string
}

export interface ExperienceItem {
  company: string
  logo: string
  role: string
  period: string
  description: string
  projects: Project[]
  skills: string[]
}

export interface YearGroup {
  year: string
  items: ExperienceItem[]
}

export const experiences: YearGroup[] = [
  {
    year: "2025 - Present",
    items: [
      {
        company: "주식회사 위티",
        logo: "/images/knowhowLogotype.png",
        role: "FE Engineer | Technical PM",
        period: "2025 - Present",
        description:
          "스타트업 커뮤니티 노하우의 글로벌 확장을 위한 기술적 리드 및 신규 기능 개발을 주도.",
        projects: [
          {
            id: "knowhow-optimization",
            name: "노하우 서비스 최적화 및 글로벌 확장",
            image: "/images/knowhowIcon.png",
            description: "페이지 최적화 및 현지화로 UX 향상 및 매출 기반 마련.",
            details:
            "스타트업 커뮤니티 플랫폼 '노하우'의 성능 개선 및 글로벌 확장을 통해 UX와 비즈니스 효율을 향상.\n" +
            "Page Weight 50% 감소 (4.3MB → 2.2MB): 코드 스플리팅, WebP 변환, 중복 CSS 제거 등으로 로딩 성능 개선.\n" +
            "일본어 페이지 및 소셜 로그인(Line API) 개발을 통한 현지화 완료.\n" +
            "TIPS 프로그램 기반 8,000만 원 규모 해외 마케팅 프로젝트 수행.\n" +
            "백오피스 광고 관리 기능 기획 및 개발로 업무 프로세스 75% 단축 및 광고 수익화 실현.\n" +
            "KG 이니시스 기반 정기 결제 페이지 구축 (코리아 포트원 연동).",
            technologies: [
              "Nuxt3",
              "Vue3",
              "TypeScript",
              "Pinia",
              "WindiCSS",
              "Cypress",
              "Google Translation API",
              "Line API",
              "KG 이니시스",
              "KoreaPortOne",
              "Performance Optimization",
              "Code Splitting",
            ],
            link: "https://knowhow.ceo/",
          },
          {
            id: "seo-optimization",
            name: "SEO 최적화 프로젝트",
            image: "/placeholder.svg?height=400&width=600",
            description: "구글 검색 노출 수 약 300% 향상.",
            details: "Google Analytics와 Search Console을 활용한 트래픽 분석 및 SEO 전략 수립. 키워드 분석 및 콘텐츠 최적화를 통해 노출 수 증가 및 클릭률 상승을 유도.",
            technologies: ["SEO", "Google Analytics", "Search Console", "Performance Monitoring"],
          },
        ],
        skills: ["Nuxt3", "Vue3", "TypeScript", "SEO Optimization", "Performance Tuning"],
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        company: "주식회사 위티",
        logo: "/images/knowhowLogotype.png",
        role: "FE Engineer | Technical PM",
        period: "2024",
        description:
          "Knowhow 모바일 앱 개발 및 CEO Staff 프로젝트 수행.",
        projects: [
          {
            id: "knowhow-app",
            name: "노하우 모바일 앱",
            image: "/images/knowhowIcon.png",
            description: "Next.js 기반의 모바일 앱 개발 및 최적화 진행.",
            details: "Recoil을 활용한 상태 관리 및 웹뷰 환경 최적화를 진행하여 안정적인 성능을 보장. 사용자 피드백을 반영하여 지속적인 기능 개선 및 버그 수정 수행.",
            technologies: ["Next.js", "React", "TypeScript", "Recoil", "Tailwind CSS"],
            link: "https://apps.apple.com/kr/app/id6553981316",
          },
          {
            id: "ceo-staff",
            name: "CEO Staff",
            image: "/placeholder.svg?height=400&width=600",
            description: "GovTech 지원사업 수행 과제 산출물 개발.",
            details: "유저 맞춤 관심 키워드 기반 뉴스 추천 페이지 및 지원사업 캘린더 기능 개발. Full_Calendar 라이브러리 활용하여 이벤트 관리 기능을 구현.",
            technologies: ["Vue.js", "TypeScript", "Pinia", "Tailwind CSS"],
          },
        ],
        skills: ["Next.js", "React", "Vue.js", "TypeScript", "Performance Optimization", "State Management"],
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        company: "주식회사 위티",
        logo: "/images/knowhowLogotype.png",
        role: "FE Engineer | Technical PM",
        period: "2023",
        description:
          "Knowhow Space B2B 프로젝트.",
        projects: [
          {
            id: "knowhow-space",
            name: "Knowhow Space",
            image: "/images/knowhowSpace.png",
            description: "B2B 기업 맞춤형 SaaS 페이지 개발.",
            details: "다양한 기업 보육 기관에 맞춤형으로 제공할 수 있는 플랫폼을 개발하여 4000만원의 매출 달성. Chart.js를 활용한 성과 데이터 시각화 및 반응형 디자인 적용.",
            technologies: ["Vue.js", "TypeScript", "Pinia", "Windi CSS"],
          },
        ],
        skills: ["Vue.js", "TypeScript", "SEO", "Performance Optimization", "Data Visualization"],
      },
    ],
  },
];

