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
        logo: "/KnowhowLogotype.png",
        role: "FE Engineer | Technical PM",
        period: "2025 - Present",
        description:
          "스타트업 커뮤니티 노하우의 글로벌 확장을 위한 기술적 리드 및 신규 기능 개발을 주도.",
        projects: [
          {
            id: "seo-optimization",
            name: "SEO 최적화 프로젝트",
            image: "/placeholder.svg?height=400&width=600",
            description: "구글 검색 노출 수 약 300% 향상.",
            details: "Google Analytics와 Search Console을 활용한 트래픽 분석 및 SEO 전략 수립. 키워드 분석 및 콘텐츠 최적화를 통해 노출 수 증가 및 클릭률 상승을 유도.",
            technologies: ["SEO", "Google Analytics", "Search Console", "Performance Monitoring"],
          }
   
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
        logo: "/KnowhowLogotype.png",
        role: "FE Engineer | Technical PM",
        period: "2024",
        description:
          "Knowhow 모바일 앱 개발 및 CEO Staff 프로젝트 수행.",
        projects: [
          {
            id: "knowhow-app",
            name: "노하우 모바일 앱",
            image: "/placeholder.svg?height=400&width=600",
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
        skills: ["Vue.js", "Next.js", "TypeScript", "Performance Optimization", "State Management"],
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        company: "주식회사 위티",
        logo: "/KnowhowLogotype.png",
        role: "FE Engineer | Technical PM",
        period: "2023",
        description:
          "Knowhow Space B2B 프로젝트 및 SEO 최적화 프로젝트 수행.",
        projects: [
          {
            id: "knowhow-space",
            name: "Knowhow Space",
            image: "/placeholder.svg?height=400&width=600",
            description: "B2B 기업 맞춤형 SaaS 페이지 개발.",
            details: "다양한 기업 보육 기관에 맞춤형으로 제공할 수 있는 플랫폼을 개발하여 4000만원의 매출 달성. Chart.js를 활용한 성과 데이터 시각화 및 반응형 디자인 적용.",
            technologies: ["Vue.js", "TypeScript", "Pinia", "Windi CSS"],
            link: "https://dashboard.knowhow.ceo/signin",
          },
          {
            id: "knowhow-global",
            name: "글로벌 확장 프로젝트",
            image: "/placeholder.svg?height=400&width=600",
            description: "다국어 지원 및 글로벌 사용자 경험 개선을 위한 프로젝트 수행.",
            details: "기존 서비스의 글로벌 진출을 위해 다국어 지원 및 UI/UX 개선을 진행. SEO 최적화를 통해 해외 유입을 증대하고, 현지화된 콘텐츠 제공 전략을 수립.",
            technologies: ["Nuxt3", "Vue3", "TypeScript", "Pinia", "WindiCSS"],
            link: "https://knowhow.ceo/",
          },
        ],
        skills: ["Vue.js", "TypeScript", "SEO", "Performance Optimization", "Data Visualization"],
      },
    ],
  },
];

