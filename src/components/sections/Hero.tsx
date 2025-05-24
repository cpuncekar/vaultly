import React from 'react';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="mr-1.5">✨</span> Smart Finance for Creators
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Your finances, <span className="text-blue-600">simplified</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              The all-in-one financial solution built specifically for freelancers and creators. Track income, manage expenses, and plan your taxes with ease.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Button size="lg" className="flex items-center">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" href="#how-it-works">
                See How It Works
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-600">Bank-level security</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-600">5,000+ happy users</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-400 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <img
                  src="https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Vaultly Dashboard Preview"
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
                <p className="text-sm font-medium">Financial insights at a glance</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;