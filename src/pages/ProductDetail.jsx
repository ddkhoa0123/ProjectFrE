import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Flame, CheckCircle2, Minus, Plus, ShoppingBag, Leaf, Droplet, Thermometer } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from './Menu';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Medium');
  const [addons, setAddons] = useState(['Whipped Cream']);
  
  // Find product or use default Hazelnut Macchiato if not found
  const product = MENU_ITEMS.find(p => p.id === id) || {
    id: 'hazelnut-macchiato',
    name: 'Hazelnut Macchiato',
    price: 6.50,
    desc: 'A velvety symphony of steam-stretched milk and intense espresso, kissed with the toasted warmth of hand-picked hazelnuts and finished with a golden caramel weave.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANg6clYv6r5k4Z4nXPlMMnR_6M-cv0AHZdQZWRZH402YpJ8i2FXJqObUyhNjAJ8GA92iZMj-8Cyxd1UYuOqwZmfNpvEqArplWjVpqdpmiTMHOi0AK3K4VIibmKUqToC1L68wMENBvEXj0aYSX4XrNeE4ZbhkHu3u9ib6kvMt731vf7n_4veZKDgbQfs610kmsDNV06mtBoDFewTFl3oPvulCjtBp4lzcbNd2NiFrrZ8k3Bz6-hCqpYvMi9h6_1sdi1mddQGByRowtZ',
    origin: 'Ethiopia Sidamo'
  };

  const origin = product.origin || 'House Blend';

  const toggleAddon = (addon) => {
    setAddons(prev => 
      prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]
    );
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      description: `${size} • ${addons.join(', ')}`,
      price: product.price,
      quantity,
      image: product.img,
      options: [size, ...addons]
    });
    navigate('/cart');
  };

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Imagery */}
        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden editorial-shadow bg-surface-container-low group">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          {/* Overlapping Decorative Element */}
          <div className="absolute -bottom-6 -right-6 hidden md:block w-48 h-48 rounded-full border-[12px] border-surface bg-tertiary-fixed p-2 editorial-shadow overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0e1lj6eC9peZ3sv8Z2E77ncnw_hjG5MWVf72xlo0h0mpG1-_dahoRVuZ6yxdfk5W_zrdxybw49yp9xSbG6xRl38Zc_DPUx2ngiept4kyW0xv92KJvkkXaK_i4-MB17rigBVQYj8tD9XI9UbMOZJMEkbkn_3XJjTCxvkvkF3wv_qHCCVSOSX5ewC_j_DCvwVNQ21xBwCarxRzRmvn5RShubTzVDXyNUujpUuwc6GZ0YbiB9J1txq4viPj9yhZnG0ZRRwX3DOmPgPn2" alt="Coffee Beans" className="w-full h-full object-cover rounded-full" />
          </div>
          {/* Origin Badge */}
          <div className="absolute top-8 left-8 bg-surface-container-lowest/80 glass-effect px-4 py-2 rounded-full border border-outline-variant/20">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] font-extrabold text-tertiary">Origin: {origin}</span>
          </div>
        </div>

        {/* Right Column: Product Content */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <header className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-tight">{product.name}</h1>
              <span className="font-headline text-3xl font-bold text-secondary mt-2">${product.price.toFixed(2)}</span>
            </div>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">
              {product.desc}
            </p>
            <div className="flex gap-4 items-center pt-2">
              <div className="flex items-center gap-1 bg-tertiary-fixed/30 px-3 py-1 rounded-full text-tertiary-fixed-variant font-bold text-xs uppercase tracking-wider">
                <Star className="w-3 h-3 fill-current" />
                4.9 (120 Reviews)
              </div>
              <div className="flex items-center gap-1 bg-primary-fixed/30 px-3 py-1 rounded-full text-on-primary-fixed-variant font-bold text-xs uppercase tracking-wider">
                <Flame className="w-3 h-3" />
                240 kcal
              </div>
            </div>
          </header>

          {/* Configuration Sections */}
          <div className="space-y-10">
            {/* Size Selector */}
            <section className="space-y-4">
              <label className="font-label text-xs uppercase tracking-[0.15em] font-black text-on-surface-variant">Select Size</label>
              <div className="flex gap-4">
                {['Small', 'Medium', 'Large'].map((s, i) => (
                  <button 
                    key={s}
                    onClick={() => setSize(s)}
                    className={`flex-1 py-4 rounded-xl font-bold transition-all ${
                      size === s 
                        ? 'bg-primary text-on-primary shadow-lg shadow-primary/20 scale-[1.05]' 
                        : 'border border-outline-variant/30 bg-surface-container-lowest text-primary hover:scale-[1.02] active:scale-95'
                    }`}
                  >
                    {s} <span className="block text-[10px] font-normal opacity-60 italic">{i === 0 ? '8oz' : i === 1 ? '12oz' : '16oz'}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Toppings List */}
            <section className="space-y-4">
              <label className="font-label text-xs uppercase tracking-[0.15em] font-black text-on-surface-variant">Custom Add-ons</label>
              <div className="grid grid-cols-2 gap-3">
                {['Caramel Drizzle', 'Whipped Cream', 'Extra Shot', 'Oat Milk'].map((addon) => {
                  const isSelected = addons.includes(addon);
                  return (
                    <div 
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={`p-4 rounded-xl border-b-2 cursor-pointer group flex items-center justify-between transition-colors ${
                        isSelected 
                          ? 'bg-tertiary-container/10 border-tertiary' 
                          : 'bg-surface-container-high border-transparent hover:border-tertiary'
                      }`}
                    >
                      <span className={`font-bold text-sm ${isSelected ? 'text-tertiary' : ''}`}>{addon}</span>
                      <CheckCircle2 className={`w-5 h-5 ${isSelected ? 'text-tertiary fill-tertiary/20' : 'text-tertiary-fixed-variant opacity-0 group-hover:opacity-100'}`} />
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Quantity & Action */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center bg-surface-container-highest rounded-full p-1 h-14 w-36">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-surface hover:bg-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-surface hover:bg-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-primary text-on-primary rounded-full font-bold tracking-widest uppercase text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sensory Notes Grid */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-container-low p-10 rounded-[2rem] flex flex-col gap-4 group hover:bg-surface-container-high transition-colors">
          <Leaf className="w-10 h-10 text-primary" />
          <h3 className="font-headline text-2xl font-bold">Nutty Finish</h3>
          <p className="text-on-surface-variant font-body">Sourced from volcanic soils, providing a natural hazelnut undertone without artificial syrups.</p>
        </div>
        <div className="bg-surface-container-low p-10 rounded-[2rem] flex flex-col gap-4 group hover:bg-surface-container-high transition-colors border-t-[8px] border-tertiary">
          <Droplet className="w-10 h-10 text-tertiary" />
          <h3 className="font-headline text-2xl font-bold">Micro-foam</h3>
          <p className="text-on-surface-variant font-body">Our milk is aerated to exactly 65°C to create a dense, marshmallow-like texture that holds flavor.</p>
        </div>
        <div className="bg-surface-container-low p-10 rounded-[2rem] flex flex-col gap-4 group hover:bg-surface-container-high transition-colors">
          <Thermometer className="w-10 h-10 text-primary" />
          <h3 className="font-headline text-2xl font-bold">Triple Layered</h3>
          <p className="text-on-surface-variant font-body">A visual and textural journey starting with sweet cream, followed by bold roast, ending in hazelnut.</p>
        </div>
      </section>
    </main>
  );
}
