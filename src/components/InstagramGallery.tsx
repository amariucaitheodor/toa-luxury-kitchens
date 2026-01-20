import { Instagram, ExternalLink } from 'lucide-react';

const InstagramGallery = () => {
  return (
    <section id="gallery" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Our Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            See Our Latest Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow us on Instagram for inspiration and to see our recent kitchen and bathroom transformations.
          </p>
        </div>

        {/* Instagram Embed Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-8 md:p-12 text-center border border-border">
            
            {/* Elfsight Instagram Feed */}
            <div 
              className="elfsight-app-f6765a44-20fa-47bb-a206-79786ecd4b6d" 
              data-elfsight-app-lazy 
            />

            <a
              href="https://www.instagram.com/toa_kbb_installations"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Follow @toa_kbb_installations
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
