export type CharacterByEventsCardProps = {
  attributionText: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  characters: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  series: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  next: {
    resourceURI: string;
    name: string;
  };
  previous: {
    resourceURI: string;
    name: string;
  };
};
