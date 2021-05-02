export default {
    title: 'Site Settings',
    name: 'siteSettings',
    type: 'document',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string'
      },
      {
        title: 'Site url',
        name: 'url',
        type: 'string'
      },
      {
        title: 'Mail',
        name: 'mail',
        type: 'string'
      },
      {
        title: 'Phone',
        name: 'phone',
        type: 'string'
      },
      {
        title: 'Cvr',
        name: 'cvr',
        type: 'string'
      },
      {
        title: 'Address',
        name: 'address',
        type: 'string'
      },
      {
        title: 'Zip',
        name: 'zip',
        type: 'string'
      },
      {
        title: 'CTA Text',
        name: 'ctaText',
        type: 'string'
      },
      {
        title: 'Newsletter',
        name: 'newsletter',
        type: 'object',
        options: {
          collapsible: true,
        },
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
            title: 'Condition text',
            name: 'conditionText',
            type: 'text'
          },
          {
            title: 'Image',
            name: 'image',
            type: 'mainImage'
          },
        ]
      }
    ]
  }
  