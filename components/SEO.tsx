import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
    ogType?: string;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    ogImage = 'https://amorepataspetshop.com.br/images/Logo-Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet-shop-pet-shop-perto-de-mim-banho-e-tosa-Uberlandia_.webp',
    ogType = 'website',
    keywords = 'pet shop, banho e tosa, uberlandia, spitz alemão, estética animal'
}) => {
    useEffect(() => {
        // Update title
        document.title = title;

        // Helper function to update or create meta tag
        const updateMetaTag = (property: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${property}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, property);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Update basic meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonical);

        // Update Open Graph tags
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:url', canonical, true);
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:locale', 'pt_BR', true);

        // Update Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:url', canonical);
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);

    }, [title, description, canonical, ogImage, ogType, keywords]);

    return null;
};

export default SEO;
