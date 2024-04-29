import React from 'react';

const Footer: React.FC = () => {
  const handleScrollToBottom = () => {
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    window.scrollTo({
      top: documentHeight,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{position: 'fixed', bottom: 0, width: '50%', textAlign: 'center', padding: '20px', cursor: 'pointer' }} onClick={handleScrollToBottom}>
      LEARN MORE
    </footer>
  );
};

export default Footer;