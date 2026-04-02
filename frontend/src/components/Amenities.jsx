import React from 'react';
import { Waves, Dumbbell, Car, Wifi, UtensilsCrossed, Wind, Trophy, Coffee } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { propertyData } from '../mock';

const Amenities = () => {
  const amenityIcons = {
    pool: Waves,
    fitness: Dumbbell,
    parking: Car,
    wifi: Wifi,
    bbq: UtensilsCrossed,
    beach: Wind,
    sports: Trophy,
    community: Coffee
  };

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Resort-Style
            <span className="text-sky-600"> Amenities</span>
          </h2>
          <p className="text-lg text-slate-600">
            Experience luxury living with world-class facilities designed for your comfort and enjoyment
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Featured Amenities */}
            {[
              { icon: Waves, title: '2 Heated Pools', desc: '& Two Hot Tubs', color: 'bg-sky-50 text-sky-600' },
              { icon: Wind, title: 'Private Beach', desc: 'With Free Loungers', color: 'bg-blue-50 text-blue-600' },
              { icon: Trophy, title: 'Tennis & Pickleball', desc: '2 Lighted Courts Each', color: 'bg-teal-50 text-teal-600' },
              { icon: Dumbbell, title: 'Fitness Center', desc: 'Fully Equipped', color: 'bg-cyan-50 text-cyan-600' },
              { icon: UtensilsCrossed, title: 'BBQ & Picnic', desc: 'Outdoor Areas', color: 'bg-sky-50 text-sky-600' },
              { icon: Coffee, title: 'Community Room', desc: '& Library', color: 'bg-blue-50 text-blue-600' },
              { icon: Car, title: 'Covered Parking', desc: 'Plus Overflow', color: 'bg-teal-50 text-teal-600' },
              { icon: Wifi, title: 'Free WiFi', desc: 'High-Speed Internet', color: 'bg-cyan-50 text-cyan-600' }
            ].map((amenity, index) => (
              <Card key={index} className="border-slate-100 hover:border-sky-300 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 ${amenity.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <amenity.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{amenity.title}</h3>
                  <p className="text-sm text-slate-600">{amenity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Full Amenities List */}
          <Card className="border-sky-100 bg-gradient-to-br from-sky-50 to-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Complete Amenities List</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sky-900 mb-4 text-lg">Beach & Recreation</h4>
                  <ul className="space-y-3">
                    {propertyData.amenities.resortAmenities.slice(0, 6).map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-700">
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sky-900 mb-4 text-lg">Additional Facilities</h4>
                  <ul className="space-y-3">
                    {propertyData.amenities.resortAmenities.slice(6).map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-700">
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
