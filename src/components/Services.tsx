import { Bath, ChefHat, Wrench, Palette, Shield, Clock } from 'lucide-react';
import bathroomImage from '@/assets/bathroom-luxury.jpg';
import kitchenImage from '@/assets/kitchen-modern.jpg';

const services = [
  {
    icon: ChefHat,
    title: 'Kitchen Installations',
    description: 'Complete kitchen fitting services including units, worktops, appliances, and all plumbing connections.',
  },
  {
    icon: Bath,
    title: 'Bathroom Installations',
    description: 'Full bathroom renovations from design to completion, including tiling, plumbing, and fixtures.',
  },
  {
    icon: Wrench,
    title: 'Plumbing Services',
    description: 'Professional plumbing installations and repairs for all your kitchen and bathroom needs.',
  },
  {
    icon: Palette,
    title: 'Tiling & Finishing',
    description: 'Expert tiling work for floors, walls, and splashbacks with precision finishing.',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'All our work comes with a comprehensive guarantee for your complete peace of mind.',
  },
  {
    icon: Clock,
    title: 'Efficient Timelines',
    description: 'We respect your time with clear project timelines and minimal disruption to your home.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Premium Installation Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial consultation to final finish, we deliver exceptional craftsmanship 
            that transforms your space into something extraordinary.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elegant group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Work */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={kitchenImage}
              alt="Modern kitchen installation"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-display text-2xl text-primary-foreground mb-2">Kitchen Excellence</h3>
              <p className="text-primary-foreground/80">Modern designs, timeless quality</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={bathroomImage}
              alt="Luxury bathroom installation"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-display text-2xl text-primary-foreground mb-2">Bathroom Luxury</h3>
              <p className="text-primary-foreground/80">Spa-inspired spaces for everyday living</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
