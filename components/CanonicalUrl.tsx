import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CanonicalUrl = () => {
    const location = useLocation();
    const baseUrl = 'https://amorepataspetshop.com.br';

    useEffect(() => {
        // Current path without trailing slash (unless it's root)
        const path = location.pathname === '/'
            ? ''
            : location.pathname.endsWith('/')
                ? location.pathname.slice(0, -1)
                : location.pathname;

        const url = `${baseUrl}${path}`;

        let link = document.querySelector("link[rel='canonical']");
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', url);

    }, [location]);

    return null;
};

export default CanonicalUrl;
