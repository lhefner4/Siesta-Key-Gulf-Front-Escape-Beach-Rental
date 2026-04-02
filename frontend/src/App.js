import React from "react";
import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyDetails from "@/components/PropertyDetails";
import PhotoGallery from "@/components/PhotoGallery";
import Amenities from "@/components/Amenities";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import LocationInfo from "@/components/LocationInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <PropertyDetails />
        <PhotoGallery />
        <Amenities />
        <AvailabilityCalendar />
        <PricingSection />
        <Testimonials />
        <LocationInfo />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
