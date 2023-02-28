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

export interface IFooter {
  title: string;
  offices: IOffice[];
  touch: ITouch[];
  studios: IStudio[];
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
  header: IPageHeader;
  projects: IServicesProjects;
}

export interface IPageHeader {
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
  header: IPageHeader;
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

// Project sections
export interface IProjectSection {
  type: string;
  content: ISectionClaim | ISectionFWImage | ISectionColumn[];
}

export interface ISectionClaim {
  text: string;
  margin: boolean;
}

export interface ISectionFWImage {
  image: string;
  margin: boolean;
  overlappedText: string;
  caption: string;
}

export interface ISectionColumn {
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
  city: string;
  phone: string;
  email: string;
  address: string;
}

export interface IStudio {
  city: string;
}

export interface ITouch {
  title: string;
  email: string;
}

export interface ISocial {
  name: string;
  link: string;
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
  details: { subtitle: string; author: string; socials: IThoughtSocial[] };
  socials: IThoughtSocial[];
  body: string;
  id: number;
}

export interface IThoughtSocial {
  name: string;
  icon: string;
  link: string;
}
