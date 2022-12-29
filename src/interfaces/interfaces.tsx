export interface IHome {
  id?: number;
  intro?: string;
  subintro?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  header?: object;
  categories?: object;
  partners?: object;
  footer?: object;
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
}

export interface IPartner {
  id: number;
  name: string;
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

export interface ISlide {
  title: string;
  subtitle: string;
  image: string;
}

export interface IWork {
  id: number;
  title: string;
}

export interface BrokenLines {
  id: number;
  title: string;
  subtitle?: string;
}
