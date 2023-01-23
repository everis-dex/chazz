// ##############################
// #         PAGES
// ##############################

// Home page
export interface IHome {
  page: string;
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
  title: string;
  subtitle: string;
}

// Services page
export interface IServices {
  page: string;
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
  projectName: string;
  title: string;
  description: string;
  subtitle: string;
  body: string;
  incarrousel: boolean;
  media: IProjectMedia;
  caseInfo?: {
    title: string;
    services: string;
  };
  sections: {
    firstFWImagePath?: string;
    firstFWClaim?: string;
    secondFWImagePath?: string;
    firstTCSection?: {
      leftColumnIntro: string;
      rightColumn: {
        paragraphTitle: string;
        paragraph: string;
      };
    };
    thirthFWImagePath?: string;
    rightColumnOnlyInfo?: {
      paragraphTitle: string;
      paragraph: string;
    };
    fourthFWImageWithOverlappedText?: {
      imagePath: string;
      overlappedText: string;
    };
    secondFWClaim?: string;
    fifthFWImageWithCaption?: {
      imagePath: string;
      overlappedText: string;
    };
    sixthFWImagePath?: string;
    secondTCSection?: {
      leftColumn: {
        imagePath: string;
        caption: string;
      };
      rightColumn: {
        imagePath: string;
        caption: string;
      };
    };
    seventhFWImagePath?: string;
    eigthFWImageWithCaption?: {
      imagePath: string;
      caption: string;
    };
  };
}

export interface ISlide {
  id: number;
  title: string;
  subtitle: string;
  media: IProjectMedia;
  description: string;
  body: string;
  incarrousel: boolean;
}

export interface IProjectMedia {
  carrousel: string;
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
