export type ImageDTO = {
  _type: string;
  altText: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type Image = {
  src: string;
  alt: string;
};
