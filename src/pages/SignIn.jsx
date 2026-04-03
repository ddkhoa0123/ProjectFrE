import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function SignIn() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col items-center justify-center selection:bg-secondary-container">
      {/* Top AppBar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-center px-6 py-8">
        <div className="text-3xl font-headline italic font-medium tracking-tight text-primary">
          Aura Brew
        </div>
      </header>

      <main className="w-full max-w-[1440px] px-6 py-20 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left Column: Narrative/Visual */}
        <div className="hidden lg:flex flex-col w-1/2 space-y-8 relative">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK_x8of42oGFryM6zEkWPI6DpOEDnXVIb5zC3fZW768nB3gjgf3ansXc8XiMyi1w-wElliFa_J4FaQTiRDdKbuxl41RmwaSl5d5i8K86nc-Mzyd8l6sHsHZBYkEhuOjA_y12ulEkcbPuiTBEp0zBVRUNhfHSt1kR2UdmGA1jc0J52LfLWlzIof8do-PWHU6HBc87lwS5yFIFpHbE1wT7TfatiHCN4an6rGt-sCxyauY_UeiAx-UZ2lQyTHgpQLXdy5lv2_8UnX3RjQ" alt="Artisan coffee" className="object-cover w-full h-full grayscale-[20%] sepia-[20%] brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12">
              <h2 className="text-5xl md:text-6xl text-surface font-headline font-bold -tracking-[0.02em] leading-tight mb-4">
                Awaken Your <br/>Ritual.
              </h2>
              <p className="text-surface-container-low font-body text-lg max-w-md opacity-90">
                Join our curated community of sensory explorers. Your perfect brew is just a login away.
              </p>
            </div>
          </div>
          {/* Organic overlap element */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Column: Login Form */}
        <div className="w-full max-w-md flex flex-col z-10">
          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-4xl font-headline font-bold text-primary mb-2">Welcome Back</h1>
            <p className="text-on-surface-variant/70 font-body">Please enter your details to continue your journey.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-[0.1em] text-on-surface-variant font-semibold">Email Address</label>
              <div className="relative group">
                <input type="email" placeholder="name@example.com" className="w-full bg-surface-container-highest/40 border-0 border-b-2 border-outline-variant/30 focus:border-tertiary focus:ring-0 px-4 py-4 transition-all duration-300 font-body text-primary placeholder:text-on-surface-variant/40 rounded-t-xl" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-label uppercase tracking-[0.1em] text-on-surface-variant font-semibold">Password</label>
                <a href="#" className="text-xs font-body font-semibold text-secondary hover:text-primary transition-colors">Forgot Password?</a>
              </div>
              <div className="relative group">
                <input type="password" placeholder="••••••••" className="w-full bg-surface-container-highest/40 border-0 border-b-2 border-outline-variant/30 focus:border-tertiary focus:ring-0 px-4 py-4 transition-all duration-300 font-body text-primary placeholder:text-on-surface-variant/40 rounded-t-xl" />
              </div>
            </div>

            <Link to="/" className="w-full aroma-gradient text-on-primary font-body font-bold py-5 rounded-full shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 tracking-wide text-lg flex items-center justify-center">
              Sign In
            </Link>
          </form>

          {/* Divider */}
          <div className="my-10 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/50">or continue with</span>
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border border-outline-variant/20 rounded-full hover:bg-surface-container-high transition-colors group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR6q5DS2R25GAjqZYpQtsbbtP0nJlpoqaaJ2KrCGqtpaD3wwaNq8Et4u-oZKgwMl9BkvBHDPgH-otn-6RXe2y8JrrE1T9YEyQxC9LeYr-ma1HmiQ-SN1nSuA_pPPp7Rg-4w07o5I_2xRPsCMHbN0r2hgeLjdVJcR2TgmfOIVWvILPxRXknc-kdHhCwBuvOtz_330cPHD6oCR75iCA3_1ZQ9prvwSK4i8LxSmnfmGQv8_M8MfsrlG0-oVQqxYxTL4ZlS_4Q3dGohuxq" alt="Google" className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="font-body font-semibold text-primary">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-outline-variant/20 rounded-full hover:bg-surface-container-high transition-colors group">
              <span className="font-body font-semibold text-primary">Apple</span>
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-on-surface-variant font-body">
              New to Aura Brew? 
              <Link to="/signup" className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all ml-1">Create an Account</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer Visual Element */}
      <div className="fixed bottom-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <Leaf className="w-[30rem] h-[30rem] text-tertiary fill-tertiary/20" />
      </div>
    </div>
  );
}
