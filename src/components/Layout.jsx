import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, Bell, Home, Coffee, ShoppingBag, User, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

export default function Layout() {
  const location = useLocation();
  const { itemCount } = useCart();
  
  // Hide nav on auth screens
  const isAuthScreen = ['/signin', '/signup'].includes(location.pathname);
  // Hide bottom nav on admin screen
  const isAdminScreen = location.pathname.startsWith('/admin');

  if (isAuthScreen) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-[#fbfbe2]/70 backdrop-blur-xl flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-4">
          <button className="text-[#33210d] hover:scale-105 transition-transform active:scale-95 duration-200">
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="text-2xl font-headline font-bold text-[#33210d]">Aura Brew</Link>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 font-label text-sm font-bold tracking-widest uppercase">
            <Link to="/" className={cn("transition-colors hover:text-primary", location.pathname === '/' ? "text-primary border-b-2 border-primary" : "text-primary/60")}>Home</Link>
            <Link to="/menu" className={cn("transition-colors hover:text-primary", location.pathname === '/menu' ? "text-primary border-b-2 border-primary" : "text-primary/60")}>Menu</Link>
            <Link to="/cart" className={cn("transition-colors hover:text-primary", location.pathname === '/cart' ? "text-primary border-b-2 border-primary" : "text-primary/60")}>Cart</Link>
            <Link to="/profile" className={cn("transition-colors hover:text-primary", location.pathname === '/profile' ? "text-primary border-b-2 border-primary" : "text-primary/60")}>Profile</Link>
            <Link to="/contact" className={cn("transition-colors hover:text-primary", location.pathname === '/contact' ? "text-primary border-b-2 border-primary" : "text-primary/60")}>Contact Us</Link>
            {isAdminScreen && (
              <Link to="/admin" className="text-primary border-b-2 border-primary">Admin</Link>
            )}
          </nav>
          <button className="text-[#33210d] hover:scale-105 transition-transform active:scale-95 duration-200">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Bottom Navigation (Mobile) */}
      {!isAdminScreen && (
        <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#fbfbe2]/80 backdrop-blur-xl z-50 rounded-t-[2rem] shadow-[0_-4px_24px_rgba(75,54,33,0.06)]">
          <Link to="/" className={cn("flex flex-col items-center justify-center transition-all duration-300 ease-out", location.pathname === '/' ? "bg-primary text-surface rounded-full w-12 h-12" : "text-primary opacity-50 hover:opacity-100")}>
            <Home className="w-6 h-6" />
            {location.pathname !== '/' && <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Home</span>}
          </Link>
          <Link to="/menu" className={cn("flex flex-col items-center justify-center transition-all duration-300 ease-out", location.pathname === '/menu' ? "bg-primary text-surface rounded-full w-12 h-12" : "text-primary opacity-50 hover:opacity-100")}>
            <Coffee className="w-6 h-6" />
            {location.pathname !== '/menu' && <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Menu</span>}
          </Link>
          <Link to="/cart" className={cn("flex flex-col items-center justify-center transition-all duration-300 ease-out relative", location.pathname === '/cart' ? "bg-primary text-surface rounded-full w-12 h-12" : "text-primary opacity-50 hover:opacity-100")}>
            <ShoppingBag className="w-6 h-6" />
            {itemCount > 0 && location.pathname !== '/cart' && (
              <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{itemCount}</span>
            )}
            {location.pathname !== '/cart' && <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Cart</span>}
          </Link>
          <Link to="/profile" className={cn("flex flex-col items-center justify-center transition-all duration-300 ease-out", location.pathname === '/profile' ? "bg-primary text-surface rounded-full w-12 h-12" : "text-primary opacity-50 hover:opacity-100")}>
            <User className="w-6 h-6" />
            {location.pathname !== '/profile' && <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Profile</span>}
          </Link>
          <Link to="/contact" className={cn("flex flex-col items-center justify-center transition-all duration-300 ease-out", location.pathname === '/contact' ? "bg-primary text-surface rounded-full w-12 h-12" : "text-primary opacity-50 hover:opacity-100")}>
            <MessageSquare className="w-6 h-6" />
            {location.pathname !== '/contact' && <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Contact</span>}
          </Link>
        </nav>
      )}
    </div>
  );
}
