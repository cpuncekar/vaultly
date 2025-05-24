import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Join thousands of freelancers and creators who've simplified their financial management with Vaultly.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 text-white font-semibold hover:bg-blue-700 px-6 py-3 focus:ring-white"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-blue-700 focus:ring-white"
            >
              Schedule a Demo
            </Button>
          </div>
          
          <div className="text-sm text-blue-100">
            <p>No credit card required. Free plan includes all basic features.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;