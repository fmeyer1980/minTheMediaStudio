export default {
    title: 'Pages',
    name: 'pages',
    type: 'document',
    fields: [
      {
        title: 'Meta',
        name: 'meta',
        type: 'meta',
      },
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
              source: 'title',
              maxLength: 96,
          },
      },
      {
          title: 'Headline',
          name: 'headline',
          type: 'string',
      },
      {
          title: 'Main image',
          name: 'mainImage',
          type: 'mainImage',
      },
      {
          title: 'Summary',
          name: 'summary',
          type: 'string',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Page sections',
        description: 'Add, edit, and reorder sections',
        of: [
          { type: 'imageTextBox' },
          { type: 'bodyText' }
        ],
      },
      {
          name: 'body',
          title: 'Body',
          type: 'blockContent',
      },
      {
        title: 'CTA Text',
        name: 'ctaText',
        type: 'string',
        description: 'Overwrites global site CTA Text'
      }
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'headline'
      }
    },
  }
  