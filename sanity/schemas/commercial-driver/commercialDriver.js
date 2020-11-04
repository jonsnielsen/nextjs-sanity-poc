export default {
  name: 'commercialDriver',
  title: 'Commercial Driver',
  type: 'document',
  fields: [
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
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'meta',
    },
  ],
  preview: {
    select: {
      slug: 'slug',
    },
    prepare({ slug }) {
      return {
        title: slug.current,
      };
    },
  },
};
