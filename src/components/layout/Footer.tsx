import React from 'react';
import { Wallet, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Testimonials', 'FAQs'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Help Center', 'Contact', 'Privacy', 'Terms']
  };
  
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { icon: <Github className="h-5 w-5" />, href: '#' }
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wallet className="h-7 w-7 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Vaultly</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Smart personal finance for freelancers and creators. Take control of your finances and focus on what you do best.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Vaultly. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;