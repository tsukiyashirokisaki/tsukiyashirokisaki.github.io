const prefix = '/experiences';
export interface Experience {
  icon: string;
  title: string;
  description: string;
  period: string;
}
export const experiences: Experience[] = [
  {
    icon: `${prefix}/aics.png`,
    title: 'AICS Software Engineer',
    description:
      'Construct automation-test pipelines, develop front-end features, and contribute on a copilot extension.',
    period: '2023/09~2025/08',
  },
  {
    icon: `${prefix}/yahoo.png`,
    title: 'Search & Ads Intern',
    description: 'Build a hot spot extraction system.',
    period: '2022/07~2022/08',
  },
  {
    icon: `${prefix}/qct.png`,
    title: '5G Jump Intern',
    description: 'Construct an AI platform.',
    period: '2021/07~2021/11',
  },
  {
    icon: `${prefix}/retailingdata.webp`,
    title: 'Computer Vision Intern',
    description: 'Refactor a smart selling system.',
    period: '2021/04~2021/09',
  },
];
