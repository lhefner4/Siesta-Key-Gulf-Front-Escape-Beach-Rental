import React, { useState } from 'react';
import { Calendar as CalendarIcon, Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar } from './ui/calendar';
import { propertyData } from '../mock';

const AvailabilityCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Convert booked dates to Date objects for the calendar
  const bookedDates = propertyData.bookedDates.flatMap(booking => {
    const dates = [];
    const start = new Date(booking.start);
    const end = new Date(booking.end);
    
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }
    return dates;
  });

  const isBooked = (date) => {
    return bookedDates.some(bookedDate => 
      bookedDate.toDateString() === date.toDateString()
    );
  };

  return (
    <section id="availability" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Check
            <span className="text-sky-600"> Availability</span>
          </h2>
          <p className="text-lg text-slate-600">
            View our rental calendar and plan your perfect beach getaway
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="md:col-span-2">
              <Card className="border-sky-100 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 border-b border-sky-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <CalendarIcon className="text-sky-600" size={24} />
                    Rental Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Calendar
                    mode="single"
                    selected={selectedMonth}
                    onSelect={setSelectedMonth}
                    month={selectedMonth}
                    onMonthChange={setSelectedMonth}
                    className="rounded-md border-0"
                    modifiers={{
                      booked: bookedDates
                    }}
                    modifiersStyles={{
                      booked: {
                        backgroundColor: '#ef4444',
                        color: 'white',
                        fontWeight: 'bold'
                      }
                    }}
                  />
                  
                  {/* Legend */}
                  <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-sky-100 border-2 border-sky-600 rounded flex items-center justify-center">
                        <Check size={16} className="text-sky-600" />
                      </div>
                      <span className="text-sm text-slate-700">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                        <X size={16} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Booked</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Information */}
            <div className="space-y-6">
              <Card className="border-sky-100 shadow-lg">
                <CardHeader className="bg-gradient-to-br from-sky-600 to-blue-600">
                  <CardTitle className="text-white">Rental Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Minimum Stay</h4>
                    <p className="text-sm text-slate-600">{propertyData.rentalInfo.minimumStay}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Odd Days</h4>
                    <p className="text-sm text-slate-600">{propertyData.rentalInfo.oddDays}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Restrictions</h4>
                    <p className="text-sm text-slate-600">{propertyData.rentalInfo.restrictions}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-100 bg-gradient-to-br from-sky-50 to-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Booking Process</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                      <span className="text-sm text-slate-600">Check availability on calendar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                      <span className="text-sm text-slate-600">Submit inquiry form below</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                      <span className="text-sm text-slate-600">Receive confirmation & payment details</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Note for owners */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note for Owner:</strong> Booked dates are currently set in the mock.js file. You can easily update the "bookedDates" array to reflect your actual bookings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityCalendar;
