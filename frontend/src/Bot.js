import React, { useEffect } from 'react';

const YourComponent = () => {
    useEffect(() => {
        const loadScripts = async () => {
          try {
            await new Promise((resolve, reject) => {
              const scriptInject = document.createElement("script");
              scriptInject.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
              scriptInject.async = true;
              scriptInject.defer = true;
              scriptInject.onload = resolve;
              scriptInject.onerror = reject;
              document.body.appendChild(scriptInject);
            });
      
            // Wait for the first script to load before loading the second
            await new Promise((resolve, reject) => {
              const scriptConfig = document.createElement("script");
              scriptConfig.src = "https://mediafiles.botpress.cloud/f5182b7c-8d4f-4c95-a263-0b68f86a59b7/webchat/config.js";
              scriptConfig.async = true;
              scriptConfig.defer = true;
              scriptConfig.onload = resolve;
              scriptConfig.onerror = reject;
              document.body.appendChild(scriptConfig);
            });
      
            // Now you can use the functions from the scripts
          } catch (error) {
            console.error("Error loading scripts:", error);
          }
        };
      
        loadScripts();
      }, []);
      
    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
}

export default YourComponent;
