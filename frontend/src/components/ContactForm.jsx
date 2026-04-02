import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { propertyData } from '../mock';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (this will be replaced with actual backend call later)
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact
            <span className="text-sky-600"> Us</span>
          </h2>
          <p className="text-lg text-slate-600">
            Ready to book your dream vacation? Get in touch with us today!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            {/* Property Info Card */}
            <Card className="border-sky-100 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-sky-600 to-blue-600">
                <CardTitle className="text-white">Property Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{propertyData.name}</h3>
                  <p className="text-sm text-slate-600">{propertyData.tagline}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-sky-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Address</p>
                      <p className="text-sm text-slate-600">
                        {propertyData.address.street}<br />
                        {propertyData.address.city}, {propertyData.address.state} {propertyData.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-sky-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a href={`mailto:${propertyData.contact.email}`} className="text-sm text-sky-600 hover:text-sky-700">
                        {propertyData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-sky-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <a href={`tel:${propertyData.contact.phone}`} className="text-sm text-sky-600 hover:text-sky-700">
                        {propertyData.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Why Book Direct?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle size={16} className="text-sky-600 flex-shrink-0" />
                    Best rates guaranteed
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle size={16} className="text-sky-600 flex-shrink-0" />
                    Direct communication with owners
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle size={16} className="text-sky-600 flex-shrink-0" />
                    Flexible check-in dates
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle size={16} className="text-sky-600 flex-shrink-0" />
                    Quick response time
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="border-sky-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-sky-50 border-b border-sky-100">
                <CardTitle className="text-slate-900">Send Us an Inquiry</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="border-slate-300 focus:border-sky-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="border-slate-300 focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="border-slate-300 focus:border-sky-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkIn">Check-In Date</Label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="border-slate-300 focus:border-sky-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkOut">Check-Out Date</Label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="border-slate-300 focus:border-sky-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="6"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="4"
                        className="border-slate-300 focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your plans and any questions you may have..."
                      rows={6}
                      className="border-slate-300 focus:border-sky-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white text-lg py-6"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    We typically respond within 24 hours. Fields marked with * are required.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
