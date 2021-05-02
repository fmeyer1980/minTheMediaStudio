export default {
    title: 'Home',
    name: 'home',
    type: 'document',
    fields: [
      {
        title: 'Meta',
        name: 'meta',
        type: 'meta'
      },
      {
        title: 'Intro',
        name: 'intro',
        type: 'object',
        fields: [
            {
              title: 'Headline',
              name: 'headline',
              type: 'string'
            },
            {
              title: 'Text',
              name: 'text',
              type: 'string'
            },
            {
              title: 'Featured pages',
              name: 'featuredPages',
              type: 'array',
              of: [
                  { type: 'reference', to: { type: 'pages'}},
              ],
            },
            {
              title: 'Link text',
              name: 'linkText',
              type: 'string'
            },
            {
              title: 'Link url',
              name: 'linkUrl',
              type: 'string'
            }
        ],
      },
      {
        title: 'Featured cases',
        name: 'featuredCases',
        type: 'array',
        of: [
            { type: 'reference', to: { type: 'cases'}}
        ],
      },
      {
        title: 'Featured post',
        name: 'featuredPost',
        type: 'reference',
        to: { type: 'posts'}
      },
      {
        title: 'About',
        name: 'about',
        type: 'object',
        fields: [
          {
            title: 'Headline',
            name: 'headline',
            type: 'string'
          },
          {
            title: 'Text',
            name: 'text',
            type: 'text'
          },
          {
            title: 'Link',
            name: 'link',
            type: 'reference',
            to: [
              { type: 'pages'},
              { type: 'posts'},
              { type: 'cases'}
            ],
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'meta.title'
      }
    }
  }
  