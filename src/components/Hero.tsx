import heroImage from '@/assets/hero-kitchen.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury kitchen installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Premium Kitchen & Bathroom Installations
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Crafting Spaces<br />
            <span className="text-gradient-gold">You'll Love</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-up font-light" style={{ animationDelay: '0.3s' }}>
            Transform your home with bespoke kitchen and bathroom installations. 
            Quality craftsmanship, exceptional service, stunning results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={scrollToContact} className="btn-accent">
              Request Free Quote
            </button>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-primary-foreground/10"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
