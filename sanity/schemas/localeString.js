import { regions, regionLanguageMap } from '../config';

export default {
  name: 'localeString',
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
        type: 'string',
      };
    }),
  })),
};
