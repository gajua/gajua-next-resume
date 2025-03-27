export interface IntroItem {
  title: string
  description: string
  image: string
  link?: {
    text: string
    url: string
  }
}

export const introItems: IntroItem[] = [
  {
    title: "새로운 트렌드에 빠르게 적응하고 활용합니다.",
    description: "최신 개발 트렌드를 직접 경험하며, 사내 동료들에게 적극적으로 공유하고 추천하는 것을 즐깁니다.",
    image: "/placeholder.svg?height=600&width=600&text=Trends",
  },
  {
    title: "개인의 성장이 곧 팀의 성장임을 자시합니다.",
    description: "사내 개발 스터디를 통한 꾸준한 성장을 하였으며, 서비스 개선에 기여하였습니다.",
    link: {
      text: "개발 스터디",
      url: "https://www.notion.so/152f3f8653c780ac92f8dfe103b365a0?pvs=21",
    },
    image: "/placeholder.svg?height=600&width=600&text=Growth",
  },
  {
    title: "비즈니스적 관점을 바탕으로 유저 최적화된 아이디어를 제안합니다.",
    description:
      "기획팀원과 협업하여 SEO 개선을 위한 콘텐츠를 직접 기획·개발했으며, 이를 통해 Google 사이트 노출수를 3,000회 이상 증가시킨 경험이 있습니다.",
    image: "/placeholder.svg?height=600&width=600&text=Business",
  },
] 