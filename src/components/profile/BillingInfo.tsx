import React, { useState } from 'react';

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  name: string;
  details: string;
  expiryDate?: string;
  isDefault: boolean;
}

const BillingInfo: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState('premium');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 'card-1',
      type: 'card',
      name: 'Visa ending in 4242',
      details: 'Expires 12/2025',
      expiryDate: '12/2025',
      isDefault: true
    },
    {
      id: 'paypal-1',
      type: 'paypal',
      name: 'PayPal',
      details: 'delista@gmail.com',
      isDefault: false
    }
  ]);
  
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardName, setNewCardName] = useState('');
  const [newCardExpiry, setNewCardExpiry] = useState('');
  const [newCardCVV, setNewCardCVV] = useState('');
  
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: { monthly: '$0', yearly: '$0' },
      features: ['Basic features', 'Limited storage', 'No customer support'],
      isCurrent: currentPlan === 'free'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: { monthly: '$9.99', yearly: '$99.99' },
      features: ['Advanced features', '10GB storage', 'Priority customer support', 'Custom themes'],
      isCurrent: currentPlan === 'premium'
    },
    {
      id: 'business',
      name: 'Business',
      price: { monthly: '$29.99', yearly: '$299.99' },
      features: ['All Premium features', 'Unlimited storage', '24/7 customer support', 'API access', 'Custom integrations'],
      isCurrent: currentPlan === 'business'
    }
  ];
  
  const setDefaultPaymentMethod = (id: string) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
  };
  
  const removePaymentMethod = (id: string) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };
  
  const handleAddNewCard = () => {
    // Validation and processing would normally happen here
    const newCard: PaymentMethod = {
      id: `card-${Date.now()}`,
      type: 'card',
      name: `Card ending in ${newCardNumber.slice(-4)}`,
      details: `Expires ${newCardExpiry}`,
      expiryDate: newCardExpiry,
      isDefault: false
    };
    
    setPaymentMethods([...paymentMethods, newCard]);
    setShowAddPayment(false);
    
    // Reset form
    setNewCardNumber('');
    setNewCardName('');
    setNewCardExpiry('');
    setNewCardCVV('');
  };
  
  const handleChangePlan = (planId: string) => {
    setCurrentPlan(planId);
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Current Subscription</h3>
        
        <div className="p-4 border border-primary/20 dark:border-primary-dark/30 rounded-lg bg-primary/5 dark:bg-primary-dark/10">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-sm font-medium text-primary dark:text-primary-light bg-primary/10 dark:bg-primary-dark/20 px-2 py-1 rounded-md">
                {currentPlan === 'free' ? 'Free Plan' : currentPlan === 'premium' ? 'Premium Plan' : 'Business Plan'}
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {billingCycle === 'monthly' ? 'Monthly billing' : 'Annual billing'}
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">
                {currentPlan === 'free' ? '$0' : billingCycle === 'monthly' ? (currentPlan === 'premium' ? '$9.99' : '$29.99') : (currentPlan === 'premium' ? '$99.99' : '$299.99')}
                <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  {currentPlan !== 'free' ? (billingCycle === 'monthly' ? '/month' : '/year') : ''}
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Next billing date: {currentPlan === 'free' ? 'N/A' : 'June 15, 2023'}
              </p>
            </div>
            
            <div className="flex space-x-2 mt-3 sm:mt-0">
              <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors">
                {currentPlan === 'free' ? 'Upgrade Plan' : 'Change Plan'}
              </button>
              {currentPlan !== 'free' && (
                <button className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  Cancel Subscription
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Available Plans</h3>
        
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex space-x-2 mb-4 lg:hidden">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'monthly' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Monthly Billing
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'yearly' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Annual Billing
            </button>
          </div>
          
          {plans.map(plan => (
            <div 
              key={plan.id}
              className={`flex-1 border rounded-lg overflow-hidden transition-all ${
                plan.isCurrent 
                  ? 'border-primary dark:border-primary-light shadow-md' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className={`p-4 ${plan.isCurrent ? 'bg-primary/5 dark:bg-primary-dark/10' : 'bg-white dark:bg-gray-800'}`}>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{plan.name}</h4>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-gray-800 dark:text-white">
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  {plan.id !== 'free' && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4">
                  {plan.isCurrent ? (
                    <button className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium disabled:opacity-50" disabled>
                      Current Plan
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleChangePlan(plan.id)}
                      className="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
                    >
                      {plan.id === 'free' ? 'Downgrade' : 'Upgrade'} to {plan.name}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex justify-center mt-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                billingCycle === 'monthly'
                  ? 'bg-primary border-primary text-white'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                billingCycle === 'yearly'
                  ? 'bg-primary border-primary text-white'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              Annual Billing (Save 15%)
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Payment Methods</h3>
          <button 
            onClick={() => setShowAddPayment(!showAddPayment)}
            className="px-4 py-2 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-light rounded-lg text-sm font-medium hover:bg-primary/20 dark:hover:bg-primary-dark/30 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Payment Method
          </button>
        </div>
        
        {showAddPayment && (
          <div className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <h4 className="text-md font-medium text-gray-800 dark:text-white mb-4">Add New Credit Card</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Number</label>
                <input
                  type="text"
                  value={newCardNumber}
                  onChange={(e) => setNewCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name on Card</label>
                <input
                  type="text"
                  value={newCardName}
                  onChange={(e) => setNewCardName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expiry Date</label>
                <input
                  type="text"
                  value={newCardExpiry}
                  onChange={(e) => setNewCardExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="w-full p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Security Code (CVV)</label>
                <input
                  type="text"
                  value={newCardCVV}
                  onChange={(e) => setNewCardCVV(e.target.value)}
                  placeholder="123"
                  className="w-full p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 mt-4">
              <button 
                onClick={() => setShowAddPayment(false)}
                className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddNewCard}
                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
              >
                Add Card
              </button>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          {paymentMethods.map(method => (
            <div key={method.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${method.type === 'card' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'}`}>
                  {method.type === 'card' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div>
                  <div className="font-medium text-gray-800 dark:text-white">{method.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{method.details}</div>
                </div>
                {method.isDefault && (
                  <span className="ml-2 text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                    Default
                  </span>
                )}
              </div>
              
              <div className="flex space-x-2">
                {!method.isDefault && (
                  <button 
                    onClick={() => setDefaultPaymentMethod(method.id)}
                    className="text-xs px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    Set Default
                  </button>
                )}
                <button 
                  onClick={() => removePaymentMethod(method.id)}
                  className="text-xs px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-red-600 dark:text-red-400 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Billing History</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium text-left">Date</th>
                <th scope="col" className="px-4 py-3 font-medium text-left">Invoice</th>
                <th scope="col" className="px-4 py-3 font-medium text-left">Amount</th>
                <th scope="col" className="px-4 py-3 font-medium text-left">Status</th>
                <th scope="col" className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-4 py-3">May 15, 2023</td>
                <td className="px-4 py-3">#INV-2023-005</td>
                <td className="px-4 py-3">$9.99</td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-primary dark:text-primary-light hover:underline">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50 border-b dark:border-gray-700">
                <td className="px-4 py-3">Apr 15, 2023</td>
                <td className="px-4 py-3">#INV-2023-004</td>
                <td className="px-4 py-3">$9.99</td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-primary dark:text-primary-light hover:underline">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-4 py-3">Mar 15, 2023</td>
                <td className="px-4 py-3">#INV-2023-003</td>
                <td className="px-4 py-3">$9.99</td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-primary dark:text-primary-light hover:underline">
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingInfo; 