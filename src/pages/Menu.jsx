import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';

export const MENU_ITEMS = [
  {
    id: 'velvet-cap',
    name: 'Velvet Cappuccino',
    price: 6.50,
    desc: 'Double-shot espresso layered with micro-foam, finished with a whisper of organic Madagascar vanilla.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA43MpYGffZREQmCeEsQ8Zwe18bZAjIhEgt9uhb3gcIZ5jnoPpANDeBLNGt1P_qBZ0k2ipo632dVxeZZSBdkiReZQC4wJiOO84AwEIUFl47Jj3Q-OO3QPyd334sOSWoVKA4SlAhiwgmze2j3DxmNQW6rQUcdPUecnBAz5m4pmdCdCzZRypQ7f_idLnBc9ss-w2uD5DSKj4L4XRhtWM5Bk_vjjiB98CG-6jk1W1hMLSwX8ymuRep77aefsoJdW2X5Du4VGs-sV_EMZ3_',
    badge: 'Signature',
    category: 'Coffee'
  },
  {
    id: 'golden-matcha',
    name: 'Golden Matcha',
    price: 7.25,
    desc: 'Ceremonial grade Uji matcha whisked with honey and creamy oat milk for a luminous start.',
    img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    category: 'Milk Tea'
  },
  {
    id: 'midnight-brew',
    name: 'Midnight Brew',
    price: 5.75,
    desc: '24-hour slow-dripped Ethiopian beans with notes of dark chocolate and black cherry.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmTzaIhvbSpxYlRLwSqqLIPnzd09UD39Kty8Ws9TncdL2y3_vSU9rXHVQwfMGs5xN4uefk7v-IMcgCfwkJQDZr4O7hTr2jAGf1vgd29ju--BnUFi2rszI_ijyp2YyYT2YbWchTnuvk3xvV4yH6C1KxKvWNoUBkRL2a74TCMTw_jcHw3xdTu9E_ecoIyqxe2EyPm6MNRn3AD8B-Aex84ogSCHCimBIUOceuPcektBY_3YaXiTW7_3135wU4XxgEYtRLHLo4YuF5P8uF',
    category: 'Coffee'
  },
  {
    id: 'rose-petal',
    name: 'Rose Petal Latte',
    price: 7.50,
    desc: 'A floral infusion of damask rose syrup, espresso, and steamed milk. Pure elegance in a cup.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0JJO7OKXo_OfnhDj6Sq_dWDWZhHbke4f_DTa-vQ3dblp_-3VQw7Q0__cbbliQBZUvBvy4fObkl4zhzL6-XH8zCo5_t_C404ZlafeakUAYAXW0rsuV7rbxM43Xl1LQ8IyegknK0JW6I5kk-nlSxMcLcpizt1A0w42s_LwtA05dmumLYTPThpbmPJvHqaVS7vGmzUmDs0HUf5ql1Cq8ZjBZBwTJ_WCdzSP4mRLWAwLWnwCApPb2po4WY-aTintxnDGVNqJjnorZX0td',
    category: 'Coffee'
  },
  {
    id: 'amber-earl',
    name: 'Amber Earl Grey',
    price: 5.25,
    desc: 'Full-bodied black tea scented with bergamot oil, served with a candied orange wheel.',
    img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    category: 'Fruit Tea'
  },
  {
    id: 'smoked-cedar',
    name: 'Smoked Cedar Mocha',
    price: 8.00,
    desc: 'Rich 70% dark cocoa blended with cedar-infused syrup for a deep, campfire-inspired profile.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4h7G2h6fsfVKx0c8SCO71-P9-SuszNTl_c3xcN__qG6bfx-VT79PT09ILu09NJvr88kO7UC6FGZ9BDPVvdcg3bSIRBc_I0fCn_n3Dp78yBCXKDhCmLqaADhPy9Zj_tN4O9Y0mGzPLgvTo3d5d0BrkugwjzFjHmKltQAwnjGkc59374sTLJ5s7_2wKVhD0cBKREPh_LmBU5mvVuRscGLdn5lnGuErKLAXU57arvbmcflm5Kgza17fpZ3Lq2VIFZuBAtO33tqFUPODm',
    badge: 'Seasonal',
    category: 'Coffee'
  },
  // Milk Tea
  {
    id: 'classic-boba',
    name: 'Classic Pearl Milk Tea',
    price: 5.50,
    desc: 'Premium black tea blended with rich milk and our signature slow-cooked brown sugar tapioca pearls.',
    img: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?auto=format&fit=crop&w=800&q=80',
    category: 'Milk Tea',
    badge: 'Bestseller'
  },
  {
    id: 'oolong-milk',
    name: 'Roasted Oolong Milk Tea',
    price: 5.75,
    desc: 'Deeply roasted oolong tea leaves steeped to perfection, balanced with a creamy milk base.',
    img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80',
    category: 'Milk Tea'
  },
  // Fruit Tea
  {
    id: 'peach-fruit-tea',
    name: 'Tropical Peach Tea',
    price: 6.25,
    desc: 'Refreshing jasmine green tea infused with real peach slices, passionfruit, and a hint of mint.',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    category: 'Fruit Tea',
    badge: 'Refreshing'
  },
  {
    id: 'lychee-rose',
    name: 'Lychee Rose Blossom',
    price: 6.50,
    desc: 'Delicate rose petal tea mixed with sweet lychee juice and garnished with fresh lychee fruit.',
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    category: 'Fruit Tea'
  },
  // Smoothies
  {
    id: 'mango-passion',
    name: 'Mango Passion Smoothie',
    price: 7.50,
    desc: 'Blended fresh Alphonso mangoes and tangy passionfruit with a touch of Greek yogurt.',
    img: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80',
    category: 'Smoothies'
  },
  {
    id: 'berry-blast',
    name: 'Wild Berry Blast',
    price: 7.50,
    desc: 'A vibrant mix of strawberries, blueberries, and raspberries blended with oat milk and chia seeds.',
    img: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
    category: 'Smoothies'
  },
  // Fresh Juice
  {
    id: 'sunrise-orange',
    name: 'Sunrise Orange Juice',
    price: 5.00,
    desc: '100% freshly squeezed Valencia oranges. Bright, pulpy, and full of Vitamin C.',
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',
    category: 'Fresh Juice'
  },
  {
    id: 'green-detox',
    name: 'Green Vitality Detox',
    price: 6.50,
    desc: 'Cold-pressed kale, green apple, cucumber, celery, and a hint of ginger for a refreshing cleanse.',
    img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    category: 'Fresh Juice',
    badge: 'Healthy'
  },
  // Cakes & Desserts
  {
    id: 'chocolate-truffle',
    name: 'Chocolate Truffle Cake',
    price: 8.50,
    desc: 'Decadent layers of dark chocolate sponge filled with silky chocolate ganache and dusted with premium cocoa.',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    category: 'Cakes & Desserts',
    badge: 'Signature'
  },
  {
    id: 'classic-tiramisu',
    name: 'Classic Tiramisu',
    price: 7.50,
    desc: 'Espresso-soaked ladyfingers layered with rich mascarpone cream and dusted with premium cocoa powder.',
    img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80',
    category: 'Cakes & Desserts'
  },
  {
    id: 'strawberry-shortcake',
    name: 'Strawberry Cloud Cake',
    price: 8.00,
    desc: 'Fluffy Japanese-style sponge cake layered with fresh strawberries and whipped Hokkaido cream.',
    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80',
    category: 'Cakes & Desserts'
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Coffee', 'Milk Tea', 'Fruit Tea', 'Smoothies', 'Fresh Juice', 'Cakes & Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto pb-32">
      {/* Search Section */}
      <section className="mb-10">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search your daily ritual..." 
            className="w-full bg-surface-container-highest border-none rounded-full py-4 pl-12 pr-6 focus:ring-2 focus:ring-tertiary text-on-surface placeholder:text-outline/60 transition-all font-body"
          />
        </div>
      </section>

      {/* Editorial Hero/Intro */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-2 block">The Sommelier Selection</span>
            <h2 className="font-headline text-5xl md:text-6xl tracking-tight text-primary leading-tight">Artisanal <br/><span className="italic">Infusions</span></h2>
          </div>
          <div className="hidden md:block w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-low shadow-xl rotate-12">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq2j_FkuTXbpd5Ua91xpGuFylPGowQrMLYotIhRrurjfw9afsiFfPKObc_KHEDAiI7Zjum8HisF3myqKJkY0LD9OCA1eOZpUdFxX1DoMI49C-F_OM38RS-1gOckFkYap_xdalOLA1bSDYowAPv8Fi-5xsUPLFAFnOtwbqPNTLvfqUmTBOS-NuMc_9LaJa4b0xlNwpVMBfwNcDFKFOEhVCalaNo_glkXkX7rOssdsPBkyK8UDdsJkXWVve1MmWGBlkL3VjxRMaPpsOj" alt="Coffee aesthetic" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="mb-12 overflow-x-auto no-scrollbar -mx-6 px-6">
        <div className="flex gap-3 min-w-max">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-label text-sm font-bold tracking-wide transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-on-primary scale-105 shadow-md' 
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:translate-y-[-4px] border border-outline-variant/10 hover:shadow-xl hover:border-outline-variant/30">
            <div className="aspect-[4/5] overflow-hidden relative bg-surface-container">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              {item.badge && (
                <div className="absolute top-4 left-4 bg-tertiary/90 backdrop-blur-md text-[#ffffff] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{item.badge}</div>
              )}
            </div>
            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline text-2xl text-primary">{item.name}</h3>
                <span className="font-body font-bold text-secondary">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="mt-auto flex justify-end">
                <button className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-lg shadow-primary/20">
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Aesthetic Divider */}
      <section className="my-24 text-center">
        <div className="h-px bg-outline-variant/20 w-32 mx-auto mb-8"></div>
        <p className="font-headline italic text-primary/40 text-lg">Every bean has a story. Every cup is a chapter.</p>
      </section>
    </main>
  );
}
