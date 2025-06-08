import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-[50vh] md:h-[75vh] bg-background/80 mt-auto border-t-2 select-none">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold">
              Vero Design
            </h1>
            <p className="text-sm md:text-base text-muted-foreground text-center md:text-left">
              Creating beautiful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <nav className="flex flex-col space-y-2">
              <a
                href="/about"
                className="text-sm md:text-base hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="/dashboards"
                className="text-sm md:text-base hover:text-accent transition-colors"
              >
                Dashboards
              </a>
              <a
                href="/showcase"
                className="text-sm md:text-base hover:text-accent transition-colors"
              >
                Showcase
              </a>
              <a
                href="/contact"
                className="text-sm md:text-base hover:text-accent transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="flex flex-col space-y-2">
              <p className="text-sm md:text-base text-muted-foreground select-text">
                Email: contact@vero-design.com
              </p>
              <p className="text-sm md:text-base text-muted-foreground select-text">
                Phone: (123) 456-7898
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                Location: Detroit, MI
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vero Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
