import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      const timeoutId = window.setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 80);

      return () => window.clearTimeout(timeoutId);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    return undefined;
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;