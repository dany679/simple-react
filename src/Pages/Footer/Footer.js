import React from 'react';

const MyFooter = () => {
  return (
    <div class='footer-copyright text-center btn-footer py-3  '>
      <p>For find all this amazing icons, go to web site</p>
      <p>Fake footer</p>
      <button class='btn btn-outline-dark mb-3'>
        {' '}
        <a
          class='icons'
          rel='noreferrer'
          href='https://www.flaticon.com/'
          target='_blank'
        >
          {' '}
          Flaticon
        </a>
      </button>
      <button class='btn btn-outline-dark mb-3'>
        {' '}
        <a
          class='icons'
          rel='noreferrer'
          href='https://www.freepik.com'
          target='_blank'
        >
          {' '}
          Freepik
        </a>
      </button>
      <div class='btn btn-outline-dark  mb-3'>
        {' '}
        <a
          class='icons'
          rel='noreferrer'
          href='https://fontawesome.com/'
          target='_blank'
        >
          font-awesome
        </a>
      </div>
      <p>License MIT</p>
    </div>
  );
};

export default MyFooter;
