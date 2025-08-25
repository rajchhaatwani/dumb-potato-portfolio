import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'Dumb Potato - Creative Digital Solutions',
  description = 'Beautifully designed, privacy-focused digital solutions. We create innovative websites and applications that prioritize user experience and data privacy.',
  keywords = 'web development, digital solutions, creative agency, UI/UX design, privacy-focused, portfolio',
  image = '/og-image.jpg',
  url = 'https://dumbpotato.com',
  type = 'website'
}: SEOProps) => {
  const fullTitle = title.includes('Dumb Potato') ? title : `${title} | Dumb Potato`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dumb Potato" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Dumb Potato" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@dumbpotato" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#F76F53" />
      <meta name="msapplication-TileColor" content="#F2F0E3" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Dumb Potato",
          "description": description,
          "url": url,
          "logo": `${url}/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9904538757",
            "contactType": "Customer Service",
            "email": "info@dumbpotato.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "B-414, 11th Floor, Privilion, Isckon Cross-road",
            "addressLocality": "Ahmedabad",
            "postalCode": "380001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://twitter.com/dumbpotato",
            "https://github.com/dumbpotato"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
