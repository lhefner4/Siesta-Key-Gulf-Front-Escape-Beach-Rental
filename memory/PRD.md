# Siesta Key Gulf Front Escape - Product Requirements Document

## Project Overview
**Project Name**: Siesta Key Gulf Front Escape Beach Rental Website  
**Type**: Landing Page / Rental Property Website  
**Status**: Phase 1 Complete (Frontend with Mock Data)  
**Created**: January 2, 2026

## Original Problem Statement
Build a professional landing page website for a rental property in Siesta Key, Florida. The website should:
- Pull information from the property's Facebook page
- Display property details, amenities, pricing, and availability
- Include a photo gallery organized by sections
- Provide a rental availability calendar (manually updateable)
- Show guest testimonials and reviews
- Include a contact/inquiry form
- Have a beach-themed design (coastal blues & sandy neutrals) that's professional, not childish

## User Personas
1. **Potential Renters**: Families and couples looking for beach vacation rentals
2. **Return Guests**: Previous renters looking to book again
3. **Property Owners**: Need to update availability calendar and manage bookings

## Core Requirements

### Design Requirements
- ✅ Beach color palette: Coastal Blues & Sandy Neutrals (soft blue, turquoise, sand beige, white)
- ✅ Professional, vacation-vibe aesthetic
- ✅ Responsive design for all devices
- ✅ Smooth animations and hover effects
- ✅ Clean, well-organized layout

### Functional Requirements
- ✅ Hero section with stunning visuals and CTAs
- ✅ Property overview and detailed amenities
- ✅ Photo gallery with organized categories:
  - Outside views
  - Bedrooms & bathrooms
  - Kitchen & dining
  - Living areas
  - Guest photos section
- ✅ Availability calendar (simple display, manually updated)
- ✅ Comprehensive pricing section with seasonal rates
- ✅ Additional fees and cancellation policy
- ✅ Guest testimonials (3 reviews displayed)
- ✅ Location information with map
- ✅ Contact/inquiry form

## What's Been Implemented ✅

### Phase 1: Frontend with Mock Data (Completed: January 2, 2026)

**Components Created**:
1. `Header.jsx` - Navigation with smooth scroll
2. `Hero.jsx` - Stunning hero section with beach imagery
3. `PropertyDetails.jsx` - Property overview and quick facts
4. `PhotoGallery.jsx` - Tabbed gallery with lightbox functionality
5. `Amenities.jsx` - Detailed amenities showcase
6. `AvailabilityCalendar.jsx` - Calendar with booked dates display
7. `PricingSection.jsx` - Seasonal rates, fees, and policies
8. `Testimonials.jsx` - Guest reviews section
9. `LocationInfo.jsx` - Location details with map
10. `ContactForm.jsx` - Inquiry form with validation
11. `Footer.jsx` - Site footer with links and info

**Data Structure**:
- `mock.js` - Centralized data file for easy updates
  - Property information
  - Amenities lists
  - Rental rates and pricing
  - Testimonials
  - **Placeholder images** (organized by category for easy swapping)
  - Booked dates array

**Key Features**:
- All property details from Facebook page integrated
- Pricing information from provided document
- 3 guest testimonials included
- Placeholder images organized for easy replacement
- Calendar shows booked dates (manually managed in mock.js)
- Fully functional frontend (no backend yet)

## Image Management Instructions

### How to Replace Placeholder Images:
1. Open `/app/frontend/src/mock.js`
2. Locate the `images` object
3. Replace URLs in these categories:
   - `hero`: Main hero image
   - `outsideViews`: Array of 6 exterior/beach/pool images
   - `bedrooms`: Array of 6 bedroom/bathroom images
   - `kitchen`: Array of 6 kitchen/dining images
   - `livingRoom`: Array of 6 living area images
   - `guestPhotos`: Guest-submitted photos (empty initially)

Simply update the URLs and the changes will appear immediately on the website.

## Calendar Management Instructions

### How to Update Booked Dates:
1. Open `/app/frontend/src/mock.js`
2. Locate the `bookedDates` array
3. Add/remove date ranges in format:
   ```javascript
   { start: "YYYY-MM-DD", end: "YYYY-MM-DD" }
   ```
4. Dates will automatically display as "Booked" on the calendar

## Technical Stack
- **Frontend**: React 19 with Hooks
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Backend**: FastAPI (not yet implemented)
- **Database**: MongoDB (not yet implemented)

## Prioritized Backlog

### P0 Features (Next Phase - Backend Integration)
- [ ] Backend API for contact form submissions
- [ ] Email notifications for inquiries
- [ ] Admin dashboard for managing booked dates
- [ ] Image upload functionality for property owners
- [ ] Database integration for storing inquiries

### P1 Features (Enhancement)
- [ ] Integration with booking/payment system (e.g., Stripe)
- [ ] Automated availability calendar sync
- [ ] Guest review submission form
- [ ] Photo upload feature for guests
- [ ] SEO optimization and meta tags
- [ ] Analytics integration (Google Analytics)

### P2 Features (Nice to Have)
- [ ] Virtual tour or 360° photos
- [ ] Weather widget for Siesta Key
- [ ] Local attractions API integration
- [ ] Multi-language support
- [ ] Accessibility improvements (WCAG 2.1)
- [ ] Progressive Web App (PWA) features

## Next Tasks
1. **User Review**: Get feedback on design and layout
2. **Image Replacement**: Add actual property photos
3. **Backend Development**: Build API endpoints for contact form
4. **Testing**: End-to-end testing of all features
5. **Deployment Preparation**: Production build optimization

## Notes
- All placeholder images are high-quality beach/property stock photos
- Contact information is set to placeholder values (update in mock.js)
- Form submissions currently show success toast but don't save data (needs backend)
- Calendar is manually managed; consider automated solution in future
- Design follows modern web best practices with accessibility in mind

## Contact Information (To Update)
- Email: info@siestakeygulffrontescape.com (placeholder)
- Phone: (555) 123-4567 (placeholder)
- Facebook: https://www.facebook.com/profile.php?id=61586854002429

---
*Document Last Updated: January 2, 2026*
