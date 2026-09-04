export type Category =
  | "Street Photography"
  | "Event"
  | "JCC"
  | "Fashion"
  | "Wedding"
  | "Festival"
  | "Automotive";

export interface ProjectMeta {
  location: string;
  year: number;
  optics: string;
  aspect?: string;
}

export interface GalleryPlate {
  src: string;
  alt: string;
  caption?: string;
  ref?: string;
  meta?: string;
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  categories: Category[];
  coverImage: string;
  coverAlt: string;
  description: string;
  meta: ProjectMeta;
  aspect?: string;
  span?: string;
  offset?: string;
  gallery: GalleryPlate[];
  specs?: TechnicalSpec[];
}

export interface Monograph {
  id: string;
  title: string;
  categoryLabel: string;
  year: number;
  optics: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  cols?: number;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactGenre {
  value: string;
  label: string;
}

export interface BudgetTier {
  value: string;
  label: string;
}

export interface ContactFormData {
  genre: string;
  client: string;
  email: string;
  date: string;
  location: string;
  budget: string;
  scope: string;
}
