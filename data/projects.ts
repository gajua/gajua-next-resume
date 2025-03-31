export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export const projects: Project[] = [
  {
    title: "Doki Bot",
    description:
      "Slack과 Notion API를 연동하여 팀원이 자연어로 질문하면 관련 문서를 즉시 검색해주는 자동화 봇.",
    tags: ["Node.js", "TypeScript", "Slack API", "Notion API", "Ngrok"],
    image: "https://private-user-images.githubusercontent.com/101968934/428609184-c0c8635a-3191-4597-9af9-7bc526f54aea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM0MjU3MzAsIm5iZiI6MTc0MzQyNTQzMCwicGF0aCI6Ii8xMDE5Njg5MzQvNDI4NjA5MTg0LWMwYzg2MzVhLTMxOTEtNDU5Ny05YWY5LTdiYzUyNmY1NGFlYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMzMVQxMjUwMzBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iODBhMGQzOTkzNTI2MDdlYmM2NmUzNDdlN2VlYjcwMjM0NTgwZmI5NzRlYmExMWNlMjliODZkZWQxNWIzODVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.EhMPs3lU_M97fTDhyDZaNHw5IEZbpQ0aUZnh9cArPiQ",
    link: "https://ethereal-comb-6a0.notion.site/Doki-Bot-aka-1c7f3f8653c78010a06eccf19dcf132e?pvs=4",
  },
  {
    title: "Drag It",
    description:
      "VS Code에서 선택한 텍스트를 OpenAI API에 전송하고, AI 응답을 즉시 코드 편집기에 삽입하는 확장 프로그램.",
    tags: ["TypeScript", "VS Code Extension", "OpenAI API", "Axios", "dotenv"],
    image: "https://sewonisamazing.gallerycdn.vsassets.io/extensions/sewonisamazing/drag-it/1.2.0/1686036527813/Microsoft.VisualStudio.Services.Icons.Default",
    link: "https://marketplace.visualstudio.com/items?itemName=sewonisamazing.drag-it&ssr=false#overview",
  },
];
