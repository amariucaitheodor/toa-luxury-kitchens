import { Instagram, Facebook, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/toa_kbb_installations',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61584456449412',
      label: 'Facebook',
    },
    {
      icon: Star,
      href: 'https://g.page/r/CVINYe_1Jfo5EBM/review',
      label: 'Google Reviews',
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <a href="#" className="font-display text-2xl font-semibold tracking-tight">
              <span className="text-foreground">ToA</span>
              <span className="text-accent"> Kitchen & Bathroom</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Premium installations, exceptional results.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ToA Kitchen & Bathroom Installations. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {/* <button className="hover:text-foreground transition-colors">Privacy Policy</button> */}
            {/* <button className="hover:text-foreground transition-colors">Terms of Service</button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
