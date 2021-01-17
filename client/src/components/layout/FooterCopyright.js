import React from 'react';

const FooterCopyright = () => {
  return (
    <div className='footer-copyright text-center py-3'>
      <>&copy; {new Date().getFullYear()} Copyright: Elias Afara</>
    </div>
  );
};

export default FooterCopyright;
