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
    year: "2021-present",
    items: [
      {
        company: "토스페이먼츠",
        logo: "/placeholder.svg?height=80&width=80", // 토스페이먼츠 로고로 교체 필요
        role: "Fontend Engineer",
        period: "2021.07 - 2023.06",
        description: "토스페이먼츠의 결제 서비스 프론트엔드 개발을 담당했습니다. 결제 SDK와 관리자 도구 개발에 참여했습니다.",
        projects: [
          {
            id: "toss-1",
            name: "결제 SDK 개발",
            image: "/placeholder.svg?height=400&width=600",
            description: "웹 결제 SDK의 성능 최적화 및 새로운 기능 개발을 진행했습니다.",
          },
          {
            id: "toss-2",
            name: "관리자 도구 개발",
            image: "/placeholder.svg?height=400&width=600",
            description: "가맹점 관리자를 위한 결제 관리 도구를 개발했습니다.",
          },
        ],
        skills: ["React", "TypeScript", "Next.js", "GraphQL", "MSW"],
      },
    ],
  },
  {
    year: "2019-2021",
    items: [
      {
        company: "뱅크샐러드",
        logo: "/placeholder.svg?height=80&width=80", // 뱅크샐러드 로고로 교체 필요
        role: "Fontend Engineer",
        period: "2019.03 - 2021.06",
        description: "뱅크샐러드의 웹 서비스 개발을 담당했습니다. 금융 데이터 시각화와 사용자 경험 개선에 주력했습니다.",
        projects: [
          {
            id: "banksalad-1",
            name: "자산 대시보드",
            image: "/placeholder.svg?height=400&width=600",
            description: "사용자의 금융 자산을 한눈에 볼 수 있는 대시보드를 개발했습니다.",
          },
          {
            id: "banksalad-2",
            name: "금융 상품 추천",
            image: "/placeholder.svg?height=400&width=600",
            description: "사용자 맞춤형 금융 상품 추천 시스템을 구현했습니다.",
          },
        ],
        skills: ["React", "TypeScript", "Redux", "D3.js", "Styled Components"],
      },
    ],
  },
] 