// const previewSecret = 'MY_VERY_SECRET_SECREY'; // Copy the string you used for SANITY_PREVIEW_SECRET
// const projectUrl = 'http://localhost:3000';

export default function resolveProductionUrl(document) {
  return `${process.env.SANITY_STUDIO_PROJECT_URL}/commercial-drivers/commercialDriverPreview?slug=${document.slug.current}&secret=${process.env.SANITY_STUDIO_PREVIEW_TOKEN}`;
}
