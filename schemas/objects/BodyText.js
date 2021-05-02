export default {
    title: 'BodyText',
    name: 'bodyText',
    type: 'object',
    fields: [
        {
            title: 'title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Body',
            name: 'body',
            type: 'blockContent',
        },
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
            return {
                title: `Body text: ${title}`
            }
        }
    }
  }