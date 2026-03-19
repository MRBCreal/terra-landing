/**
 * Utils para manejo de imágenes entre Strapi y Unsplash
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// Imágenes de Unsplash como fallback
const UNSPLASH_FALLBACKS = {
  hero: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000',
  about: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000',
  community: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
  projects: [
    'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
  ],
  perspectives: [
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
  ]
};

/**
 * Obtiene la URL de una imagen, usando Strapi si está disponible, sino Unsplash
 */
export function getImageUrl(
  strapiImage: any, 
  fallbackType: keyof typeof UNSPLASH_FALLBACKS, 
  index: number = 0
): string {
  // Si hay imagen en Strapi, usarla
  if (strapiImage?.data?.attributes?.url) {
    return `${STRAPI_URL}${strapiImage.data.attributes.url}`;
  }
  
  // Sino usar fallback de Unsplash
  const fallback = UNSPLASH_FALLBACKS[fallbackType];
  
  if (Array.isArray(fallback)) {
    return fallback[index] || fallback[0];
  }
  
  return fallback;
}

/**
 * Verifica si hay una imagen de Strapi disponible
 */
export function hasStrapiImage(strapiImage: any): boolean {
  return !!(strapiImage?.data?.attributes?.url);
}
