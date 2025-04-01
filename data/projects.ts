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
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2Ff4101201-cc9c-4227-a26b-1b4590380007%2F3a2584df-13a1-4f3b-814a-ea03252a13bd%2FImageGen_2025%E1%84%82%E1%85%A7%E1%86%AB_3%E1%84%8B%E1%85%AF%E1%86%AF_31%E1%84%8B%E1%85%B5%E1%86%AF_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_09_21_33.png/size/w=250?exp=1743521379&sig=E8eyCBA6hB7BhRlxRwAuBQzmH59mhpAMMogcMXr-q-8&id=1c7f3f86-53c7-8010-a06e-ccf19dcf132e&table=block",
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
