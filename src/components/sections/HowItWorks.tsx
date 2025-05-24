import React from 'react';
import { Wallet, LineChart, Calculator } from 'lucide-react';
import Container from '../ui/Container';

const steps = [
  {
    icon: <Wallet className="h-12 w-12 text-blue-600" />,
    title: 'Connect your accounts',
    description: 'Securely link your bank accounts and payment platforms for automatic transaction tracking.'
  },
  {
    icon: <LineChart className="h-12 w-12 text-blue-600" />,
    title: 'Track income and expenses',
    description: 'Monitor your cash flow with automatic categorization and real-time insights.'
  },
  {
    icon: <Calculator className="h-12 w-12 text-blue-600" />,
    title: 'Plan ahead with smart tax tools',
    description: 'Stay prepared with tax estimates, deduction tracking, and quarterly payment reminders.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Vaultly Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-6 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;