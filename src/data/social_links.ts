const prefix = '/social_links';
export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}
export const social_links: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: `${prefix}/linkedin.webp`,
    url: 'https://www.linkedin.com/in/po-hsun-stanley-lin-02a312158/',
  },
  {
    name: 'Github',
    icon: `${prefix}/github.png`,
    url: 'https://github.com/tsukiyashirokisaki',
  },
  {
    name: 'Gmail',
    icon: `${prefix}/gmail.png`,
    url: 'mailto:bokuwa08201230@gmail.com',
  },
  {
    name: 'Resume',
    icon: `${prefix}/resume.jpg`,
    url: 'https://drive.google.com/file/d/1dxmGFRZd87sqwqRo7k6BFa9Lh9i-nw21/view?usp=sharing',
  },
];
