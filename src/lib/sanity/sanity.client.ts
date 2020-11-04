import sanityClient from '@sanity/client';

const options = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
};

const client = sanityClient(options);
export const previewClient = sanityClient({
  ...options,
  token: process.env.SANITY_API_TOKEN,
});

export default client;
