import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity';

const options = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production', // or the name you chose in step 1
  useCdn: process.env.NODE_ENV === 'production',
};

export const urlFor = (source) => createImageUrlBuilder(options).image(source);

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(options);

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...options,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {},
});

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(options);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...options,
  useCdn: false,
  token:
    'skuwpQXAQGVfXtk61C3YkXWHKAdbHPnWnCSVYWfUtxAzy5kpaVpFk78DmLs8Vt8YGZs1PxsiJtcicuGdyFwBCukjIKZ6Xp4vY5XPgJlYZXfSjpoxq4RWKhtltDuRFFjqdURLhBwUsto3ArnmAHICYjUmX8NMTXFgo01FcJoUQIfRkuilVk4d',
});

export const getClient = (isPreview: boolean) =>
  isPreview ? previewClient : sanityClient;
