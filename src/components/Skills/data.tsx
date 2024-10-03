import GitlabIcon from '../icons/GitlabIcon';
import HtmlIcon from '../icons/HtmlIcon';
import JiraIcon from '../icons/JiraIcon';
import NodeIcon from '../icons/NodeIcon';
import NpmIcon from '../icons/NpmIcon';
import ReactIcon from '../icons/ReactIcon';
import SFCCIcon from '../icons/SFCCIcon';
import TypeScriptIcon from '../icons/TypeScriptIcon';
import ViteIcon from '../icons/ViteIcon';

type SkillCategory = {
  Icon: React.ReactElement;
  title: string;
  skills: Skill[];
  tileClass: string | null;
};

type Skill = {
  id: string;
  title: string;
  description: string | null;
};

export const skillsData: Array<SkillCategory> = [
  {
    Icon: <TypeScriptIcon />,
    title: 'Programming languages',
    tileClass: null,
    skills: [
      {
        id: 'skill-ts',
        title: 'JavaScript & TypeScript',
        description:
          'Proficient in modern ES6+ JavaScript and TypeScript for writing scalable, maintainable, and strongly-typed applications.'
      }
    ]
  },
  {
    Icon: <ReactIcon />,
    title: 'Front-End Frameworks',
    tileClass: 'row-span-2 sm:col-span-2 sm:row-span-1',
    skills: [
      {
        id: 'react',
        title: 'React',
        description:
          'Extensive experience developing component-based user interfaces (Redux, Tanstack/ReactQuery, Context API)'
      },
      {
        id: 'nextjs',
        title: 'NextJS',
        description:
          'Built server-side rendered and statically generated websites using Next.js'
      },
      {
        id: 'vuejs',
        title: 'VueJS',
        description:
          'Familiar with building interactive web applications using Vue and Vuex for state management.'
      }
    ]
  },
  {
    Icon: <NodeIcon />,
    title: 'Back-End Development',
    tileClass: null,
    skills: [
      {
        id: 'nodejs',
        title: 'NodeJS',
        description:
          'Developed GraphQL APIs for flexible, efficient data querying.'
      },
      {
        id: 'graphql',
        title: 'GraphQL',
        description:
          'Designed and implemented a GraphQL API to optimize data fetching and improve app performance.'
      }
    ]
  },
  {
    Icon: <ViteIcon />,
    title: 'Build Tools & Testing',
    tileClass: null,
    skills: [
      {
        id: 'vite-webpack',
        title: 'Vite, Webpack',
        description:
          'Used Vite for fast development builds and efficient bundling of modern JavaScript apps.'
      },
      {
        id: 'vitest',
        title: 'Vitest & Jest:',
        description:
          'Writing unit, integration, and snapshot tests for JavaScript/TypeScript applications to ensure code reliability and coverage.'
      }
    ]
  },
  {
    Icon: <GitlabIcon />,
    title: 'Version Controls & CI/CD',
    tileClass: 'row-span-2',
    skills: [
      {
        id: 'gitlab',
        title: 'GitLab, Github',
        description:
          'Managed code repositories, set up version control best practices, and configured CI/CD pipelines for automated testing and deployment.'
      },
      {
        id: 'docker',
        title: 'Docker',
        description:
          'Containerized applications for consistent environments across development and production'
      }
    ]
  },
  {
    Icon: <NpmIcon />,
    title: 'Package Managers',
    tileClass: null,
    skills: [
      {
        id: 'package-manager',
        title: 'npm, pnpm, bun',
        description: null
      }
    ]
  },
  {
    Icon: <HtmlIcon />,
    title: 'Web Technologies',
    tileClass: 'row-span-2',
    skills: [
      {
        id: 'html-css',
        title: 'HTML, CSS',
        description:
          'Strong foundation in semantic HTML and CSS for building accessible and responsive websites.'
      },
      {
        id: 'sass-less',
        title: 'Sass & Less',
        description:
          'Leveraged pre-processors like Sass and Less to write modular and reusable styles, improving maintainability.'
      }
    ]
  },
  {
    Icon: <JiraIcon />,
    title: 'Project Management & Collaboration Tools',
    tileClass: null,
    skills: [
      {
        id: 'jira',
        title: 'JIRA, Figma, Miro',
        description: null
      }
    ]
  },
  {
    Icon: <SFCCIcon />,
    title: 'Ecommerce platforms',
    tileClass: null,
    skills: [
      {
        id: 'ecom',
        title: 'Salesforce Commerce Cloud, BigCommerce',
        description: null
      }
    ]
  }
];
