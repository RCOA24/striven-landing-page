import React, { useState } from 'react';
import { X, CreditCard, Wallet, ChevronRight, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

const SupportModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('grab_pay');
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

  const themeColor = 'bg-[#00B14F]'; // GrabPay Green
  const themeText = 'text-[#00B14F]';
  const themeBorder = 'border-[#00B14F]';
  const themeRing = 'focus:ring-[#00B14F]';
  const isGCash = false; // Not using GCash

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all">
      <div className="bg-gray-50 dark:bg-gray-900 rounded-[2rem] w-full max-w-sm overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200 border border-gray-200 dark:border-gray-800">
        
        {/* Header */}
        <div className={`${themeColor} p-6 text-white relative overflow-hidden transition-colors duration-300`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <h3 className="text-2xl font-bold mb-1 relative z-10">Send Support</h3>
          <p className="text-white/80 text-sm relative z-10">
            Secure payment via PayMongo
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Payment Method Display */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-[#00B14F] rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Payment via</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">GrabPay</div>
              </div>
            </div>
          </div>

          {/* Test Mode Notice */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3 text-xs text-amber-700 dark:text-amber-400">
            <div className="font-semibold mb-1">🧪 Test Mode Active</div>
            <div>Use test GrabPay credentials. No real charges.</div>
          </div>

          {/* Amount Display */}
          <div className="text-center py-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">Amount to Send</label>
            <div className="relative inline-block">
              <span className={`text-4xl font-bold ${themeText} absolute -left-6 top-1/2 -translate-y-1/2`}>₱</span>
              <input
                type="number"
                value={customAmount || (amount > 0 ? amount : '')}
                onChange={(e) => { 
                  setCustomAmount(e.target.value); 
                  setAmount(0); 
                }}
                placeholder="0.00"
                className={`text-5xl font-bold text-gray-900 dark:text-white bg-transparent w-48 text-center outline-none placeholder-gray-200 dark:placeholder-gray-700`}
              />
            </div>
          </div>

          {/* Quick Amounts */}
          <div className="grid grid-cols-4 gap-2">
            {[100, 250, 500, 1000].map((val) => (
              <button
                key={val}
                onClick={() => { setAmount(val); setCustomAmount(''); }}
                className={`py-2 px-1 rounded-xl text-sm font-medium border transition-all ${
                  amount === val && !customAmount
                    ? `${themeBorder} ${themeText} bg-white dark:bg-gray-800 ring-1 ${themeRing.replace('focus:', '')}`
                    : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                ₱{val}
              </button>
            ))}
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            disabled={isLoading || (!amount && !customAmount)}
            className={`w-full py-4 ${themeColor} text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/20 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group`}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>Send ₱{customAmount || amount}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Footer Trust */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-3 h-3" />
            <span>Secured by PayMongo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
