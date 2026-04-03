import { Download, TrendingUp, Leaf, Plus, Edit2, Trash2, PlusCircle, Eye } from 'lucide-react';

export default function Admin() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-12">
      {/* Dashboard Overview */}
      <section>
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-headline">Admin Dashboard</h1>
            <p className="text-on-surface-variant font-medium mt-2">Welcome back. Here is the sensory performance for today.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/10">
              <Download className="w-4 h-4" /> Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Large Stats Card */}
          <div className="md:col-span-2 bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Total Revenue</span>
              <div className="text-6xl font-headline font-bold mt-4 text-primary">$42,850.00</div>
              <div className="flex items-center mt-4 text-tertiary font-bold gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>+12.5% from last month</span>
              </div>
            </div>
          </div>

          {/* Small Stats Card 1 */}
          <div className="bg-surface-container-highest rounded-[2rem] p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Active Orders</span>
              <div className="text-5xl font-headline font-bold mt-4 text-primary">158</div>
            </div>
            <div className="text-on-surface-variant text-sm mt-4">24 orders pending roast</div>
          </div>

          {/* Small Stats Card 2 */}
          <div className="bg-surface-container-high rounded-[2rem] p-8 flex flex-col justify-between border-b-4 border-tertiary">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Stock Alerts</span>
              <div className="text-5xl font-headline font-bold mt-4 text-primary">03</div>
            </div>
            <div className="text-tertiary text-sm mt-4 font-bold flex items-center gap-2">
              <Leaf className="w-4 h-4 fill-current" />
              Low inventory on Ethiopian Yirgacheffe
            </div>
          </div>
        </div>
      </section>

      {/* Product Management Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-primary font-headline">Product Collection</h2>
          <button className="bg-tertiary text-on-tertiary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
            <Plus className="w-5 h-5" /> Add New Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(75,54,33,0.04)] hover:shadow-[0_8px_32px_rgba(75,54,33,0.08)] transition-all flex flex-col border border-outline-variant/10">
            <div className="h-48 relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk_Etv2FnpVsI8wn2SVgdaNv4fDbCLi2RGPdV3Qfvcshsj68aKCmT-jzdpY74qSyaXWSU_mUVko0Oszu2q-D_-YEd-b2BuduOOUHrZW58kpplw4lpQ7j_cCZf3zsrfx3hpJF7gCv-y2hPdl4h7m8c1wgaU6Otyj0-KYtIB_zDPGk6bcKixc-mvgYLADRac0KXu8EmJXrKoM_tWTv7EkMKK8fl-wnOsuuK_ylJivzMnGbQ0Lwy73poh9JLiOdOJorrYES6uxTIc0TsY" alt="Coffee Beans" className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Edit2 className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-error hover:bg-error hover:text-white transition-all">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary px-2 py-0.5 bg-tertiary/10 rounded">Single Origin</span>
                  <h3 className="text-xl font-bold mt-1 font-headline">Midnight Velvet Espresso</h3>
                </div>
                <span className="text-lg font-bold text-primary">$28.00</span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-2">A rich blend of sumatran beans with notes of dark chocolate and black cherry.</p>
              <div className="pt-4 flex items-center justify-between text-xs font-bold text-secondary">
                <span>Stock: 42 Units</span>
                <span>Sales: 1.2k Total</span>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(75,54,33,0.04)] hover:shadow-[0_8px_32px_rgba(75,54,33,0.08)] transition-all flex flex-col border border-outline-variant/10">
            <div className="h-48 relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIQ0dOHOlaCudbCXu7qnSUWuvmGhvnYcZ7dVVLekfWT7VgP2mWB42lobHsTq2fn7JinBCZYn_MCtv7-fOgQ_cge4R6ea8ZGfro3a9WCKI1Zys5LA-uBgvnQmlrlIQ8DtQPtDsCncrQTvd6BtR7-kvUoXz-xQNmNwVoToeqeXHKOKpcGQygem9rAv2secOhXJRrgF_dn5ZKY4WbH624YuoeJHQMSlTokVyQ32XL6xt2PJhpC7lhp6ndMGJDuMHE6Ws_ZC1jwQirKd74" alt="Pour over" className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Edit2 className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-error hover:bg-error hover:text-white transition-all">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary px-2 py-0.5 bg-tertiary/10 rounded">Limited Roast</span>
                  <h3 className="text-xl font-bold mt-1 font-headline">Golden Hour Filter</h3>
                </div>
                <span className="text-lg font-bold text-primary">$32.00</span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-2">Ethiopian light roast featuring jasmine aromatics and a bright citrus finish.</p>
              <div className="pt-4 flex items-center justify-between text-xs font-bold text-secondary">
                <span>Stock: 12 Units</span>
                <span>Sales: 840 Total</span>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center p-12 text-center group hover:border-primary transition-colors cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-outline group-hover:bg-primary group-hover:text-on-primary transition-all">
              <PlusCircle className="w-8 h-8" />
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-lg font-headline">New Harvest</h3>
              <p className="text-sm text-on-surface-variant">Add a new specialty bean to the Aura collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary font-headline">Recent Orders</h2>
        <div className="bg-surface-container-low rounded-[2rem] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="text-xs font-bold tracking-[0.2em] uppercase text-secondary border-b border-outline-variant/20">
                  <th className="px-8 py-6">Order ID</th>
                  <th className="px-8 py-6">Customer</th>
                  <th className="px-8 py-6">Details</th>
                  <th className="px-8 py-6">Date</th>
                  <th className="px-8 py-6">Status</th>
                  <th className="px-8 py-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-white/40 transition-colors group">
                  <td className="px-8 py-6 font-bold text-primary">#AB-98210</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary text-xs font-bold">EM</div>
                      <div>
                        <div className="font-bold text-sm">Elena Marcel</div>
                        <div className="text-xs text-on-surface-variant">elena.m@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm">2x Midnight Velvet Espresso</div>
                    <div className="text-xs text-on-surface-variant font-bold">$56.00</div>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant">Oct 12, 14:30</td>
                  <td className="px-8 py-6">
                    <select className="bg-white/50 border-none rounded-full text-xs font-bold px-4 py-2 focus:ring-2 focus:ring-tertiary transition-all outline-none">
                      <option>Processing</option>
                      <option>Roasting</option>
                      <option selected>Shipped</option>
                      <option>Delivered</option>
                    </select>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-secondary hover:text-primary p-2">
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-white/40 transition-colors group">
                  <td className="px-8 py-6 font-bold text-primary">#AB-98211</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-primary text-xs font-bold">JK</div>
                      <div>
                        <div className="font-bold text-sm">Julian Kross</div>
                        <div className="text-xs text-on-surface-variant">j.kross@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm">1x Golden Hour, 1x Brew Kit</div>
                    <div className="text-xs text-on-surface-variant font-bold">$112.50</div>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant">Oct 12, 15:45</td>
                  <td className="px-8 py-6">
                    <select className="bg-primary/5 border-none rounded-full text-xs font-bold px-4 py-2 focus:ring-2 focus:ring-tertiary transition-all text-primary outline-none">
                      <option selected>Processing</option>
                      <option>Roasting</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                    </select>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-secondary hover:text-primary p-2">
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-8 py-6 flex items-center justify-between border-t border-outline-variant/10 text-sm font-bold text-on-surface-variant">
            <span>Showing 2 of 42 active orders</span>
            <div className="flex gap-4">
              <button className="hover:text-primary transition-colors">Previous</button>
              <button className="hover:text-primary transition-colors">Next</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
