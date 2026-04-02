import React from 'react';
import { MapPin, Star, Waves } from 'lucide-react';
import { Button } from './ui/button';
import { propertyData } from '../mock';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={propertyData.images.hero}
          alt="Siesta Key Beach Front"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 opacity-20">
        <Waves size={120} className="text-white animate-pulse" style={{ animationDuration: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <MapPin size={16} className="text-sky-300" />
            <span className="text-white text-sm font-medium">Siesta Key, Florida</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Your Gulf Front
            <span className="block text-sky-300">Paradise Awaits</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-sky-50 font-light max-w-2xl mx-auto leading-relaxed">
            Experience luxury beachfront living with stunning sunset views, world-class amenities, and steps from the powdery white sands
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
              <span className="text-sm md:text-base">2 Bedrooms • 2 Bathrooms</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
              <span className="text-sm md:text-base">Gulf Front Views</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
              <span className="text-sm md:text-base flex items-center gap-1">
                <Star size={14} fill="currentColor" /> 5-Star Rated
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg"
              onClick={() => scrollToSection('availability')}
              className="bg-sky-600 hover:bg-sky-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Check Availability
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('gallery')}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 text-lg px-8 py-6 shadow-xl transition-all duration-300"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
