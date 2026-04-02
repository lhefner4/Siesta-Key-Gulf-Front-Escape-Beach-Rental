import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from 'lucide-react';
import { propertyData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Property Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-sky-300">
              Siesta Key Gulf Front Escape
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Your premier beachfront rental destination in beautiful Siesta Key, Florida. 
              Experience the perfect blend of luxury, comfort, and natural beauty.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61586854002429" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-600 hover:bg-sky-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-sky-600 hover:bg-sky-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-300">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Overview', id: 'overview' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Amenities', id: 'amenities' },
                { name: 'Availability', id: 'availability' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Reviews', id: 'reviews' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-300">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sky-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-sm">
                  {propertyData.address.street}<br />
                  {propertyData.address.city}, {propertyData.address.state} {propertyData.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-sky-400 flex-shrink-0" />
                <a href={`mailto:${propertyData.contact.email}`} className="text-slate-300 hover:text-sky-400 transition-colors text-sm">
                  {propertyData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-sky-400 flex-shrink-0" />
                <a href={`tel:${propertyData.contact.phone}`} className="text-slate-300 hover:text-sky-400 transition-colors text-sm">
                  {propertyData.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Siesta Key Gulf Front Escape. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> for our guests
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
