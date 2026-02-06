import React from 'react';
import { Helmet } from 'react-helmet-async';

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

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default ServiceSchema;
