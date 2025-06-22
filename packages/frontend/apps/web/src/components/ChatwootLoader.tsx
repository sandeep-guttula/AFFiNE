import React, { useEffect } from 'react';

interface ChatwootLoaderProps {
  baseUrl: string;
  websiteToken: string;
}

const ChatwootLoader: React.FC<ChatwootLoaderProps> = ({
  baseUrl,
  websiteToken,
}) => {
  useEffect(() => {
    const loadChatwoot = () => {
      const script = document.createElement('script');
      script.src = `${baseUrl}/packs/js/sdk.js`;
      script.defer = true;
      script.async = true;

      script.onload = () => {
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken,
            baseUrl,
          });
        }
      };

      document.body.appendChild(script);
    };

    loadChatwoot();

    return () => {
      const existingScript = document.querySelector(
        `script[src="${baseUrl}/packs/js/sdk.js"]`
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [baseUrl, websiteToken]);

  return null;
};

export default ChatwootLoader;
