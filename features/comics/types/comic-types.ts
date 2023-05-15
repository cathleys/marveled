export type ComicDetailsProps = {
  id: number;
  attributionText: string;
  copyright: string;
  title: string;
  description: string;
  format: string;
  pageCount: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  images: [
    {
      path: string;
      extension: string;
    }
  ];
  variants: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  prices: [
    {
      type: string;
      price: number;
    }
  ];
  creators: {
    items: [
      {
        name: string;
        role: string;
      }
    ];
  };
  series: {
    resourceURI: string;
    name: string;
  };
  textObjects: [
    {
      text: string;
    }
  ];
};
