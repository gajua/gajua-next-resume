export interface Project {
  id: string
  name: string
  image: string
  description: string
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

export interface ExperienceYear {
  year: string
  items: ExperienceItem[]
}

export const experiences: ExperienceYear[] = [
  {
    year: "2024-present",
    items: [
      {
        company: "주식회사 위티",
        logo: "/KnowhowLogotype.png",
        role: "Frontend Engineer | Technical PM",
        period: "2024.02 - 현재",
        description: "GovTech 지원사업 및 신규 모바일 앱 개발을 주도하며, 사용자 경험 개선과 서비스 확장을 위한 기술적 리딩을 수행했습니다.",
        projects: [
          {
            id: "wit-2024-1",
            name: "CEO Staff (GovTech 지원사업 과제)",
            image: "/placeholder.svg?height=400&width=600",
            description: `
1.9억 원 규모 GovTech 지원사업 수행.
Full_Calendar 라이브러리를 활용한 지원사업 캘린더 기능 개발.
유저 맞춤형 관심 키워드 기반 온라인 뉴스 추천 기능 구현.`,
          },
          {
            id: "wit-2024-2",
            name: "노하우 : 스타트업의 모든 정보 (모바일앱)",
            image: "/placeholder.svg?height=400&width=600",
            description: `
Next.js, React 기반 모바일 앱 개발.
Recoil을 활용한 상태 관리 구조로 복잡한 데이터 흐름 간소화.
IntersectionObserver를 활용한 피드 무한스크롤 구현.
framer-motion의 dragElastic을 활용해 Bottom Sheet UI 개발.
웹뷰 환경 최적화 및 API 호출 구조 설계로 앱 성능 안정화.`,
          },
        ],
        skills: ["Next.js", "React", "TypeScript", "Recoil", "Tailwind CSS", "framer-motion", "Full_Calendar"],
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        company: "주식회사 위티",
        logo: "/KnowhowLogotype.png",
        role: "Frontend Engineer | Technical PM",
        period: "2023.04 - 2023.12",
        description: "B2B SaaS 및 커뮤니티 플랫폼 '노하우' 개발을 담당하며, SEO 최적화와 성능 개선을 주도했습니다.",
        projects: [
          {
            id: "wit-2023-1",
            name: "스타트업 커뮤니티 노하우",
            image: "/placeholder.svg?height=400&width=600",
            description: `
MVVM 패턴을 기반으로 Nuxt3, Vue3 환경에서 SPA 구조를 설계 및 개발.
SEO 최적화와 LCP 성능 개선을 통해 구글 평균 노출 수를 300% 향상.
Page Weight를 4.3MB → 2.2MB로 50% 감소시키며 성능 개선 주도.
일본 시장 진출을 위해 Line API 소셜 로그인, Google Translation API 기반 다국어 기능 개발.
광고 배너 관리 기능을 도입하여 업무 프로세스를 75% 이상 단축하고, 자체 광고 수익 확보.
KG 이니시스 정기 결제 기능을 포함한 유료 서비스 구축.`,
          },
          {
            id: "wit-2023-2",
            name: "Knowhow Space (기관 납품용 B2B 서비스)",
            image: "/placeholder.svg?height=400&width=600",
            description: `
Vue.js와 TypeScript 기반으로 다양한 기관에 맞춤형 제공 가능한 B2B SaaS 서비스 개발.
기관용 데이터 통계 대시보드, 성과 관리 페이지, 사용자 관리 기능을 포함한 주요 모듈 개발.
B2B 납품을 통해 약 4000만원 매출 달성.
Chart.js를 활용한 기업 성과 데이터 시각화 기능 구현.`,
          },
        ],
        skills: ["Nuxt3", "Vue3", "TypeScript", "Pinia", "WindiCSS", "Cypress", "Chart.js"],
      },
    ],
  },
];

