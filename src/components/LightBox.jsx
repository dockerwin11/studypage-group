import { useEffect } from 'react';

// import thirdPartyScript from '../script/lightboxPlusJqueryMin';

const LightBox = () => {
    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = '/studypage-group-react/js/lightboxPlusJqueryMin.js';
        // script.src = thirdPartyScript
        script.async = true;

        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    }, []);

  return null;
}

export default LightBox