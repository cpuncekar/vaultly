import React from 'react';
import { CheckCircle } from 'lucide-react';
import Container from '../ui/Container';

const dashboardFeatures = [
  'Real-time financial insights at a glance',
  'Customizable dashboard with drag-and-drop widgets',
  'Income and expense tracking with visual charts',
  'Automated categorization using AI',
  'Tax liability estimates updated in real-time'
];

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Financial Command Center
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The Vaultly dashboard gives you a complete view of your finances in one place. 
              Visualize your income streams, track expenses, and plan for taxes with intuitive tools designed for creators.
            </p>
            
            <div className="space-y-4">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dashboard Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl blur-lg opacity-30"></div>
              <div className="relative bg-white p-2 sm:p-4 rounded-xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7681561/pexels-photo-7681561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Vaultly Dashboard Interface"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -left-4 sm:-left-6 top-1/3 bg-white px-3 py-2 rounded-lg shadow-md border border-gray-100">
                  <p className="text-sm font-medium text-gray-800">Income up 12% this month</p>
                </div>
                <div className="absolute -right-4 sm:-right-6 bottom-1/4 bg-white px-3 py-2 rounded-lg shadow-md border border-gray-100">
                  <p className="text-sm font-medium text-gray-800">Tax savings: $1,240</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Dashboard;