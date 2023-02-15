// ##############################
// #         PAGES
// ##############################

// Home page
export interface IHome {
  page: string;
  published: boolean;
  header: IHomeHeader;
  categories: IHomeSection;
  projects: IHomeProjects;
  partners: IHomeSection;
  footer: IHomeFooter;
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
  published: boolean;
  title: string;
  subtitle: string;
}

// Services page
export interface IServices {
  page: string;
  published: boolean;
  header: IServicesHeader;
  projects: IServicesProjects;
}

export interface IServicesHeader {
  title: string;
  subtitle: string;
  image: string;
}

export interface IServicesProjects {
  title: string;
  more: string;
}

export interface IThoughtsPage {
  page: string;
  published: boolean;
  title: string;
  image: string;
  categories: string[];
}

// Policies
export interface IPolicy {
  title: string;
  articles: IPolicyArticle[];
}

export interface IPolicyArticle {
  title: string;
  body: IPolicyBody[];
}

export interface IPolicyBody {
  type: string;
  content?: string;
  rows?: IPolicyTableRow[];
}

export interface IPolicyTableRow {
  name: string;
  host: string;
  expiration: string;
  service: string;
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
  summary: string;
  accordions: ICategoryAccordion[];
}

export interface ICategoryAccordion {
  title: string;
  content: string;
}

export interface IProject {
  id: number;
  title: string;
  details: IProjectDetails;
  caseInfo: {
    title: string;
    services: string;
    sections: IProjectSection[];
  };
}

export interface IProjectSection {
  type: string;
  image?: string;
  margin?: boolean;
  text?: string;
  overlappedText?: string;
  caption?: string;
  column?: IProjectSectionColumn[];
}

export interface IProjectSectionColumn {
  image: string;
  caption: string;
  title: string;
  body: string;
}
export interface IProjectDetails {
  description: string;
  subtitle: string;
  body: string;
  incarousel: boolean;
  media: IProjectMedia;
}

export interface ISlide {
  id: number;
  title: string;
  subtitle: string;
  media: IProjectMedia;
  description: string;
  body: string;
  incarousel: boolean;
}

export interface IProjectMedia {
  carousel: string;
  project: string;
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

export interface IThought {
  date: string;
  image: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  details: { subtitle: string; author: string };
  body: string;
  id: number;
}
