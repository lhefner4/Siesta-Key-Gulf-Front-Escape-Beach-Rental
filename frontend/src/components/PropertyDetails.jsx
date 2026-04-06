import React from 'react';
import { Home, Bed, Bath, Wifi, Car, Waves, Dumbbell, UtensilsCrossed, Trees, Trophy } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { propertyData } from '../mock';

const PropertyDetails = () => {
  const quickFacts = [
    { icon: Bed, label: 'Bedrooms', value: '2' },
    { icon: Bath, label: 'Bathrooms', value: '2' },
    { icon: Home, label: 'Unit', value: 'G-201' },
    { icon: Waves, label: 'Beach Access', value: 'Private' }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Welcome to Your
            <span className="text-sky-600"> Beachfront Haven</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {propertyData.description}
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="border-sky-100 hover:border-sky-300 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-100 transition-colors">
                  <fact.icon className="text-sky-600" size={24} />
                </div>
                {fact.value && <p className="text-2xl font-bold text-slate-900 mb-1">{fact.value}</p>}
                <p className="text-sm text-slate-600">{fact.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Property Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Condo Highlights */}
          <Card className="border-sky-100 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <Bed className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Condo Highlights</h3>
              <ul className="space-y-3">
                {propertyData.amenities.condoHighlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Fully Equipped */}
          <Card className="border-sky-100 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <UtensilsCrossed className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fully Equipped</h3>
              <ul className="space-y-3">
                {propertyData.amenities.fullyEquipped.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Prime Location */}
          <Card className="border-sky-100 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <Trees className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Prime Location</h3>
              <ul className="space-y-3">
                {propertyData.amenities.location.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
