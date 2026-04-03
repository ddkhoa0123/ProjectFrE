import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function Home() {
  return (
    <main className="pt-4 pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[751px] overflow-hidden px-6 pt-6">
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY9LCDIDHGW-wICE1eg34rImUvKHH4APHQlp7FPGOAIQmOvKJm5fzB4HCOLrF9i6YGOeLP71Py8HrNj-_evwo3M1jtTMP2WKwZh3_Wtnt7BcPG5TayPbQ7mab9gE9EdGEat4WIZ-CArEtJGSHxShebha1usii24hY1pDn58AvYpJemVK6lAuX__x_08F0RyhIiZ31f2Fp__1McwzGB0kuVg051_f8oZGP2Pk2eE9DIVAAwuRpqIjIxn5k-AdOO2Fc1uTrYKKLnrmq7" 
            alt="Creamy Latte Art" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl space-y-4">
            <span className="inline-block px-4 py-1 rounded-full bg-tertiary text-white font-label text-[10px] uppercase tracking-[0.2em] font-bold">The Morning Ritual</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[0.9] tracking-tighter">Aura Brew: Experience the Ritual</h1>
            <p className="text-white/80 font-body text-lg md:text-xl max-w-lg leading-relaxed pt-2">
              More than just caffeine. A curated sensory journey from bean to cup, designed for the conscious connoisseur.
            </p>
            <div className="pt-4">
              <Link to="/menu" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform active:scale-95 shadow-xl">
                Explore the Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="px-6 py-20 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-outline-variant/20 pb-4">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">Curated Collections</h2>
          <p className="font-label text-sm uppercase tracking-widest text-secondary font-bold">Discover your palette</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
          <Link to="/menu" className="md:col-span-7 relative group rounded-[2rem] overflow-hidden bg-surface-container-low cursor-pointer block">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVEBl7XXQzYzEkyJrffB7kSZZ4iKDEk5vIK0ytfKBxrZUs4csrhMG9urn69yqGJ4o1-yIj1oBDi1na1jOIIch-ir8vNz_1hJXh6x7uilGPp6RinSinTA7EFvVGMvgGNOFA7_3VwK5gduv651jZxkE11-RvyyzMz307ugM0zP0GLeW19gBu9fB1E6kaB3F6Kj3hIb1p3LT2y8xiG0J4Lru3N_5wITkaV02uBRD21G9eV-NigmLC8ZtP-ut4cdYeLF_sbZglZ3evqPPm" alt="Artisan Coffee" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
            <div className="relative h-full p-10 flex flex-col justify-end">
              <h3 className="font-headline text-4xl text-white font-bold">Artisan Coffee</h3>
              <p className="text-white/70 max-w-xs font-body pt-2">Ethically sourced single-origin beans roasted to perfection.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">Explore Now <ArrowRight className="w-4 h-4" /></span>
            </div>
          </Link>
          <Link to="/menu" className="md:col-span-5 relative group rounded-[2rem] overflow-hidden bg-surface-container-low cursor-pointer block">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuClV3jfmBm8BDPulbpSqmxOrUllZ4ZLvjtyN0bd0Ux6xW-qJHcSKZli4CeveboLZB0cwgipeGI9exoy74P1HMoZXxC9NNsy5xpGYOoIZDFVkehJp-Tm9yOtEsvjPCgpzr1J1KrKL_H_MatrfAwdgqTOT2VwQ-Ba6inSKJx43xQg3U0pHSb2ZKLQM9SN-GG58Vzal0t-hwTQXFoGyudjzRxsKZGLl4aocT3gS9573nANRJhavkP5Lr83nex0KYvQpD-hVIx9WGiTjAoN" alt="Botanical Tea" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
            <div className="relative h-full p-10 flex flex-col justify-end">
              <h3 className="font-headline text-3xl text-white font-bold">Botanical Tea</h3>
              <p className="text-white/70 font-body pt-2">Silky textures met with delicate floral infusions.</p>
            </div>
          </Link>
          <Link to="/menu" className="md:col-span-12 relative group rounded-[2rem] overflow-hidden h-64 md:h-auto bg-surface-container-low cursor-pointer block">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz7wfVA3cpkzHYZCfjjvVs1RuNr7s3mED1lV8uF9WUTRshoxwtSJlRcJIflO9sJjOF3TXT3G5eKR5Cg80-rY5VOfHfg6jzpzKuCD6wp4Q8q_dzKbwKc0JIktL4F-87g2ocEgPFZ601CpjqqWZLnx_zFgfa1n-p041pLZnQy1zZyr-duKRsrvbll7M5Cl5OkZTZyol8faaR9k3Dt4mvHbz60Mdijep7GWUQElZ5hefNyYpRmfeu18GVD_c39wn-T76d35tN1IhSSG8a" alt="Vitality Smoothies" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tertiary/60"></div>
            <div className="relative h-full p-10 flex flex-col justify-end items-center text-center">
              <h3 className="font-headline text-3xl text-white font-bold">Vitality Smoothies</h3>
              <p className="text-white/80 font-body pt-2">Pure energy blended from the freshest organic harvests.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-20 bg-surface-container-low">
        <div className="px-6 mb-10 flex items-center justify-between">
          <div>
            <h2 className="font-headline text-4xl font-bold text-primary">Barista's Seasonal Pick</h2>
            <p className="text-secondary/70 font-body">Limited time creations for the season</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-auto no-scrollbar px-6 pb-4">
          {[
            { name: 'Smoked Vanilla Suede', desc: 'Bourbon vanilla, smoked maple, espresso', price: '$7.50', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkHI5bTltfy7t2ciPkqME85lbjUUL5mD-a8q8Oc3PfSj5o9hYfpjxgXiS9o8k7_akMZncuUD39aJtkvINiSf3WFltfFgq6Z8Vhepz20E8S6-JR4VGqNy5-iKWEJ3TAxwWw35mV5EHqR6ggLxAYm4S2aHi-2MCNJj_OGkiRHqsTEnBlTS_LSMXk8RGYm20SUY9w6VnthqnT3ZLk7ltgnvGT84sKFTo6qUynoBb1ClE6r-C41IEzLC1SYwGrPJ1X7aYfZTOmr5Oy33YC', limited: true },
            { name: 'Ceremonial Cloud Matcha', desc: 'Grade A matcha, honeycomb, oat foam', price: '$8.25', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEb2H2pzqcz4S-dyzMW1Lv3_6_v9KhmBRqbCmfSIHgIUTTtikdtQ1yRYyOHc4H0dTD8EwihFoR-26ipGiLAI4yE4ex9FzhZxBUZ2sTjImpnQWQTOzpLkil4cV-NFbi7DAwRUIb4lBd9hXAeMUk4_CGMYfgsbnUP1l06IWURhZOPSFr5jXY8_UL71Ve-iZ6wOFkyWFepst8MflxRQXXRiNnExGprRodT4wA8W7TYGMfUjhnujUx6vu3YgNmixU-4-nL9HQuC6ko71OF' },
            { name: 'Hibiscus Ember Brew', desc: 'Cold brew tea, dried petals, citrus zest', price: '$6.75', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZYi6V9kAzv5Y60tiUPer3_vpUtnIzNVl3964_hiCmiYxkYqhrgqC_KOEP7vEDi2HUCzzbqJZYpRlcBAuPG1ZO8_OTzgWZ41Pl5TQTZV-9IDGSIZnJBqMZ-stL9_VWh1jIg_eqBcyuAAS_wGqWCnasAXFy_4sK5iNJ_Ow8hqqitzIHk_XNWUnnqKC-LGxTKiLGkOr5832MwZTqyRA4SPlBF8ExTBzRg_Yp1zEuftJDQCOkIw8QEJ86YoP7QP7f-2F_rSARFoSvUUAb' },
            { name: 'Midnight Velvet Latte', desc: 'Dark roast blend, cocoa dust, micro-foam', price: '$5.95', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp0O2GPH2NR7G4PviM9tLDYnbDtFidLJE5BChcTT_6mjo9qDEMEvzN_oGsFzFQ96qEvNUmw1H6FWYz6QUV6sj8oGFDX6yPiGz3Ec1Sk0WGeA39KtYBE0z3mxaciLuqb3fptHJN1sTK987izaexZ59Y5SVondynFPfxuMMDF8NZgjmMqB0YqxjDKIUQuGPmfTcEiMoNlClFFwi-_lEqlRf3JsGO1FDzZviDhkJRmVCcg2eQppUEqgqpr4sFr5lOcHAJtcNVJ69cUyCm' },
          ].map((item, i) => (
            <Link to={`/product/${i}`} key={i} className="flex-none w-80 group cursor-pointer block">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-shadow">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {item.limited && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-primary">Limited</div>
                )}
              </div>
              <h4 className="font-headline text-xl font-bold text-primary">{item.name}</h4>
              <p className="text-sm text-secondary font-body mb-2">{item.desc}</p>
              <span className="text-primary font-bold">{item.price}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="px-6 py-24">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <span className="font-label text-xs uppercase tracking-[0.3em] font-extrabold text-secondary">The Aura Classics</span>
          <h2 className="font-headline text-5xl font-bold text-primary leading-tight">Voted Most Essential</h2>
          <p className="text-on-surface-variant font-body">The staples of our community. Timeless recipes, perfected over thousands of pours.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {[
            { name: 'Classic Cappuccino', cat: 'Coffee', price: '$5.50', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs0AsjFwUF4kugCjzM4_NV_QLir1KVhBdUOUGmv72Z6JNvZ2x64cGvalfgiM-7zLG0G6MW6xF64sZyMvYNOIASNoPSJjZ6cr5ivtCIE-KSFlyJRJTXWQizRVnl2KSc0rJZRU6GA4UkLiIeP9rgHFuwPr0N3fukUZKiqkfFyrSQ5wIZDH5ikV8E0p9HK3KVYIUjldlReFGV7ibwc2f5yNwAU057XwdqY8y8YoRLZdoKwuE-SHnzPYKzLYprumP1BofhViWUPZT6RVbh' },
            { name: 'Raw Cacao Vitality', cat: 'Smoothies', price: '$8.95', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHp1gbqS5VwwPyiodlRPfkuT_N3QvoSmnFADP9I1fTXUhYiAK6w1oJhW6VJcMjJ8Pq3WMZElqb3B917nY2cr23QJsOyF3g1_kau3mmuhh4f3Kuc_4K-I3mpcywi_l3DypgGb-MeSq88cX_Jsw8Elt173MifqSz3_UmB9SJ-woMaOwpgzch0DwjpB4eQyiXngIxibQXwAjYN0HJGwv2cDoEryRk8BWVj8m8qeKWl5xLjbvNpvtyouxQ2U3aRwKMyrxcWh7NOoLZcpQL' },
            { name: 'Turmeric Aura Gold', cat: 'Healing', price: '$7.25', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5OzDVg8FWre9xA2o7Dc3MjkmI92cDqu_dw3krv6m1-0A51_sVts9n5b_rphbPZJQgj7XI9gxx7tjU87y1-qYAZHL9WK_47o9cfBzsZkr_OEK0okpD6A0dHkA0_EtC6flK0Y_saiJfCf0wXiq_MsdQv5maYYLrNp-E4qqXLI9Dl73gtwyAA1UMX5NwWSAV8bdTDLnLrgvrrUn9xRJRbTPVb9THCxsdCBn_ns2wLMvlHgoHWDauXif0db7IfUBXGtgC1k55CUThXfir' },
            { name: 'Jasmine Silk Iced', cat: 'Tea', price: '$6.50', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC52SP5riatCA1V3ME6bLOCu4t7Jyd5AFKzvxSV2yVwtrNvQY9YTFjOjL2yuygCD8BcFFJSEuELxhe0-j4LnMfMhFe_edwO8FKRk8o7_JWBvXRU8Fi0h3mu09sprax1qZHd4gJ3Ugyc1ErkrHlTSYwq6IUPiBHSJBpQbd2siGYNsDt6dKtS_wPUiEFdMbCrPjImmqhVVJlWq4PzCT6lg3TsmacWWbD5mFPOHZ_yRXceO6jKNJwaWsx3du0f1HAjtthlvFLIHiBazV90' },
          ].map((item, i) => (
            <Link to={`/product/classic-${i}`} key={i} className="space-y-4 group block">
              <div className="bg-surface-container-highest aspect-square rounded-full overflow-hidden relative border border-outline-variant/10">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                <button className="absolute bottom-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mb-1">{item.cat}</p>
                <h5 className="font-headline text-lg font-bold">{item.name}</h5>
                <p className="text-primary font-bold mt-1">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-20 bg-primary text-on-primary rounded-[3rem] mx-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight">Join the Morning Ritual Club</h2>
            <p className="text-on-primary-container text-lg font-body max-w-md">Subscribe to receive exclusive access to bean drops, barista masterclasses, and silent Sunday recipes.</p>
            <form className="flex flex-col sm:flex-row gap-4 pt-4" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your essence (Email)" className="flex-1 bg-primary-container border-none rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-tertiary-fixed outline-none" />
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-tertiary-fixed transition-colors">Join</button>
            </form>
          </div>
          <div className="hidden md:block relative">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw-hXF52hHK7EH26OBrBXerLlx6m42DJzHHwMKhwd0V3qrbNJh1SB-5qvc1mjeTd1q716QZoICX7MIW4ZWQbOyxPTXoheU_s0ES1TTtQN6ahl0NqY2N5j-UNY3_GXW2cksishl7Elxoq2KG30ctsc1y9FXw0i81X8q9EnRpUiiDjG_U_Ge6bYEyslSdRgmdSEwIQtWwxbSW-qmXszwmRTWQHc9rVMOodiPlYTfcfstM0d2lNvxlWdsTeIZ-X0V0DdvGnTslBFbSoPK" alt="Coffee Lifestyle" className="rounded-[2.5rem] w-full h-[400px] object-cover shadow-2xl rotate-2 hover:rotate-0 transition-transform" />
          </div>
        </div>
      </section>
    </main>
  );
}
