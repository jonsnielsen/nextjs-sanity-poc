const API_URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/production/default`;

export const gqlFetch = async (query: string, previewToken?: string) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(previewToken && {
          Authorization: `Bearer ${previewToken}`,
        }),
      },
      body: JSON.stringify({
        query,
      }),
    });
    return response;
  } catch (e) {
    throw new Error(e);
  }
};
