const projectData = [
  {
    'id': 'intro',
    'featured': true,
    'theme': 'charcoal',
    'cover': {
      'title': 'Dennis Ramirez',
      'description': 'All things design and development.',
      'type': 'intro'
    }
  },
  {
    'id': 'starset',
    'featured': true,
    "theme": 'celestial-blue',
    'cover': {
      'title': 'StarsetOnline.com',
      'description': 'A website to promote teh album, Divisions',
      'type': 'static'
    },
    'detail': {
      'active': true,
      'title': 'StarsetOnline.com',
      'links': [
        {
          'url': 'https://starsetonline.com/',
          'label': 'View Website',
          'icon': 'fad fa-external-link'
        }
      ],
      'description': 'For the release of their album Divisions, Starset’s website was taken over \n' +
        'by the architecture and this is the thing.'
    }
  },
  {
    'id': 'punkgoes',
    'featured': true,
    "theme": 'razzmatazz-pink',
    'cover': {
      'title': 'Punk Goes MySpace',
      'description': 'A nostalgic throwback promoting Punk Goes Acoustic, Vol 3.',
      'type': 'static'
    },
    'detail': {
      'active': true,
      'title': 'Punk Goes MySpace',
      'links': [
        {
          'url': 'https://punkgoes.com',
          'label': 'View Website',
          'icon': 'fad fa-external-link'
        }
      ],
      'description': 'For the release of their album Divisions, Starset’s website was taken over \n' +
        'by the architecture and this is the thing.'
    }
  },
  {
    'id': 'walaapp',
    'featured': true,
    "theme": 'neon-carrot',
    'cover': {
      'title': 'Wala Financial App',
      'description': 'A cryptocurrency solution designed to help emerging markets in Africa.',
      'type': 'static'
    },
    'detail': {
      'active': false,
      'title': ''
    }
  },
  {
    'id': 'alchemy',
    'featured': true,
    "theme": 'sea-green',
    'cover': {
      'title': 'Alchemy Design System',
      'description': 'A suite of UI components and docs used to build the Wala App.',
      'type': 'static'
    },
    'detail': {
      'active': true,
      'title': '',
      'links': [
        {
          'url': 'https://starsetonline.com/',
          'label': 'View Github',
          'icon': 'fab fa-github'
        }
      ],
    }
  },
  {
    'id': 'unbranded',
    'featured': true,
    "theme": 'lavender-indigo',
    'cover': {
      'title': 'Unbranded Designs',
      'description': 'A crowdsourcing app for furniture design.',
      'type': 'static'
    },
    'detail': {
      'active': false,
      'title': ''
    }
  },
  {
    'id': 'walawebsite',
    'featured': false,
    'detail': {
      'active': true,
      'title': 'GetWala.com',
      'links': [
        {
          'url': 'https://getwala.com/',
          'label': 'View Website',
          'icon': 'fad fa-external-link'
        }
      ],
    }
  }
];

export default projectData;
