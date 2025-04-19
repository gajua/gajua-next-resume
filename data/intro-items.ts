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
    title: "사용자의 경험이 곧 서비스의 본질이라 믿습니다.",
    description: "트렌디한 UI 요소보다 중요한 것은 사용자의 맥락과 흐름입니다. 최신 UX 패턴과 마이크로 인터랙션을 적극적으로 탐구하며, 실제 프로젝트에 적용해 사용자 중심의 개선을 이어가고 있습니다.",
    image: "/images/introduce_img_1.png",
  },
  {
    title: "꾸준한 학습을 통해 더 나은 UX를 만들어냅니다.",
    description: "사내 개발 스터디를 통해 접근성과 반응성, 사용성에 대한 깊이 있는 고민을 나누며, 실제 서비스에서 더 나은 사용자 경험을 설계하고 구현해왔습니다.",
    link: {
      text: "개발 스터디",
      url: "https://www.notion.so/152f3f8653c780ac92f8dfe103b365a0?pvs=21",
    },
    image: "/images/introduce_img_2.png",
  },
  {
    title: "주도적 협업을 통해 사용자에게 닿는 디자인을 만듭니다.",
    description: "SEO 관점에서 UX 콘텐츠를 기획하고 직접 구현했습니다. 이를 통해 Google 사이트 노출수를 200% 이상 증가시켰으며, 단순한 트래픽 증가가 아닌 사용자와의 첫 접점을 효과적으로 설계한 결과입니다.",
    image: "/images/introduce_img_3.png",
  },
] 

