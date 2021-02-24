import React from 'react';
import { Helmet } from 'react-helmet';

const HeadHelmet = ({
  title,
  description,
  image,
  url,
  author,
  section,
  createdAt,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={`${title}`} />
      <meta property='og:type' content='website' />
      <meta name='description' content={`${description}`} />
      <meta property='og:description' content={`${description}`} />
      {image && <meta property='og:image' content={`${image}`} />}
      {image && <meta property='og:image:secure_url' content={`${image}`} />}

      {url && <meta property='og:url' content={`${url}`} />}
      <meta property='og:site_name' content='Lebanon Freecycle' />

      <meta name='twitter:title' content={`${title}`} />
      <meta name='twitter:description' content={`${description}`} />
      {image && <meta name='twitter:image' content={`${image}`} />}
      <meta name='twitter:card' content='summary' />

      {author && <meta property='article:author' content={`${author}`} />}
      {section && <meta property='article:section' content={`${section}`} />}
      {createdAt && (
        <meta property='article:published_time' content={`${createdAt}`} />
      )}
    </Helmet>
  );
};

export default HeadHelmet;
