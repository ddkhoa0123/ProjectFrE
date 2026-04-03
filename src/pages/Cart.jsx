import { useState } from 'react';
import { Minus, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const deliveryFee = 4.50;
  const finalTotal = total + deliveryFee;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);
    const shippingAddress = formData.get('address');
    const paymentMethod = formData.get('payment');

    try {
      // Create new order object
      const newOrder = {
        id: Date.now(),
        created_at: new Date().toISOString(),
        total_amount: finalTotal,
        status: 'pending',
        shipping_address: shippingAddress,
        payment_method: paymentMethod,
        items: items.map(item => ({
          product_id: item.id,
          product_name: item.name,
          quantity: item.quantity,
          price: item.price,
          options: item.options ? item.options.join(', ') : ''
        }))
      };

      // Save to localStorage
      const existingOrders = JSON.parse(localStorage.getItem('aura_orders') || '[]');
      localStorage.setItem('aura_orders', JSON.stringify([newOrder, ...existingOrders]));

      // Update user points (mock feature)
      const userStr = localStorage.getItem('aura_user');
      if (userStr) {
        const user = JSON.parse(userStr);
        user.loyalty_points = (user.loyalty_points || 0) + Math.floor(finalTotal / 10);
        localStorage.setItem('aura_user', JSON.stringify(user));
      }

      setSuccess(true);
      clearCart();
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (err) {
      setError('Failed to process order locally.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto text-center">
        <div className="bg-surface-container-low p-12 rounded-3xl max-w-2xl mx-auto border border-outline-variant/20">
          <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-headline text-4xl font-bold text-primary mb-4">Order Placed Successfully!</h1>
          <p className="text-on-surface-variant text-lg">Your ritual is being prepared. Redirecting to your profile...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Cart Items */}
        <div className="lg:col-span-7 space-y-8">
          <section>
            <h1 className="font-headline text-4xl font-bold tracking-tight mb-8 text-primary">Your Ritual Selection</h1>
            
            {items.length === 0 ? (
              <div className="text-center py-12 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
                <p className="text-on-surface-variant mb-4">Your ritual selection is empty.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="group relative flex gap-6 p-4 rounded-xl bg-surface-container-lowest hover:shadow-xl transition-all duration-500 border border-transparent hover:border-outline-variant/20">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-headline text-xl font-bold text-primary">{item.name}</h3>
                          <p className="text-sm text-on-surface-variant font-medium tracking-wide uppercase mt-1">{item.description}</p>
                        </div>
                        <span className="font-headline text-lg font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center bg-surface-container-low rounded-full px-2 py-1 gap-4">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-on-surface-variant/40 hover:text-error transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Order Summary Detail */}
          {items.length > 0 && (
            <section className="p-8 rounded-2xl bg-surface-container-low mt-8 border border-outline-variant/10">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="text-sm font-semibold tracking-wider uppercase">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="text-sm font-semibold tracking-wider uppercase">Ceremonial Delivery</span>
                  <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                  <span className="font-headline text-2xl font-bold text-primary">Total Investment</span>
                  <span className="font-headline text-2xl font-bold text-primary">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Checkout Form */}
        <div className="lg:col-span-5 sticky top-24">
          <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_32px_64px_-12px_rgba(75,54,33,0.08)] border border-outline-variant/10">
            <h2 className="font-headline text-2xl font-bold text-primary mb-8">Delivery Details</h2>
            <form className="space-y-6" onSubmit={handlePlaceOrder}>
              {error && (
                <div className="bg-error/10 text-error p-4 rounded-xl text-sm font-bold">
                  {error}
                </div>
              )}
              <div className="space-y-1">
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant ml-1">Full Name</label>
                <input type="text" name="name" required defaultValue="John Doe" placeholder="Julian Vane" className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:border-tertiary focus:ring-0 px-4 py-3 rounded-t-xl transition-all placeholder:text-outline-variant/60" />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant ml-1">Phone Number</label>
                <input type="tel" name="phone" required defaultValue="0987654321" placeholder="+1 (555) 000-0000" className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:border-tertiary focus:ring-0 px-4 py-3 rounded-t-xl transition-all placeholder:text-outline-variant/60" />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant ml-1">Delivery Address</label>
                <textarea name="address" required defaultValue="456 Milk Tea Ave, CA" rows={3} placeholder="123 Artisan Row, Coffee District" className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:border-tertiary focus:ring-0 px-4 py-3 rounded-t-xl transition-all placeholder:text-outline-variant/60 resize-none"></textarea>
              </div>

              <div className="pt-4">
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant mb-4 ml-1">Payment Method</label>
                <div className="grid grid-cols-1 gap-3">
                  {/* Cash */}
                  <label className="group relative flex items-center p-4 rounded-xl border border-outline-variant/20 cursor-pointer hover:bg-surface-container-low transition-all has-[:checked]:bg-primary-container has-[:checked]:border-transparent">
                    <input type="radio" name="payment" value="cod" className="sr-only" defaultChecked />
                    <span className="font-bold text-primary group-has-[:checked]:text-on-primary-container ml-2">Cash on Delivery</span>
                    <CheckCircle2 className="ml-auto w-5 h-5 text-primary group-has-[:checked]:text-on-primary-container opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                  </label>
                  {/* Bank Transfer */}
                  <label className="group relative flex items-center p-4 rounded-xl border border-outline-variant/20 cursor-pointer hover:bg-surface-container-low transition-all has-[:checked]:bg-primary-container has-[:checked]:border-transparent">
                    <input type="radio" name="payment" value="bank_transfer" className="sr-only" />
                    <span className="font-bold text-primary group-has-[:checked]:text-on-primary-container ml-2">Bank Transfer</span>
                    <CheckCircle2 className="ml-auto w-5 h-5 text-primary group-has-[:checked]:text-on-primary-container opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || items.length === 0}
                className="w-full mt-8 bg-primary text-on-primary py-5 rounded-full font-bold text-lg tracking-widest uppercase hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
