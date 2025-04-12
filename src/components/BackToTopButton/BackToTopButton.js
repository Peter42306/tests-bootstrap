import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp } from 'react-icons/fa6';


const BackToTopButton = ({isDark}) => {
  const [visible,setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return visible ? (
    <div
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        cursor: 'pointer',
        zIndex: 1000,
        backgroundColor: 'transparent',
        border: `1px solid ${isDark ? 'white' : '#198754'}`,
        color: isDark ? 'white' : '#198754',
        borderRadius: '50%',
        padding: '0.6rem',
        width: '3rem',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
      title='Back to top'
    >
      <FaArrowUp/>
    </div>    
  ) : null;
};

BackToTopButton.propTypes = {
  isDark: PropTypes.bool,
};

BackToTopButton.defaultProps = {};

export default BackToTopButton;
