import { useEffect } from 'react';

const LightBox = () => {
    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = '/studypage-group-react/js/lightboxPlusJqueryMin.js';
        script.async = true;

        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    }, []);

  return null;
}

export default LightBox