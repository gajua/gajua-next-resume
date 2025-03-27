export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
}

export const projects: Project[] = [
  {
    title: "결제 SDK",
    description: "토스페이먼츠의 차세대 결제 SDK 개발. 성능과 사용성을 개선하여 전환율 향상에 기여.",
    tags: ["React", "TypeScript", "MSW"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "자산 대시보드",
    description: "뱅크샐러드의 자산 관리 대시보드. 복잡한 금융 데이터를 직관적으로 시각화.",
    tags: ["React", "D3.js", "Redux"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "금융 상품 추천",
    description: "사용자 맞춤형 금융 상품 추천 시스템. 개인화된 상품 제안으로 전환율 개선.",
    tags: ["Next.js", "TypeScript", "GraphQL"],
    image: "/placeholder.svg?height=600&width=800",
  },
] 