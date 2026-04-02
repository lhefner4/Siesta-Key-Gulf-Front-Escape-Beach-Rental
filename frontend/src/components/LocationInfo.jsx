import React from 'react';
import { MapPin, Palmtree, Building2, UtensilsCrossed, ShoppingBag, Camera } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const LocationInfo = () => {
  const attractions = [
    {
      icon: Palmtree,
      title: 'Siesta Key Beach',
      distance: 'Steps Away',
      description: 'World-famous powdery white sand beach, rated #1 beach in the USA',
      color: 'bg-sky-50 text-sky-600'
    },
    {
      icon: Building2,
      title: 'Siesta Key Village',
      distance: 'Free Trolley',
      description: 'Vibrant area with shops, restaurants, bars, and nightlife',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: UtensilsCrossed,
      title: 'Local Dining',
      distance: 'Walking Distance',
      description: 'Variety of restaurants from casual beachside to fine dining',
      color: 'bg-teal-50 text-teal-600'
    },
    {
      icon: ShoppingBag,
      title: 'South Village',
      distance: 'Walking Distance',
      description: 'Shopping, grocery stores, bike rentals, and boat rentals',
      color: 'bg-cyan-50 text-cyan-600'
    },
    {
      icon: Camera,
      title: 'Local Attractions',
      distance: 'Nearby',
      description: 'Marina, fishing pier, water sports, and sunset cruises',
      color: 'bg-sky-50 text-sky-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Perfect
            <span className="text-sky-600"> Location</span>
          </h2>
          <p className="text-lg text-slate-600">
            Discover the best of Siesta Key right at your doorstep
          </p>
        </div>

        {/* Location Address */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-sky-100 bg-gradient-to-r from-sky-600 to-blue-600">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 text-white">
                <MapPin size={24} />
                <div className="text-center">
                  <p className="font-semibold text-lg">Excelsior Beach to Bay Condominium</p>
                  <p className="text-sky-100">6264 Midnight Pass Road, Siesta Key, FL 34242</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attractions Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <Card key={index} className="border-sky-100 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className={`w-14 h-14 ${attraction.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <attraction.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{attraction.title}</h3>
                <p className="text-sm text-sky-600 font-semibold mb-3">{attraction.distance}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{attraction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="max-w-6xl mx-auto mt-12">
          <Card className="border-sky-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-96 bg-slate-100">
                <iframe
                  title="Siesta Key Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.8764327959544!2d-82.55448!3d27.2662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c3407c7f4e4c5f%3A0x7e8e4e4e4e4e4e4e!2s6264%20Midnight%20Pass%20Rd%2C%20Sarasota%2C%20FL%2034242!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
