import { useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramGallery = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute('data-use-service-core', '');
    script.defer = true;

    // Append it to the body
    document.body.appendChild(script);

    // Cleanup: optional, removes script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="gallery" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* ... Header remains the same ... */}

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-8 md:p-12 text-center border border-border">
            {/* The Widget */}
            <div 
              className="elfsight-app-f6765a44-20fa-47bb-a206-79786ecd4b6d" 
              data-elfsight-app-lazy 
            />
            
            <div className="mt-8"> {/* Added margin to separate from widget */}
              <a
                href="https://www.instagram.com/toa_kbb_installations"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                Follow @toa_kbb_installations
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;