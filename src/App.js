import logo from './assets/logo.png';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function App() {
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close menu on route change
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#12223a] via-[#1e2a44] to-[#23304a]">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white/5 shadow-md sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Omni Group Logo" className="h-14 w-14 rounded-full shadow-lg bg-white/10 p-2" />
          <span className="text-2xl font-bold text-white tracking-wide hidden sm:inline">Omni Group</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-300 transition'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-300 transition'}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-300 transition'}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-300 transition'}>Contact</NavLink>
        </nav>
        {/* Hamburger Button */}
        <button className="md:hidden text-white text-3xl focus:outline-none z-40" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/70 z-30 flex flex-col items-end md:hidden">
            <div className="w-2/3 max-w-xs bg-[#1e2a44] h-full shadow-lg flex flex-col gap-8 pt-24 px-8 animate-slideInRight">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'text-yellow-400 font-bold' : 'text-white hover:text-yellow-300 transition'} onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-400 font-bold' : 'text-white hover:text-yellow-300 transition'} onClick={() => setMenuOpen(false)}>About</NavLink>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'text-yellow-400 font-bold' : 'text-white hover:text-yellow-300 transition'} onClick={() => setMenuOpen(false)}>Services</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-400 font-bold' : 'text-white hover:text-yellow-300 transition'} onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full px-2 sm:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#10192b]/95 text-white py-8 mt-8 flex flex-col items-center gap-4 shadow-inner">
        <img src={logo} alt="Omni Group Logo" className="h-12 w-12 rounded-full shadow bg-white/10 p-1" />
        <div className="flex gap-6 text-base font-medium">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300 transition'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300 transition'}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300 transition'}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300 transition'}>Contact</NavLink>
        </div>
        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400 transition"><FaLinkedin /></a>
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition"><FaFacebook /></a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition"><FaTwitter /></a>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-300 text-sm mt-2">
          <div className="flex items-center gap-2"><FaEnvelope className="text-yellow-400" /> contact@omnigroup.com</div>
          <div className="flex items-center gap-2"><FaPhone className="text-yellow-400" /> +1 (555) 123-4567</div>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Omni Group LLC. All rights reserved.</p>
      </footer>
      {/* Back to Top Button */}
      {showTop && (
        <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-yellow-400 text-[#12223a] text-2xl shadow-lg hover:bg-yellow-300 transition flex items-center justify-center animate-bounce z-40" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
