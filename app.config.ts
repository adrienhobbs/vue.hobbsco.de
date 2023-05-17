export default defineAppConfig({
  docus: {
    title: 'Hobbsco.de | Vue Demos',
    description: 'A sandbox for hobbsco.de demos.',
    image: '/img/logo.svg',
    socials: {
      twitter: 'adrien_hobbs',
      github: 'adrienhobbs'
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'vue.hobbsco.de',
      owner: 'adrienhobbs',
      edit: false 
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      textLinks: [
        {
          href: 'https://hobbsco.de',
          text: 'hobbsco.de',
          target: '_blank'
        }
      ]
    }
  }
})
