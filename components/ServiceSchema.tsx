import { useEffect } from 'react';

interface ServiceSchemaProps {
    serviceName: string;
    description: string;
    url: string;
    provider: {
        name: string;
        url: string;
        telephone: string;
        address: {
            streetAddress: string;
            addressLocality: string;
            addressRegion: string;
            postalCode: string;
        };
    };
    areaServed?: string;
    serviceType?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
    serviceName,
    description,
    url,
    provider,
    areaServed = 'Uberlândia, MG',
    serviceType = 'Pet Grooming'
}) => {
    useEffect(() => {
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": serviceType,
            "name": serviceName,
            "description": description,
            "url": url,
            "provider": {
                "@type": "PetStore",
                "name": provider.name,
                "url": provider.url,
                "telephone": provider.telephone,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": provider.address.streetAddress,
                    "addressLocality": provider.address.addressLocality,
                    "addressRegion": provider.address.addressRegion,
                    "postalCode": provider.address.postalCode,
                    "addressCountry": "BR"
                }
            },
            "areaServed": {
                "@type": "City",
                "name": areaServed
            }
        };

        // Create or update script tag
        const scriptId = 'service-schema-' + serviceName.replace(/\s+/g, '-').toLowerCase();
        let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

        if (!scriptElement) {
            scriptElement = document.createElement('script') as HTMLScriptElement;
            scriptElement.id = scriptId;
            scriptElement.type = 'application/ld+json';
            document.head.appendChild(scriptElement);
        }

        scriptElement.textContent = JSON.stringify(schemaData);

        // Cleanup function to remove script when component unmounts
        return () => {
            const element = document.getElementById(scriptId);
            if (element) {
                element.remove();
            }
        };
    }, [serviceName, description, url, provider, areaServed, serviceType]);

    return null;
};

export default ServiceSchema;
