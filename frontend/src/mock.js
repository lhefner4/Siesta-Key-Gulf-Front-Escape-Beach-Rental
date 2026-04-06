// Mock data for Siesta Key Gulf Front Escape
// EASY IMAGE SWAPPING: Simply replace the URLs below with your actual property photos

export const propertyData = {
  name: "Siesta Key Gulf Front Escape",
  tagline: "Beach Rental • Unit G-201 • Excelsior Condominiums, Sarasota, Florida",
  description: "Experience the best of Florida's Gulf Coast at our beautifully appointed 2-bedroom, 2-bath condo in the desirable Excelsior Beach to Bay complex. Enjoy direct Gulf-front views and spectacular sunsets from your private balcony, just steps away from the world-famous, soft white sands of Siesta Key Beach.",
  
  address: {
    street: "6264 Midnight Pass Road",
    city: "Siesta Key",
    state: "FL",
    zip: "34242",
    unit: "G-201"
  },

  contact: {
    email: "teri.excelsior201g@gmail.com",
    phone: "215-768-4589"
  },

  amenities: {
    condoHighlights: [
      "Spacious master suite with king-size bed, ample storage, large closet, TV, and an en-suite bath featuring dual vanities",
      "Second bedroom with two queen-size beds, dresser, closet, TV, and easy access to a second full bath",
      "Bedrooms are separated for maximum privacy",
      "In-unit washer and dryer for your convenience",
      "Free wireless internet",
      "One dedicated, covered parking spot plus overflow parking for a second vehicle"
    ],
    fullyEquipped: [
      "Fully stocked kitchen with everything you'll need to prepare meals",
      "Open-plan dining and living areas provide plenty of space to relax",
      "Private balcony with stunning Gulf-front views"
    ],
    resortAmenities: [
      "Private beach with complimentary loungers and chairs",
      "Two large heated swimming pools and two hot tubs",
      "Shuffleboard courts",
      "Two lighted tennis courts and two lighted pickleball courts",
      "Fitness center",
      "Outdoor BBQ/picnic areas",
      "Community room and library",
      "Intercoastal fishing pier and shaded viewing area",
      "Poolside restrooms for added convenience"
    ],
    location: [
      "Walking distance to restaurants, bars, shops, grocery and convenience stores",
      "Bike and boat rentals available in the vibrant South Village",
      "Free trolley service to Siesta Key Village for dining, shopping, and nightlife"
    ]
  },

  rentalRates: [
    { periodStart: "Jan 22, 2026", periodEnd: "Apr 30, 2026", dailyRate: "—", weeklyRate: "$3,210", monthlyRate: "—", minNights: "14" },
    { periodStart: "May 1, 2026", periodEnd: "Jun 18, 2026", dailyRate: "$326", weeklyRate: "$2,284", monthlyRate: "—", minNights: "14" },
    { periodStart: "Jun 19, 2026", periodEnd: "Jun 26, 2026", dailyRate: "$495", weeklyRate: "$3,467", monthlyRate: "—", minNights: "14" },
    { periodStart: "Jun 27, 2026", periodEnd: "Jul 11, 2026", dailyRate: "$550", weeklyRate: "$3,850", monthlyRate: "—", minNights: "14" },
    { periodStart: "Nov 21, 2026", periodEnd: "Dec 5, 2026", dailyRate: "$550", weeklyRate: "$3,850", monthlyRate: "—", minNights: "0" },
    { periodStart: "Dec 6, 2026", periodEnd: "Dec 18, 2026", dailyRate: "$495", weeklyRate: "$3,467", monthlyRate: "—", minNights: "0" },
    { periodStart: "Dec 19, 2026", periodEnd: "Jan 2, 2027", dailyRate: "$550", weeklyRate: "$3,850", monthlyRate: "—", minNights: "0" },
    { periodStart: "Jan 3, 2027", periodEnd: "Mar 19, 2027", dailyRate: "$495", weeklyRate: "$3,467", monthlyRate: "—", minNights: "0" }
  ],

  additionalFees: {
    securityDeposit: "$1,000",
    processingFee: "$150",
    touristTax: "13%",
    cleaningFee: "$190"
  },

  rentalInfo: {
    minimumStay: "14-night minimum stay is required (no set check-in day)",
    oddDays: "Odd days are pro-rated at the daily rate",
    uponBooking: "25% of total rental fee plus the $150 processing fee and executed rental agreement are required to secure the reservation",
    balanceDue: "Remaining rent, all applicable taxes, cleaning fee ($190), and security deposit ($1,000) must be paid in full 90 days prior to arrival",
    restrictions: "No pets and no smoking allowed"
  },

  cancellationPolicy: [
    {
      title: "Lessor Cancellation",
      description: "Should the Lessor cancel the booking at any time prior to the scheduled check-in, for any reason and through no fault of the Guest, the Guest shall receive a full refund of all amounts paid."
    },
    {
      title: "More Than 90 Days Prior to Arrival",
      description: "The deposit shall be refunded in full, less the $150 rental agreement processing fee required by Excelsior Real Estate Corp."
    },
    {
      title: "Less Than 90 Days Prior to Arrival",
      description: "No refund shall be issued unless the unit is subsequently re-rented for the same period."
    },
    {
      title: "Early Departure",
      description: "No refunds will be issued for early departure under any circumstances."
    }
  ],

  testimonials: [
    {
      name: "Bill Gustafson",
      text: "Siesta Key Gulf Front Escape truly is our Happy Place! The condo offers stunning sunset views from the balcony, overlooking the pool and hot tub area below. It's the perfect spot to relax with a drink in hand as the sun dips into the Gulf. The property is beautifully maintained, with a heated pool just steps from the powdery white sands of Siesta Key Beach. Inside, the condo is spotless, tastefully furnished, and fully equipped with all the comforts of home. You can tell the owners care about their guests—their communication is quick, kind, and welcoming. We also love the extra amenities this property offers, like the exercise room and pickleball courts, which make it easy to stay active between beach days. Every visit reminds us why we keep coming back—Siesta Key Gulf Front Escape is the perfect blend of comfort, relaxation, and beachside paradise.",
      rating: 5
    },
    {
      name: "Tina Hutnyk",
      text: "This place is truly paradise. The condo is beautifully decorated and the accommodations are excellent. Everything you need for a relaxing beach vacation is there waiting for you. The condo is well equipped if you choose to stay in for meals and just a short trolly ride into the village for additional dining options. There are also places within walking distance. The owner is easily accessible and responds quickly to questions and concerns. We absolutely love this condo and plan to return year after year!",
      rating: 5
    },
    {
      name: "Jennifer Szczesniak",
      text: "Wonderful condo, awesome views, easy access to everything, warm pool, hot tub is nice and hot, owners are very attentive. The beach is FABULOUS! You will not regret renting this condo and will want to book again. My family and I have been guests at this condo for 3 Christmas vacations and 1 spring break and we look forward to each visit.",
      rating: 5
    }
  ],

  // PLACEHOLDER IMAGES - Replace these URLs with your actual property photos
  // Organized by category for easy management
  // Drop your photos into frontend/public/images/<category>/ and update the paths below
  images: {
    hero: "/images/outside/hero.jpg", // 16:9 or wider — best gulf/exterior shot

    outsideViews: [
      "/images/outside/outside-1.jpg", // Beach view
      "/images/outside/outside-2.jpg", // Pool area
      "/images/outside/outside-3.jpg", // Building exterior
      "/images/outside/outside-4.jpg", // Sunset view
      "/images/outside/outside-5.jpg", // Beach scene
      "/images/outside/outside-6.jpg"  // Balcony view
    ],

    bedrooms: [
      "/images/bedrooms/bedroom-1.jpg", // Master bedroom
      "/images/bedrooms/bedroom-2.jpg", // Guest bedroom
      "/images/bedrooms/bedroom-3.jpg", // Bedroom detail
      "/images/bedrooms/bedroom-4.jpg", // Bathroom
      "/images/bedrooms/bedroom-5.jpg", // Master bath
      "/images/bedrooms/bedroom-6.jpg"  // Bedroom with view
    ],

    kitchen: [
      "/images/kitchen/kitchen-1.jpg", // Kitchen overview
      "/images/kitchen/kitchen-2.jpg", // Kitchen detail
      "/images/kitchen/kitchen-3.jpg", // Dining area
      "/images/kitchen/kitchen-4.jpg", // Appliances
      "/images/kitchen/kitchen-5.jpg", // Breakfast bar
      "/images/kitchen/kitchen-6.jpg"  // Kitchen counter
    ],

    livingRoom: [
      "/images/living-room/living-room-1.jpg", // Main living room
      "/images/living-room/living-room-2.jpg", // Seating area
      "/images/living-room/living-room-3.jpg", // Living room detail
      "/images/living-room/living-room-4.jpg", // Open floor plan
      "/images/living-room/living-room-5.jpg", // Interior with natural light
      "/images/living-room/living-room-6.jpg"  // Living room toward balcony
    ],

    guestBedroom: [
      "/images/guest-bedroom/guest-bedroom-1.jpg",
      "/images/guest-bedroom/guest-bedroom-2.jpg",
      "/images/guest-bedroom/guest-bedroom-3.jpg",
      "/images/guest-bedroom/guest-bedroom-4.jpg",
      "/images/guest-bedroom/guest-bedroom-5.jpg",
      "/images/guest-bedroom/guest-bedroom-6.jpg"
    ]
  },

  // Booked dates for calendar (mock data - you'll update this manually)
  bookedDates: [
    { start: "2026-02-14", end: "2026-02-28" },
    { start: "2026-03-15", end: "2026-04-05" },
    { start: "2026-06-20", end: "2026-07-10" },
    { start: "2026-12-20", end: "2027-01-03" }
  ]
};
