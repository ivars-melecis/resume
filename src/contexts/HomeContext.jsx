import React, { createContext, useReducer, useEffect } from 'react';
import { homeReducer } from '../reducers/homeReducer';

export const HomeContext = createContext();

const HomeContextProvider = (props) => {
  const [data, dispatch] = useReducer(homeReducer, {
    siteName: 'Ivars Melecis',
    profession: 'Web Developer',
    cvFile: 'cv-ivars-melecis.pdf',
    sections: ['home', 'about', 'skills', 'projects'],
    contacts: [
      {
        title: 'Phone: ',
        icon: '#phone',
        content: '+447754527480',
        type: 'phone',
      },
      {
        title: 'Email: ',
        icon: '#email',
        content: 'ivars.melecis@gmail.com',
        type: 'email',
      },
    ],
    socialLinks: [
      {
        link: '//www.linkedin.com/in/ivars-melecis',
        icon: '#linkedin-logo',
        title: 'LinkedIn',
        newTab: true,
      },
      {
        link: '//codepen.io/Melecis',
        icon: '#codepen-logo',
        title: 'Codepen',
        classes: 'codepen-link',
        newTab: true,
      },
      {
        link: '//github.com/ivars-melecis',
        icon: '#github-logo',
        title: 'Github',
        classes: 'github-link',
      },
    ],
    about: {
      title: 'About Me',
      content: [
        `Hi. I am Ivars. I like to leave my footprint on the web by creating beautiful websites.`,

        `I call VS Code and Codepen my digital home where I spend most of the day creating UI components designed by my colleagues.`,

        `Hard-working personality with great attention to detail and common sense. Enjoy working with everything that has an opening and closing tags.`,

        `You could describe me as a patient and hard-working person who likes to reach KPI's and deliver quality code without shortcuts.`,
      ],
      image: {
        alt: 'Ivars Melecis',
        loc: '/im.jpg',
      },
    },
    skills: {
      title: 'Skills',
      content: [
        'Toys shown below are some I like to play with. Feel free to click on the title to reveal secrets.',
        'MERN stack is set of tools I would like to use more as I like the fact that Javascript can be used across the board.',
      ],
      data: [
        {
          _id: 0,
          title: 'HTML5',
          descr: '5+ years experience using plain HTML5.',
          isExpanded: true,
        },
        {
          _id: 1,
          title: 'SCSS',
          descr: 'Entry level. Using in development where possible.',
          isExpanded: false,
        },
        {
          _id: 2,
          title: 'CSS3',
          descr: '5+ years experience using plain CSS3.',
          isExpanded: false,
        },
        {
          _id: 3,
          title: 'Jquery',
          descr:
            'Intermediate level. Used extensively before I moved to vanilla JS in 2016.',
          isExpanded: false,
        },
        {
          _id: 4,
          title: 'MongoDB',
          descr: 'Intermediate level. Using for my personal projects.',
          isExpanded: false,
        },
        {
          _id: 5,
          title: 'Mysqli',
          descr: 'Intermediate level. Used on live projects.',
          isExpanded: false,
        },
        {
          _id: 6,
          title: 'PHP',
          descr:
            'Intermediate level. Used extensively before I moved to the MERN stack in 2018.',
          isExpanded: false,
        },
        {
          _id: 7,
          title: 'Wordpress',
          descr: 'Using daily since 2019.',
          isExpanded: false,
        },
        {
          _id: 8,
          title: 'Github',
          descr:
            'Intermediate level. Use all the usual commands to store and version my code.',
          isExpanded: false,
        },
        {
          _id: 9,
          title: 'Node.js',
          descr: 'Intermediate level. Used extensively since 2018.',
          isExpanded: false,
        },
        {
          _id: 10,
          title: 'Express.js',
          descr: 'Intermediate level. Using to build MERN applications.',
          isExpanded: false,
        },
        {
          _id: 11,
          title: 'Adobe Photoshop',
          descr: 'Cut , slice, export - repeat. Using extensively since 2015',
          isExpanded: false,
        },
        {
          _id: 12,
          title: 'React.js',
          descr: 'Using this great library since 2018.',
          isExpanded: false,
        },
        {
          _id: 13,
          title: 'Puppeteer',
          descr: 'Used here and there to automate some of my day to day jobs.',
          isExpanded: false,
        },
        {
          _id: 14,
          title: 'JWT',
          descr:
            'First choice when it comes to authentification and authorization',
          isExpanded: false,
        },
      ],
    },
    projects: {
      title: 'Projects',
      content: [
        'Below are some of my projects completed using various tools.',
        'Please check out my Codepen or GitHub accounts for more projects.',
      ],
      items: [
        {
          id: 0,
          siteName: 'Emintell',
          image: 'emintell.png',
          content: [
            'Lovely Wordpress powered website that is packed with bespoke features to enhance user experience.',
          ],
          link: '//www.emintell.com/',
          highlights: [
            {
              bullet: 'Sticky top bar',
              description:
                'Site menu, logo and contact details always remain at the top of the screen.',
            },
            {
              bullet: 'Custom content filter',
              description:
                'Filter that allows to refine results based on set filters. Powered by JavaScript.',
            },
            {
              bullet: 'Logo slider',
              description: 'Mobile and gesture friendly logo slider.',
            },
          ],
        },
        {
          id: 1,
          siteName: 'Hucknall Flying High Academy',
          image: 'hucknall-flying-high-academy.png',
          content: [
            'Interactive website created with several animations to enrich user experiance whilst ensuring that all content is easy to access.',
          ],
          link: 'https://www.hucknallfha.co.uk',
          highlights: [
            {
              bullet: 'Fully responsive',
            },
            {
              bullet: 'Scroll to content CTA',
            },
            {
              bullet: 'SVG spritesheet usage',
              description:
                'Using SVG spritesheet allows to reduce requests made to render content and grants great user experience due to render quality',
            },
            {
              bullet: 'Keyframes animation',
              description:
                "Who doesn't like floating kites, moving clouds or flying spitfire?",
            },
            {
              bullet: 'Elements cycling in view with interval',
              description:
                'This technique is used to reduce space taken on the page or to link relevant content together by showing them synchronously.',
            },
          ],
        },

        {
          id: 2,
          siteName: 'Marlborough Primary School',
          image: 'marlborough-primary-school.png',
          content: [
            'Graphics based website. CSS is great - but it cannot do everything. This is where scrubbed graphics shine.',
          ],
          link: 'https://www.mps.bham.sch.uk/',
          highlights: [
            {
              bullet: 'PSD slicing',
              description:
                'Building this type of website requires skill to cut photoshop file in order to convert it to fully working website.',
            },
            {
              bullet: 'extraordinary shape slideshow',
            },
            {
              bullet: 'Image spritesheet usage',
              description:
                'Using image spritesheet reduces requests made to the server as well as removes delays between initial view and hover effect.',
            },
            {
              bullet: 'Ability to use graphics on dynamic size elements',
              description:
                'This requires slicing graphics in a way where they can "grow" together with content.',
            },
          ],
        },
        {
          id: 3,
          siteName: 'West Bridgford Junior School',
          image: 'west-bridgford-junior-school.png',
          content: [
            'Beautiful website built with HTML, CSS, Jquery ( client side only ).',
            'This website complements with few trending features such as reverse sticky navigation, easy to access content block anchors, parallax effect and more...',
          ],
          link: 'https://www.wbjs.com/',
          highlights: [
            {
              bullet: 'Reverse sticky menu',
              description:
                'Menu is fixed on the top of the page and reveals header as user scrolls up.',
            },
            {
              bullet:
                'Custom made slider with navigation arrows and progress bar',
            },
            {
              bullet: 'Easy to access section menu',
              description: 'Allows to navigate the page without scrolling.',
            },
            {
              bullet: 'Custom made staff section',
            },
            {
              bullet: 'Parallax effect',
              description:
                'This feature allows user to view large images on scroll and simply looks great.',
            },
          ],
        },
        {
          id: 4,
          siteName: 'Leading Learners Academy Trust',
          image: 'leading-learners.png',
          content: ['Modern and function website.'],
          link: 'https://www.leadinglearnersmat.co.uk/',
          highlights: [
            {
              bullet: 'Extraordinary shapes',
            },
            {
              bullet: 'Responsive content slider',
            },
            {
              bullet: 'Fixed background effect',
              description:
                'Adding that extra dimension to the website. ( Please view any contents page to see effect )',
            },
            {
              bullet: 'Location identifier',
              description:
                'Highlighted current topic on main navigation to help user identify page they are on.',
            },
          ],
        },
        {
          id: 5,
          siteName: 'John Clifford Primary & Nursery School',
          image: 'john-clifford-primary-and-nursery-school.png',
          content: [
            "Websites full of features don't necessarily need to be long in terms of scrolling. Here is a non-scrolling website that includes multiple content based features in a nice looking fly-out triangle shape.",
          ],
          link: 'https://www.johncliffordschool.com/',
          highlights: [
            {
              bullet: 'Non-scrolling',
              description:
                'Building scalable content blocks to ensure the fit in smallest supported screen without scrollbars.',
            },
            {
              bullet: 'fly-out content',
              description: 'Fly-out content made with Jquery.',
            },
            {
              bullet: 'Icon fonts',
              description: 'Icons created and used as a font.',
            },
          ],
        },
      ],
    },
  });

  useEffect(() => {
    dispatch({ type: 'ADD_MESSAGE', msg: 'HI' });
  }, []);

  return (
    <HomeContext.Provider value={{ data, dispatch }}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
