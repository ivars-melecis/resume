function getHomeData() {
  return {
    name: 'Ivars Melecis',
    homeSections: ['Home', 'About', 'Projects', 'Contact'],
    socialLinks: [
      {
        link: '//www.linkedin.com/in/ivars-melecis',
        icon: '#linkedin-logo',
        title: 'LinkedIn',
        newTab: true
      },
      {
        link: '//codepen.io/Melecis',
        icon: '#codepen-logo',
        title: 'Codepen',
        classes: 'codepen-link',
        newTab: true
      },
      {
        link: '//github.com/ivars-melecis',
        icon: '#github-logo',
        title: 'Github',
        classes: 'github-link'
      }
    ],
    about: {
      title: 'About',
      content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Quam fuga reiciendis, illum eos veritatis assumenda rerum iure error laborum voluptatem cumque ipsam, officiis molestias praesentium dicta impedit id!', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sint at cum architecto magni mollitia odit necessitatibus et itaque soluta facilis repellat aut ratione ipsum velit consectetur, sapiente voluptate facere!'],
      image: {
        alt: 'Ivars Melecis',
        loc: '/im.jpg'
      }
    },
    projects: {
      title: 'Projects',
      items: [
        {
          id: 0,
          image: './1.png',
          content: 'this is my content 1',
          link: 'https://www.lindens.walsall.sch.uk/'
        },
        {
          id: 1,
          image: './2.png',
          content: 'this is my content 2',
          link: 'https://www.hucknallfha.co.uk/'
        },
        {
          id: 2,
          image: './3.png',
          content: 'this is my content 3',
          link: 'https://burton-hathlow-secondary-school.secure-primarysite.net/'
        }
      ]
    }
  };
}

module.exports = {
  getHomeData
};
