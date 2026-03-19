import {
  Project,
  Service,
  Perspective,
  GlobalSettings,
  NewsletterSubscription,
  StrapiCollectionResponse,
  StrapiSingleResponse,
} from '@/types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

class StrapiClient {
  private baseUrl: string;

  constructor(baseUrl: string = STRAPI_URL) {
    this.baseUrl = baseUrl;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}/api${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

  // Projects
  async getProjects(params?: {
    populate?: string[];
    sort?: string[];
    pagination?: { page?: number; pageSize?: number };
  }): Promise<StrapiCollectionResponse<Project>> {
    const queryParams = new URLSearchParams();
    
    if (params?.populate) {
      params.populate.forEach(field => queryParams.append('populate', field));
    }
    
    if (params?.sort) {
      params.sort.forEach(field => queryParams.append('sort', field));
    }
    
    if (params?.pagination) {
      if (params.pagination.page) {
        queryParams.append('pagination[page]', params.pagination.page.toString());
      }
      if (params.pagination.pageSize) {
        queryParams.append('pagination[pageSize]', params.pagination.pageSize.toString());
      }
    }

    const query = queryParams.toString();
    return this.fetch<StrapiCollectionResponse<Project>>(
      `/proyectos${query ? `?${query}` : ''}`
    );
  }

  async getProject(id: string | number): Promise<StrapiSingleResponse<Project>> {
    return this.fetch<StrapiSingleResponse<Project>>(`/proyectos/${id}?populate=*`);
  }

  // Services
  async getServices(params?: {
    populate?: string[];
    sort?: string[];
  }): Promise<StrapiCollectionResponse<Service>> {
    const queryParams = new URLSearchParams();
    
    if (params?.populate) {
      params.populate.forEach(field => queryParams.append('populate', field));
    }
    
    if (params?.sort) {
      params.sort.forEach(field => queryParams.append('sort', field));
    }

    const query = queryParams.toString();
    return this.fetch<StrapiCollectionResponse<Service>>(
      `/servicios${query ? `?${query}` : ''}`
    );
  }

  // Perspectives
  async getPerspectives(params?: {
    populate?: string[];
    sort?: string[];
    pagination?: { page?: number; pageSize?: number };
  }): Promise<StrapiCollectionResponse<Perspective>> {
    const queryParams = new URLSearchParams();
    
    if (params?.populate) {
      params.populate.forEach(field => queryParams.append('populate', field));
    }
    
    if (params?.sort) {
      params.sort.forEach(field => queryParams.append('sort', field));
    }
    
    if (params?.pagination) {
      if (params.pagination.page) {
        queryParams.append('pagination[page]', params.pagination.page.toString());
      }
      if (params.pagination.pageSize) {
        queryParams.append('pagination[pageSize]', params.pagination.pageSize.toString());
      }
    }

    const query = queryParams.toString();
    return this.fetch<StrapiCollectionResponse<Perspective>>(
      `/perspectivas${query ? `?${query}` : ''}`
    );
  }

  async getPerspective(id: string | number): Promise<StrapiSingleResponse<Perspective>> {
    return this.fetch<StrapiSingleResponse<Perspective>>(`/perspectivas/${id}?populate=*`);
  }

  // Global Settings
  async getGlobalSettings(): Promise<StrapiSingleResponse<GlobalSettings>> {
    return this.fetch<StrapiSingleResponse<GlobalSettings>>('/global-setting?populate=*');
  }

  // Newsletter
  async subscribeNewsletter(email: string): Promise<StrapiSingleResponse<NewsletterSubscription>> {
    return this.fetch<StrapiSingleResponse<NewsletterSubscription>>('/newsletter-subscriptions', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          email,
          status: 'active',
          source: 'website',
        },
      }),
    });
  }

  // Helper: Get image URL
  getImageUrl(media: any): string {
    if (!media?.data?.attributes?.url) return '';
    const url = media.data.attributes.url;
    return url.startsWith('http') ? url : `${this.baseUrl}${url}`;
  }
}

export const strapiClient = new StrapiClient();
export default strapiClient;
