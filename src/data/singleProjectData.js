// Import images
import Image1 from '/src/assets/ui-project-1.jpg';
import Image2 from '/src/assets/web-project-2.jpg';
import Image3 from '/src/assets/mobile-project-2.jpg';
import Image4 from '/src/assets/mobile-project-1.jpg';
import Image5 from '/src/assets/web-project-1.jpg';
import Image6 from '/src/assets/ui-project-2.jpg';
import {  FiTwitter, FiLinkedin } from 'react-icons/fi';
// Import icons
// import { FaSquareXTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
export const singleProjectData = {
  ProjectHeader: {
    title: 'Project Management UI',
    publishDate: 'Feb 26, 2024',
    tags: 'UI / Frontend',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Kabul Project Management UI',
      img: Image1,
    },
    {
      id: 2,
      title: 'Kabul Project Management UI',
      img: Image2,
    },
    {
      id: 3,
      title: 'Kabul Project Management UI',
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Client',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'Biegon Ltd',
      },
      {
        id: 2,
        title: 'Services',
        details: 'UI Design , Frontend Development & Backend Development',
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://github.com/Charles4500',
      },
      {
        id: 4,
        title: 'Phone',
        details: '+254758431218',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
    Technologies: [
      {
        title: 'Tools & Technologies',
        techs: [
          'HTML',
          'CSS',
          'JavaScript',
          'React.js',
          'TailwindCSS',
          'Figma',
          'Python',
          'Flask',
          'PostgreSQL'
        ],
      },
    ],
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
      },
      {
        id: 2,
        details:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
      },
      {
        id: 3,
        details:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
      },
      {
        id: 4,
        details:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
      },
    ],
    SocialSharingHeading: 'Share This',
    SocialSharing: [
      {
        id: 1,
        name: 'Twitter',
        icon: 'twitter',
        url: 'https://x.com/CharlesBiegon3',
      },
      {
        id: 4,
        name: 'LinkedIn',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/charles-biegon-5667092b8/',
      }
    ],
  },
  RelatedProject: {
    title: 'Related Projects',
    Projects: [
      {
        id: 1,
        title: 'Mobile UI',
        img: Image4,
      },
      {
        id: 2,
        title: 'Web Application',
        img: Image5,
      },
      {
        id: 3,
        title: 'UI Design',
        img: Image6,
      },
      {
        id: 4,
        title: 'Kabul Mobile App UI',
        img: Image3,
      },
    ],
  },
};
