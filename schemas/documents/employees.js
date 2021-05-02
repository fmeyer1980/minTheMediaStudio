export default {
    title: 'Employees',
    name: 'employees',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'Position',
            name: 'position',
            type: 'string',
        },
        {
            title: 'Mail',
            name: 'mail',
            type: 'string',
        },
        {
            title: 'Main image',
            name: 'mainImage',
            type: 'mainImage',
        },
    ],
    preview: {
        select: {
          title: 'name',
          subtitle: 'position',
          media: 'mainImage',
        }
    }
  }
  