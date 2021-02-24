import React from 'react';
import ErrorComponent from '../components/layout/Error';
import HeadHelmet from '../utils/HeadHelmet';

const ErrorPage = () => {
  return (
    <div>
      <HeadHelmet
        title='Error 404 Page Not Found'
        description="The requested URL was not found on this server. That's all we know"
      />
      <ErrorComponent />
    </div>
  );
};

export default ErrorPage;
