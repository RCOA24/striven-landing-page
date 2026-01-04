import React, { useState } from 'react';
import { X, CreditCard, Wallet } from 'lucide-react';
import { toast } from 'sonner';

const SupportModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('gcash');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handlePayment = async () => {
    const finalAmount = customAmount ? parseFloat(customAmount) : amount;
    
    if (finalAmount < 100) {
      toast.error('Minimum donation amount is ₱100', {
        description: 'Payment providers require a minimum transaction amount.'
      });
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading('Initializing secure payment...');
    
    // Convert to centavos
    const amountInCentavos = Math.round(finalAmount * 100);

    try {
      // Use relative path for Netlify Functions (works in production)
      // Fallback to localhost for local development if needed, but ideally use Netlify Dev
      const apiUrl = import.meta.env.PROD 
        ? '/.netlify/functions/create-paymongo-source' 
        : 'http://localhost:3000/create-paymongo-source';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amountInCentavos,
          type: paymentMethod,
        }),
      });

      const data = await response.json();

      if (data.checkout_url) {
        toast.success('Redirecting to payment gateway...', { id: toastId });
        // Small delay to let user see the success message
        setTimeout(() => {
          window.location.href = data.checkout_url;
        }, 1000);
      } else {
        console.error('Payment Error Data:', data);
        const errorMessage = data.error?.length > 0 
          ? data.error[0].detail 
          : 'Failed to create payment source.';
        
        toast.error('Payment initialization failed', { 
          id: toastId,
          description: errorMessage
        });
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Connection error', { 
        id: toastId,
        description: 'Please check your internet connection and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Support Development</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Your contribution helps keep Striven alive and free for everyone.
        </p>

        <div className="space-y-6">
          {/* Amount Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Select Amount (PHP)
            </label>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {[50, 100, 250, 500, 1000].map((val) => (
                <button
                  key={val}
                  onClick={() => { setAmount(val); setCustomAmount(''); }}
                  className={`py-2 px-4 rounded-xl border transition-all ${
                    amount === val && !customAmount
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300'
                  }`}
                >
                  ₱{val}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₱</span>
              <input
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }}
                className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Payment Method
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod('gcash')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border transition-all ${
                  paymentMethod === 'gcash'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Wallet className="w-5 h-5" />
                GCash
              </button>
              <button
                onClick={() => setPaymentMethod('paymaya')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border transition-all ${
                  paymentMethod === 'paymaya'
                    ? 'bg-green-600 text-white border-green-600'
                    : 'border-gray-200 dark:border-gray-700 hover:border-green-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                Maya
              </button>
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={isLoading || (!amount && !customAmount)}
            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? 'Processing...' : `Donate ₱${customAmount || amount}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
