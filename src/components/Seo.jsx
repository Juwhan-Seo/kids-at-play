import { Helmet } from 'react-helmet';

const Seo = ({ title, description, ogImage = "/kids_at_play_logo.svg" }) => {
  const fullTitle = title ? `${title} | Kids At Play` : "Kids At Play - 포항 어린이 체육·놀이 공간";
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/kids_at_play_logo.svg" />
    </Helmet>
  );
};

export default Seo;
