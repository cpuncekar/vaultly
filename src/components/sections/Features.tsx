import React from 'react';
import { TrendingUp, PieChart, CalendarClock, Wallet, Receipt, BarChart3 } from 'lucide-react';
import Container from '../ui/Container';

const features = [
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: 'Income Tracking',
    description: 'Easily track all income sources with automatic categorization and real-time insights into your cash flow.'
  },
  {
    icon: <PieChart className="h-8 w-8 text-teal-500" />,
    title: 'Expense Management',
    description: 'Categorize expenses, scan receipts, and identify tax deductions automatically to maximize your savings.'
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-indigo-500" />,
    title: 'Tax Planning',
    description: 'Stay ahead of quarterly taxes with smart estimates, deadline reminders, and deduction tracking.'
  }
];

const additionalFeatures = [
  {
    icon: <Wallet className="h-6 w-6 text-blue-600" />,
    title: 'Multiple Payment Methods'
  },
  {
    icon: <Receipt className="h-6 w-6 text-blue-600" />,
    title: 'Invoice Management'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: 'Financial Reports'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Features for Smart Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed specifically for freelancers and creators to simplify financial management.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-transform hover:transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            And Much More...
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="mr-4">
                  {feature.icon}
                </div>
                <h4 className="font-medium text-gray-900">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;