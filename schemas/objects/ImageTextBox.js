export default {
    title: 'Image with text',
    name: 'imageTextBox',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'mainImage'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'blockContent'
        },
        {
            title: 'Text left',
            name: 'textLeft',
            type: 'boolean'
        },
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
            return {
                title: `Image with text: ${title}`
            }
        }
    }
  }