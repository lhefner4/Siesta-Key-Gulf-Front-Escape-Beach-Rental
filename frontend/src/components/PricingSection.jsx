import React, { useState } from 'react';
import { DollarSign, Calendar, AlertCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { propertyData } from '../mock';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
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

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Rental Rates Table */}
          <Card className="border-sky-100 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-sky-600 to-blue-600">
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar size={24} />
                Seasonal Rental Rates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead className="font-bold">Period Start</TableHead>
                      <TableHead className="font-bold">Period End</TableHead>
                      <TableHead className="font-bold">Daily Rate</TableHead>
                      <TableHead className="font-bold">Weekly Rate</TableHead>
                      <TableHead className="font-bold">Monthly Rate</TableHead>
                      <TableHead className="font-bold">Min. Nights</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {propertyData.rentalRates.map((rate, index) => (
                      <TableRow key={index} className="hover:bg-sky-50 transition-colors">
                        <TableCell className="font-medium">{rate.periodStart}</TableCell>
                        <TableCell>{rate.periodEnd}</TableCell>
                        <TableCell className="text-sky-700 font-semibold">{rate.dailyRate}</TableCell>
                        <TableCell className="text-sky-700 font-semibold">{rate.weeklyRate}</TableCell>
                        <TableCell>{rate.monthlyRate}</TableCell>
                        <TableCell className="text-center">
                          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                            {rate.minNights === "0" ? "Flexible" : `${rate.minNights} nights`}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Additional Fees */}
            <Card className="border-sky-100 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-sky-50 to-blue-50 border-b border-sky-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <DollarSign className="text-sky-600" size={24} />
                  Additional Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-700">Refundable Security Deposit</span>
                    <span className="font-bold text-sky-700">{propertyData.additionalFees.securityDeposit}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-700">Processing Fee (Excelsior R.E. Corp.)</span>
                    <span className="font-bold text-sky-700">{propertyData.additionalFees.processingFee}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-700">Florida Tourist Tax</span>
                    <span className="font-bold text-sky-700">{propertyData.additionalFees.touristTax}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Cleaning Fee</span>
                    <span className="font-bold text-sky-700">{propertyData.additionalFees.cleaningFee}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rental Information */}
            <Card className="border-sky-100 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-sky-50 border-b border-sky-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <AlertCircle className="text-sky-600" size={24} />
                  Rental Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Upon Booking</h4>
                    <p className="text-sm text-slate-600">{propertyData.rentalInfo.uponBooking}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Balance Due</h4>
                    <p className="text-sm text-slate-600">{propertyData.rentalInfo.balanceDue}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Restrictions</h4>
                    <p className="text-sm text-slate-600">{propertyData.rentalInfo.restrictions}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cancellation Policy */}
          <Card className="border-sky-100 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800">
              <CardTitle className="text-white flex items-center gap-2">
                <FileText size={24} />
                Cancellation Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {propertyData.cancellationPolicy.map((policy, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-sky-100">
                    <AccordionTrigger className="text-slate-900 hover:text-sky-600 font-semibold">
                      {policy.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
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
