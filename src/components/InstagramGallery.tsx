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
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4">
              Instagram Gallery
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              To display your Instagram feed, you can integrate services like Elfsight or Behold.so 
              using their embed code below.
            </p>
            
            {/* Elfsight Widget Placeholder - Replace the div below with actual embed code */}
            <div className="bg-muted/50 rounded-lg p-8 mb-8 border-2 border-dashed border-border">
              <p className="text-sm text-muted-foreground">
                Add your Elfsight or Behold.so embed code here<br />
                <span className="text-xs">(e.g., &lt;script src="https://apps.elfsight.com/..."&gt;&lt;/script&gt;)</span>
              </p>
            </div>

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
