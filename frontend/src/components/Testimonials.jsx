import React, { useState } from 'react';
import { Star, Quote, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { propertyData } from '../mock';

// Same Formspree form as ContactForm.jsx — submissions here are tagged with
// a distinct _subject so they're easy to tell apart from booking inquiries
// in the same inbox.
const FORMSPREE_FORM_ID = 'xzezebww';

const StarRatingInput = ({ rating, hoverRating, onSelect, onHover, onLeave }) => (
  <div
    role="radiogroup"
    aria-label="Star rating"
    className="flex gap-1"
    onMouseLeave={onLeave}
  >
    {[1, 2, 3, 4, 5].map((i) => {
      const filled = i <= (hoverRating || rating);
      return (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          onMouseEnter={() => onHover(i)}
          aria-label={`Rate ${i} star${i > 1 ? 's' : ''}`}
          aria-pressed={i <= rating}
        >
          <Star
            size={32}
            className={`transition-colors cursor-pointer ${
              filled ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
            }`}
          />
        </button>
      );
    })}
  </div>
);

const Testimonials = () => {
  const { toast } = useToast();
  const [reviewName, setReviewName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingError, setRatingError] = useState('');
  const [reviewMessage, setReviewMessage] = useState('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (rating < 1) {
      setRatingError('Please select a star rating');
      return;
    }
    setRatingError('');
    setIsSubmittingReview(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target)
      });

      if (!response.ok) throw new Error('Form submission failed');

      toast({
        title: "Review Submitted — Thank You!",
        description: "We appreciate you taking the time to share your experience.",
      });
      setReviewName('');
      setRating(0);
      setHoverRating(0);
      setReviewMessage('');
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again, or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingReview(false);
    }
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Guest
            <span className="text-sky-600"> Reviews</span>
          </h2>
          <p className="text-lg text-slate-600">
            Hear what our guests have to say about their unforgettable experiences
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-slate-600 font-semibold">5.0 Average Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {propertyData.testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-sky-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Decorative Quote */}
              <div className="absolute -top-4 -right-4 text-sky-100 group-hover:text-sky-200 transition-colors">
                <Quote size={120} fill="currentColor" />
              </div>

              <CardContent className="p-8 relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Reviewer Name */}
                <div className="pt-4 border-t border-sky-100">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-sky-600">Verified Guest</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leave a Review */}
        <div className="max-w-2xl mx-auto mt-16">
          <p className="text-center text-slate-600 text-lg mb-6">
            Stayed with us? We'd love to hear about it!
          </p>
          <Card className="border-sky-100 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-sky-50 border-b border-sky-100">
              <CardTitle className="text-slate-900">Leave a Review</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="New Review Submission - Siesta Key Gulf Front Escape" />
                <input type="hidden" name="rating" value={rating} />

                <div className="space-y-2">
                  <Label htmlFor="reviewName">Your Name *</Label>
                  <Input
                    id="reviewName"
                    name="name"
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    required
                    placeholder="Jane Doe"
                    className="border-slate-300 focus:border-sky-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Your Rating *</Label>
                  <StarRatingInput
                    rating={rating}
                    hoverRating={hoverRating}
                    onSelect={setRating}
                    onHover={setHoverRating}
                    onLeave={() => setHoverRating(0)}
                  />
                  {ratingError && (
                    <p className="text-sm text-red-600 mt-1">{ratingError}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reviewMessage">Your Review *</Label>
                  <Textarea
                    id="reviewMessage"
                    name="message"
                    value={reviewMessage}
                    onChange={(e) => setReviewMessage(e.target.value)}
                    required
                    placeholder="Tell us about your stay..."
                    rows={5}
                    className="border-slate-300 focus:border-sky-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmittingReview}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white text-lg py-6"
                >
                  {isSubmittingReview ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Submit Review
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
