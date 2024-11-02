export interface Homepage {
  headingText: string;
  projectCards: ProjectCard[];
  projectText: string;
  projectTitle: string;
}

interface ProjectCard {
  _key: string;
  brand: string;
  image: Image;
  tags: string[];
  title: string;
}

export interface Image {
  _type: string;
  asset: Asset;
}

interface Asset {
  _ref: string;
  _type: string;
}
