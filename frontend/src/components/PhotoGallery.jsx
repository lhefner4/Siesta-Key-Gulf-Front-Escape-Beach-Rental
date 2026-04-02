import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { propertyData } from '../mock';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('outside');

  const galleries = {
    outside: { title: 'Outside Views', images: propertyData.images.outsideViews },
    bedrooms: { title: 'Bedrooms & Bathrooms', images: propertyData.images.bedrooms },
    kitchen: { title: 'Kitchen & Dining', images: propertyData.images.kitchen },
    living: { title: 'Living Areas', images: propertyData.images.livingRoom },
    guest: { title: 'Guest Photos', images: propertyData.images.guestPhotos }
  };

  const openLightbox = (image, index) => {
    setSelectedImage({ src: image, index, gallery: activeTab });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    const currentGallery = galleries[selectedImage.gallery].images;
    let newIndex = selectedImage.index + direction;
    
    if (newIndex < 0) newIndex = currentGallery.length - 1;
    if (newIndex >= currentGallery.length) newIndex = 0;
    
    setSelectedImage({
      src: currentGallery[newIndex],
      index: newIndex,
      gallery: selectedImage.gallery
    });
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Photo
            <span className="text-sky-600"> Gallery</span>
          </h2>
          <p className="text-lg text-slate-600">
            Explore stunning views and beautifully appointed interiors
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="outside" className="max-w-7xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-slate-100 p-2 rounded-xl mb-8">
            <TabsTrigger value="outside" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Outside Views
            </TabsTrigger>
            <TabsTrigger value="bedrooms" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Bedrooms
            </TabsTrigger>
            <TabsTrigger value="kitchen" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Kitchen
            </TabsTrigger>
            <TabsTrigger value="living" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Living Room
            </TabsTrigger>
            <TabsTrigger value="guest" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Guest Photos
            </TabsTrigger>
          </TabsList>

          {Object.entries(galleries).map(([key, gallery]) => (
            <TabsContent key={key} value={key} className="mt-0">
              {gallery.images.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gallery.images.map((image, index) => (
                    <Card 
                      key={index} 
                      className="overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onClick={() => openLightbox(image, index)}
                    >
                      <CardContent className="p-0 relative aspect-[4/3]">
                        <img 
                          src={image} 
                          alt={`${gallery.title} ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                          <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-2 border-dashed border-slate-300 bg-slate-50">
                  <CardContent className="p-12 text-center">
                    <p className="text-slate-500 text-lg">
                      {key === 'guest' 
                        ? 'Guest photos will appear here. Share your memories with us!'
                        : 'Photos coming soon'}
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Note about image swapping */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 italic">
            📸 Placeholder images shown. Actual property photos will be added soon.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4">
          <Button
            onClick={closeLightbox}
            variant="ghost"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            size="icon"
          >
            <X size={32} />
          </Button>
          
          <Button
            onClick={() => navigateImage(-1)}
            variant="ghost"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            size="icon"
          >
            <ChevronLeft size={48} />
          </Button>
          
          <Button
            onClick={() => navigateImage(1)}
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            size="icon"
          >
            <ChevronRight size={48} />
          </Button>

          <img 
            src={selectedImage.src} 
            alt="Full size view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
