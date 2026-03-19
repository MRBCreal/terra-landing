// Strapi Media Type
export interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string;
      width: number;
      height: number;
    };
  } | null;
}

// Project Type
export interface Project {
  id: number;
  attributes: {
    title: string;
    description: string;
    category: string;
    location: string;
    image: StrapiMedia;
    gallery: {
      data: Array<{
        id: number;
        attributes: {
          url: string;
          alternativeText: string;
        };
      }>;
    };
    projectLink: string;
    featured: boolean;
    status: 'active' | 'completed' | 'planning';
    client: string;
    completionDate: string;
    budget: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Service Type
export interface Service {
  id: number;
  attributes: {
    title: string;
    description: string;
    icon: string;
    features: string[];
    image: StrapiMedia;
    featured: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Perspective Type
export interface Perspective {
  id: number;
  attributes: {
    title: string;
    content: string;
    excerpt: string;
    author: string;
    category: string;
    image: StrapiMedia;
    featured: boolean;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

// Global Settings Type
export interface GlobalSettings {
  id: number;
  attributes: {
    siteName: string;
    siteDescription: string;
    logo: StrapiMedia;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroBackgroundImage: StrapiMedia;
    aboutTitle: string;
    aboutContent: string;
    aboutImage: StrapiMedia;
    projectsTitle: string;
    projectsSubtitle: string;
    servicesTitle: string;
    servicesSubtitle: string;
    socialMediaFacebook: string;
    socialMediaInstagram: string;
    socialMediaLinkedin: string;
    socialMediaYoutube: string;
    contactAddress: string;
    contactPhone: string;
    contactEmail: string;
    footerAbout: string;
    seoMetaTitle: string;
    seoMetaDescription: string;
    seoKeywords: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Newsletter Subscription Type
export interface NewsletterSubscription {
  id: number;
  attributes: {
    email: string;
    status: 'active' | 'inactive';
    source: string;
    createdAt: string;
    updatedAt: string;
  };
}

// Strapi Response Types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: {};
}
