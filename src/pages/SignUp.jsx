import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Leaf } from 'lucide-react';

export default function SignUp() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex flex-col">
      {/* Top Navigation Anchor */}
      <header className="bg-[#fbfbe2]/70 backdrop-blur-xl text-[#33210d] font-headline font-medium tracking-tight fixed top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex items-center justify-between px-6 py-4 w-full">
        <div className="flex items-center gap-2">
          <Link to="/signin" className="text-primary cursor-pointer hover:scale-110 transition-transform">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
        <div className="text-2xl font-headline italic text-[#33210d]">Aura Brew</div>
        <div className="w-6"></div>
      </header>

      <main className="flex-grow flex flex-col md:flex-row h-full overflow-hidden pt-16">
        {/* Left Visual Panel */}
        <section className="hidden md:flex md:w-1/2 relative bg-surface-container overflow-hidden min-h-[calc(100vh-64px)]">
          <div className="absolute inset-0 z-0">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuARQUmstggIcs6b_HvScB2MeTYfsEVHZw5S35H-fVsOqTDqb7OAfrcINnH_DKzGAuXmotLAt40kbejhtbYwm69H3pNNqC5jrTREwFd_UI8qrd-JmEYcY9lcH9zrDH9co9UgWiR29GntWBMfoA_7vPOR9VlLeDNDU3k6ze67Go1kaUC2kQtuihFFcB6H-i-GUfWaWEbkWJg12I84tH1P2IXt6AEK9bOYJk_cPgKIDTkUdrwcfVAOnwqJ_w_0BCUvEni5guyAPGFH-aD7" alt="Artisan coffee pour" className="w-full h-full object-cover opacity-90 scale-105" />
          </div>
          <div className="relative z-10 p-16 flex flex-col justify-end h-full">
            <h1 className="font-headline text-6xl text-white leading-tight mb-6 drop-shadow-md">
              Elevate Your <br/>Daily Ritual.
            </h1>
            <p className="text-white/90 text-xl max-w-md font-light leading-relaxed drop-shadow-sm">
              Join a community that celebrates the slow craft and sensory depth of every single bean.
            </p>
          </div>
          <div className="absolute bottom-16 right-0 w-32 h-32 aroma-gradient rounded-l-full opacity-20 blur-3xl"></div>
        </section>

        {/* Sign Up Form Section */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 overflow-y-auto">
          <div className="w-full max-w-md space-y-10">
            <header className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">The Ritual Club</span>
              <h2 className="font-headline text-4xl text-primary tracking-tight">Begin your journey</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Become a member of our exclusive Ritual Club to earn rewards, access private roasts, and master the art of the brew.
              </p>
            </header>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 group">
                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Full Name</label>
                <input type="text" placeholder="Elias Thorne" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:ring-0 focus:border-tertiary transition-all px-0 py-3 text-primary placeholder:text-outline/50" />
              </div>
              
              <div className="space-y-2 group">
                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Email Address</label>
                <input type="email" placeholder="elias@aurabrew.co" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:ring-0 focus:border-tertiary transition-all px-0 py-3 text-primary placeholder:text-outline/50" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:ring-0 focus:border-tertiary transition-all px-0 py-3 text-primary placeholder:text-outline/50" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Confirm Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:ring-0 focus:border-tertiary transition-all px-0 py-3 text-primary placeholder:text-outline/50" />
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <Link to="/" className="w-full aroma-gradient text-on-primary py-5 rounded-full font-bold tracking-wide flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(51,33,13,0.3)]">
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <div className="flex items-center gap-4 py-2">
                  <div className="h-px flex-grow bg-outline-variant opacity-30"></div>
                  <span className="text-xs uppercase tracking-widest text-on-surface-variant/60 font-medium">Or join with</span>
                  <div className="h-px flex-grow bg-outline-variant opacity-30"></div>
                </div>

                <div className="flex gap-4">
                  <button type="button" className="flex-1 py-3 px-4 rounded-full border border-outline-variant/30 text-on-surface-variant flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_USpg7awgBLwyz5N37NhAciaeKQNLaEafdsaoSGVI4NvzzJUK7ltkyinmE3PtLocDoSpcDFczemGOfUK4gHKKM8HToZO8Rf5d_qLxUb8mzIONGl6i1XGGm-mUOYjzu-kew5D22yXOXearFvZ-tQZz6htTAVe4iV3e3Cz8wV0Q8zjdRy4YMCN-bCSC5nroMxCq1QpBKYG-wy7fnTXvnalW6z5qKJ-f4394soP2XxNzmPE6_MdkEqAmztPVlcgVGMaDFqWxlIdOY4-C" alt="Google" className="w-5 h-5" />
                    <span className="text-sm font-medium">Google</span>
                  </button>
                  <button type="button" className="flex-1 py-3 px-4 rounded-full border border-outline-variant/30 text-on-surface-variant flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuATeThIKJBIMust22dYThUWHwCLfhKd1ZPgkpecIFzGFjYZYccLIo1TbFfv49n9UtNigDBXE2H3EYGB2ugVYzKO8ef5vvT-NQEXmefzmVuPiLiCenDM56b_A2am6BFBAzVbGf9_OjjpIeCvjOPul1dOp0IU2n3sFyhtO9AQMdYuBeYmJYX4Rwvy1yOvhyGI-ZxAqOGF7V5iHsBheAnQ6ZsjpHJOSgFRtNw8CSSS6pZObHtASwOLb1GlpjH8tqP1PgfDKqCmugAN5wTO" alt="Apple" className="w-5 h-5" />
                    <span className="text-sm font-medium">Apple</span>
                  </button>
                </div>
              </div>
            </form>

            <footer className="pt-8 text-center">
              <p className="text-on-surface-variant text-sm">
                Already have an account? 
                <Link to="/signin" className="text-primary font-bold ml-1 hover:underline underline-offset-4 decoration-secondary-container">Sign In</Link>
              </p>
            </footer>
          </div>
        </section>
      </main>

      {/* Success Floating Visual */}
      <div className="fixed top-32 right-12 hidden lg:block pointer-events-none z-50">
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-tertiary/10 rounded-full blur-2xl"></div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-2xl border border-white/50 backdrop-blur-sm max-w-[200px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center">
                <Leaf className="w-4 h-4 text-tertiary fill-tertiary/20" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary">Sustainability</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Club members fund carbon-neutral transport for every delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
