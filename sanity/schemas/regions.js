import { regions } from '../config';
export default {
  name: 'regions',
  title: 'Regions',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: regions.map((region) => ({
      title: region.title,
      value: region.id,
    })),
  },
};
