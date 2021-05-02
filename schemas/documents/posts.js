export default {
    title: 'Posts',
    name: 'posts',
    type: 'document',
    fields: [
        {
            title: 'Meta',
            name: 'meta',
            type: 'meta',
        },
        {
            title: 'Categories',
            name: 'categoriesPage',
            type: 'array',
            of: [
                { type: 'reference', to: { type: 'categories'}}
            ],
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
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              layout: 'tags'
            }
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
            description: 'This can be used to schedule post for publishing'
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'employees' }],
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
        },
    ],
    preview: {
        select: {
          title: 'name',
          subtitle: 'headline',
          media: 'mainImage',
        }
    }
  }
  