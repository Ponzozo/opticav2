import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

export function SEO() {
  const { t, language } = useLanguage();

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      {/* Primary Meta Tags */}
      <title>{t.seo.title}</title>
      <meta name="title" content={t.seo.title} />
      <meta name="description" content={t.seo.description} />
      <meta name="keywords" content={t.seo.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.origin} />
      <meta property="og:title" content={t.seo.title} />
      <meta property="og:description" content={t.seo.description} />
      <meta property="og:image" content={`${window.location.origin}/og-image.jpg`} />
      <meta property="og:image:alt" content={t.seo.ogImageAlt} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.origin} />
      <meta property="twitter:title" content={t.seo.title} />
      <meta property="twitter:description" content={t.seo.description} />
      <meta property="twitter:image" content={`${window.location.origin}/og-image.jpg`} />
      <meta property="twitter:image:alt" content={t.seo.ogImageAlt} />
    </Helmet>
  );
}
