const prefix = '/educations';
export interface Education {
  icon: string;
  degree: string;
  major: string;
  school: string;
  period: string;
}
export const educations: Education[] = [
  {
    icon: `${prefix}/georgia_tech.jpeg`,
    degree: 'Master',
    major: 'Computer Science',
    school: 'Georgia Tech-Europe',
    period: '2025/08~now',
  },
  {
    icon: `${prefix}/ntu.png`,
    degree: 'Master',
    major: 'Electrical Engineering',
    school: 'National Taiwan University',
    period: '2021/09~2023/08',
  },
  {
    icon: `${prefix}/ntu.png`,
    degree: 'Bachelor',
    major: 'Materials Science and Engineering',
    school: 'National Taiwan University',
    period: '2017/09~2021/06',
  },
];
