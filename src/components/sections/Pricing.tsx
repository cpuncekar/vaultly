import React from 'react';
import { Check, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started with basic financial tracking.',
    features: [
      'Income and expense tracking',
      'Basic financial dashboard',
      'Connect up to 2 bank accounts',
      'Monthly financial summary',
      'Mobile app access'
    ],
    notIncluded: [
      'Tax planning tools',
      'Invoice generation',
      'Custom financial reports',
      'Priority support'
    ],
    buttonText: 'Get Started for Free',
    buttonVariant: 'outline' as const
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    description: 'Advanced tools for serious freelancers and creators.',
    features: [
      'Everything in Free plan',
      'Connect unlimited accounts',
      'Advanced tax planning',
      'Invoice generation & tracking',
      'Custom financial reports',
      'Dedicated support',
      'Expense categorization AI',
      'Client management'
    ],
    popular: true,
    buttonText: 'Get Started',
    buttonVariant: 'primary' as const
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your creative business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md overflow-hidden border ${
                plan.popular ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white py-2 px-4 text-center">
                  <p className="text-sm font-medium">Most Popular</p>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg"
                  className="w-full mb-8"
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded && plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start text-gray-400">
                      <X className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Have questions about our pricing?{' '}
            <a href="#" className="text-blue-600 hover:underline">Check our FAQ</a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;