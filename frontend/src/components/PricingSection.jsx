import React from 'react';
import { DollarSign, Calendar, AlertCircle, FileText, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { propertyData } from '../mock';

const PricingSection = () => {
  // Group rental rates by the year in periodStart
  const groupedRates = propertyData.rentalRates.reduce((groups, rate) => {
    const year = rate.periodStart.split(', ')[1];
    if (!groups[year]) groups[year] = [];
    groups[year].push(rate);
    return groups;
  }, {});

  const RateCell = ({ value }) => {
    if (value === '—') {
      return <span className="text-slate-400 font-medium">—</span>;
    }
    return (
      <span className="inline-flex items-center px-3 py-1 bg-sky-50 text-sky-700 font-semibold rounded-lg border border-sky-100 text-sm">
        {value}
      </span>
    );
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Rental Rates &
            <span className="text-sky-600"> Pricing</span>
          </h2>
          <p className="text-lg text-slate-600">
            Transparent pricing with all details clearly outlined
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* ── Seasonal Rental Rates Table ── */}
          <Card className="border-sky-100 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-sky-600 to-blue-600 py-5 px-6">
              <CardTitle className="text-white flex items-center gap-2 text-lg">
                <Calendar size={22} />
                Seasonal Rental Rates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left font-semibold text-slate-600 uppercase tracking-wide text-xs px-6 py-3 w-1/4">
                        Period Start
                      </th>
                      <th className="text-left font-semibold text-slate-600 uppercase tracking-wide text-xs px-6 py-3 w-1/4">
                        Period End
                      </th>
                      <th className="text-right font-semibold text-slate-600 uppercase tracking-wide text-xs px-6 py-3 w-1/4">
                        Daily Rate
                      </th>
                      <th className="text-right font-semibold text-slate-600 uppercase tracking-wide text-xs px-6 py-3 w-1/4">
                        Weekly Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(groupedRates).map(([year, rates]) => (
                      <React.Fragment key={year}>
                        {/* Year group banner */}
                        <tr>
                          <td colSpan={4} className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-2">
                            <span className="text-sky-300 font-semibold text-xs uppercase tracking-widest">
                              {year} Season
                            </span>
                          </td>
                        </tr>
                        {/* Rate rows */}
                        {rates.map((rate, i) => (
                          <tr
                            key={i}
                            className="border-b border-slate-100 hover:bg-sky-50 transition-colors duration-150 group"
                          >
                            <td className="px-6 py-4 font-medium text-slate-800">
                              {rate.periodStart}
                            </td>
                            <td className="px-6 py-4 text-slate-600">
                              {rate.periodEnd}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <RateCell value={rate.dailyRate} />
                            </td>
                            <td className="px-6 py-4 text-right">
                              <RateCell value={rate.weeklyRate} />
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table footnote */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-start gap-2">
                <TrendingUp size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-500">
                  A dash (—) in the daily rate column indicates a weekly minimum stay requirement for that period.
                  All rates are in USD and exclude applicable taxes and fees.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* ── Additional Fees + Rental Info ── */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Additional Fees */}
            <Card className="border-sky-100 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-sky-50 to-blue-50 border-b border-sky-100 py-4 px-6">
                <CardTitle className="flex items-center gap-2 text-slate-900 text-base">
                  <DollarSign className="text-sky-600" size={20} />
                  Additional Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {[
                    { label: 'Refundable Security Deposit', value: propertyData.additionalFees.securityDeposit },
                    { label: 'Processing Fee (Excelsior R.E. Corp.)', value: propertyData.additionalFees.processingFee },
                    { label: 'Florida Tourist Tax', value: propertyData.additionalFees.touristTax },
                    { label: 'Cleaning Fee', value: propertyData.additionalFees.cleaningFee },
                  ].map((fee, i) => (
                    <div key={i} className="flex justify-between items-center px-6 py-4 hover:bg-sky-50 transition-colors">
                      <span className="text-slate-700 text-sm">{fee.label}</span>
                      <span className="font-bold text-sky-700 text-sm ml-4 flex-shrink-0">{fee.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rental Information */}
            <Card className="border-sky-100 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-sky-50 border-b border-sky-100 py-4 px-6">
                <CardTitle className="flex items-center gap-2 text-slate-900 text-base">
                  <AlertCircle className="text-sky-600" size={20} />
                  Rental Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {[
                    { title: 'Upon Booking', body: propertyData.rentalInfo.uponBooking },
                    { title: 'Balance Due', body: propertyData.rentalInfo.balanceDue },
                    { title: 'Restrictions', body: propertyData.rentalInfo.restrictions },
                  ].map((item, i) => (
                    <div key={i} className="px-6 py-4 hover:bg-sky-50 transition-colors">
                      <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ── Cancellation Policy ── */}
          <Card className="border-sky-100 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 py-5 px-6">
              <CardTitle className="text-white flex items-center gap-2 text-lg">
                <FileText size={22} />
                Cancellation Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {propertyData.cancellationPolicy.map((policy, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-sky-100">
                    <AccordionTrigger className="text-slate-900 hover:text-sky-600 font-semibold text-left">
                      {policy.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed">
                      {policy.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
