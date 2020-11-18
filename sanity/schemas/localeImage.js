import { regions, regionLanguageMap } from '../config';

export default {
  name: 'localeImage',
  type: 'object',
  options: { collapsible: true },
  fields: regions.map((region) => ({
    title: region.title,
    name: region.id,
    options: { collapsible: true },
    type: 'object',
    fields: regionLanguageMap[region.id].map((language) => {
      return {
        title: language.title,
        name: language.id,
        type: 'image',
        fields: [
          {
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
            options: {
              isHighlighted: true, // <-- make this field easily accessible
            },
          },
        ],
      };
    }),
  })),
};
