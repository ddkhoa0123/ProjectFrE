import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Edit2, BadgeCheck, ChevronRight, Package, Truck, Calendar, Lock, Home, MapPinPlus, LogOut } from 'lucide-react';
import { MENU_ITEMS } from './Menu';
import { useCart } from '../context/CartContext';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = () => {
      try {
        // Load or initialize User from localStorage
        let userData = JSON.parse(localStorage.getItem('aura_user'));
        if (!userData) {
          userData = {
            id: 2,
            full_name: "John Doe",
            email: "john@example.com",
            phone: "0987654321",
            address: "456 Milk Tea Ave, CA",
            loyalty_points: 1240,
            join_date: "2023-01-15T00:00:00.000Z"
          };
          localStorage.setItem('aura_user', JSON.stringify(userData));
        }

        // Load Orders from localStorage
        const ordersData = JSON.parse(localStorage.getItem('aura_orders') || '[]');

        setUser(userData);
        setOrders(ordersData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load profile data from local storage');
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleReorder = (order) => {
    if (!order.items) return;
    
    order.items.forEach(item => {
      // Find the product in MENU_ITEMS to get its image and description
      let productDetails = null;
      for (const category of MENU_ITEMS) {
        const found = category.items.find(p => p.id === item.product_id);
        if (found) {
          productDetails = found;
          break;
        }
      }

      addItem({
        id: item.product_id,
        name: item.product_name,
        price: parseFloat(item.price),
        image: productDetails ? productDetails.image : 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80',
        description: productDetails ? productDetails.description : ''
      });
    });
    
    navigate('/cart');
  };

  if (loading) {
    return (
      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto text-center">
        <p className="text-on-surface-variant">Loading profile...</p>
      </main>
    );
  }

  if (error || !user) {
    return (
      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-error mb-4">Oops!</h1>
        <p className="text-on-surface-variant mb-8">{error || 'Failed to load profile'}</p>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
      {/* Profile Header Section */}
      <section className="mb-12 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-surface-container shadow-2xl">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqhPhFT_X9Y_wzjasXSLwXCnAiPZqmgTQzdBVoIeBkx02f9BEwH41V8jbnBOcsFTRN9nurNxHcg2SFj3BkOm2zl_k7EmxpallRK3_zQjkDjPgiUnI6oZZbEYyjno99QxiWwP6RdSmTkxyE1_3r5GJ-qIrAK0E9BYdalXTrvDfM-hO3vgB_IgKwzmthxGR72ucULceKsrY8icWITquQDhCLpKNXZeaJMofVFL9_kaUzJDSyEYuyYe54zg2M1nsGkBqs09pKIJ59HMhu" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-2 right-2 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">{user.full_name}</h2>
            <p className="text-on-surface-variant font-medium tracking-wide flex items-center justify-center md:justify-start gap-2">
              <BadgeCheck className="w-5 h-5 text-tertiary fill-tertiary/20" />
              Gold Member • Aura Enthusiast
            </p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-surface-container-high px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary">{user.loyalty_points || 0} Beans</span>
              <span className="bg-tertiary-fixed px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed-variant">15 Free Brews</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Order History: Bento Grid Left */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-headline text-2xl text-primary">Recent Rituals</h3>
            <a href="#" className="text-sm font-bold text-secondary uppercase tracking-widest hover:underline">View All</a>
          </div>

          {/* Order Cards */}
          {orders.length === 0 ? (
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 text-center">
              <p className="text-on-surface-variant">You haven't placed any orders yet.</p>
            </div>
          ) : (
            orders.map(order => {
              // Get the first item to display
              const firstItem = order.items && order.items.length > 0 ? order.items[0] : null;
              const itemName = firstItem ? firstItem.product_name : 'Unknown Item';
              const itemOptions = firstItem && firstItem.options ? ` • ${firstItem.options}` : '';
              const extraItemsCount = order.items ? order.items.length - 1 : 0;
              
              const date = new Date(order.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
              
              return (
                <div key={order.id} className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_24px_rgba(75,54,33,0.04)] border border-outline-variant/10 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center">
                        <Package className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">
                          {itemName}{itemOptions}
                          {extraItemsCount > 0 && <span className="text-sm text-on-surface-variant font-normal ml-1">+{extraItemsCount} more</span>}
                        </p>
                        <p className="text-sm text-on-surface-variant">Order #AB-{order.id.toString().padStart(4, '0')} • {date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-tighter ${
                      order.status === 'completed' ? 'bg-tertiary/10 text-tertiary' : 
                      order.status === 'pending' ? 'bg-secondary/10 text-secondary' : 
                      'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                    <span className="text-primary font-bold">${parseFloat(order.total_amount).toFixed(2)}</span>
                    <button 
                      onClick={() => handleReorder(order)}
                      className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      {order.status === 'completed' ? 'Reorder' : 'Track'} <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}

          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group mt-8">
            <div className="relative z-10">
              <h4 className="font-headline text-xl text-primary mb-2">Subscribe & Save</h4>
              <p className="text-sm text-on-surface-variant max-w-[200px] mb-4">Never run out of your morning ritual. Get 15% off recurring orders.</p>
              <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">Explore Plans</button>
            </div>
            <Calendar className="absolute -bottom-8 -right-8 w-40 h-40 text-primary/5 group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>

        {/* Profile Settings: Bento Grid Right */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="font-headline text-2xl text-primary mb-6">Account Essence</h3>
            <div className="space-y-4">
              <div className="group cursor-pointer">
                <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant mb-1 ml-1">Email Address</label>
                <div className="flex items-center justify-between p-4 bg-surface-container-highest/50 rounded-xl border-b border-transparent group-hover:border-tertiary transition-all">
                  <span className="text-on-surface font-medium">{user.email}</span>
                  <ChevronRight className="w-5 h-5 text-outline" />
                </div>
              </div>
              <div className="group cursor-pointer">
                <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant mb-1 ml-1">Phone Number</label>
                <div className="flex items-center justify-between p-4 bg-surface-container-highest/50 rounded-xl border-b border-transparent group-hover:border-tertiary transition-all">
                  <span className="text-on-surface font-medium">{user.phone || 'Not provided'}</span>
                  <Edit2 className="w-4 h-4 text-outline" />
                </div>
              </div>
              <div className="group cursor-pointer">
                <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant mb-1 ml-1">Password</label>
                <div className="flex items-center justify-between p-4 bg-surface-container-highest/50 rounded-xl border-b border-transparent group-hover:border-tertiary transition-all">
                  <span className="text-on-surface font-medium">••••••••••••</span>
                  <Lock className="w-5 h-5 text-outline" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-2xl text-primary mb-6">Saved Sanctuary</h3>
            <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
              <div className="flex items-start gap-4 p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/20">
                <Home className="w-5 h-5 text-secondary" />
                <div className="flex-1">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-primary mb-1">Home Base</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                    {user.address || 'No address saved.'}
                  </p>
                </div>
                <button className="text-outline hover:text-primary transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-4 p-4 border border-dashed border-outline-variant/40 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer justify-center text-on-surface-variant">
                <MapPinPlus className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-widest">Add New Address</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link to="/signin" className="w-full flex items-center justify-center gap-2 text-error font-bold uppercase tracking-widest text-xs hover:opacity-70 transition-opacity">
              <LogOut className="w-5 h-5" />
              Sign Out of Session
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
