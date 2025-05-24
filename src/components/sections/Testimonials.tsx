import React from 'react';
import { Star } from 'lucide-react';
import Container from '../ui/Container';

const testimonials = [
  {
    content: "Vaultly changed how I manage my freelance finances. I used to spend hours each month sorting through expenses and estimating taxes. Now it takes minutes, and I have peace of mind knowing my finances are in order.",
    author: "Alex Morgan",
    role: "Freelance Designer",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    content: "As a content creator, keeping track of multiple income streams was a nightmare before Vaultly. The dashboard gives me instant clarity on my finances, and the tax planning features have literally saved me thousands.",
    author: "Marcus Chen",
    role: "YouTube Creator",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    content: "I've tried several finance apps, but none were built specifically for freelancers like me. Vaultly understands the unique challenges we face and provides solutions that actually work for our financial situations.",
    author: "Sophia Rivera",
    role: "Freelance Writer",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Creators Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what freelancers and creators are saying about how Vaultly has transformed their financial management.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 flex-grow">"{testimonial.content}"</p>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;