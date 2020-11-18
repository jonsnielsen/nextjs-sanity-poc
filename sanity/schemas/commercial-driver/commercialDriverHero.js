export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'localeImage',
    },
  ],
};
