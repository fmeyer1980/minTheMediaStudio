export default {
    title: 'Cases',
    name: 'cases',
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
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            title: 'Services',
            name: 'services',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              layout: 'tags'
            }
          },
        {
            title: 'Headline',
            name: 'headline',
            type: 'string',
        },
        {
            title: 'Summary',
            name: 'summary',
            type: 'string',
        },
        {
            title: 'Main image',
            name: 'mainImage',
            type: 'mainImage',
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
          subtitle: 'headline',
          media: 'mainImage',
        }
    }
  }
  