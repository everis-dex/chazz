// ##############################
// #         PAGES
// ##############################

// Home page
export interface IHome {
  page: string;
  header: object;
  categories: object;
  projects: object;
  partners: object;
  footer: object;
}

// Home sections
export interface IHomeSection {
  title: string;
  subtitle: string;
}

export interface IHomeHeader extends IHomeSection {
  media: string;
}

export interface IHomeProjects extends IHomeSection {
  more: string;
}

export interface IHomeFooter extends IHomeSection {
  offices: string;
  touch: string;
  studios: string;
  social: ISocial[];
}

// Work page
export interface IWork {
  page: string;
  title: string;
  subtitle: string;
}

// ##############################
// #         COMPONENTS
// ##############################

export interface ISocial {
  name: string;
  link: string;
}

export interface ICategory {
  id: number;
  title: string;
  section: string;
  body: string;
}

export interface IProject {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  body: string;
  incarousel: string;
}

export interface IPartner {
  id: number;
  name: string;
  scale: string;
  logo: string;
  website: string;
}

export interface IOffice {
  id: number;
  city: string;
  phone: string;
  email: string;
  address: string;
}

export interface IStudio {
  id: number;
  city: string;
}

export interface ITouch {
  id: number;
  title: string;
  email: string;
}

export interface ISlide {
  title: string;
  subtitle: string;
  image: string;
}
