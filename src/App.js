import logo from './assets/logo.png';
import { FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaBars, FaTimes, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// Mobile hero feature accordion data
const heroFeatures = [
  {
    title: 'Always Open, Always Ready',
    desc: "No matter the time—day or night—we've got you covered. Our team is available 24/7 to handle every call, message, or inquiry, ensuring your business stays responsive and reliable around the clock. With our nonstop support, you'll never miss a beat—or a customer.",
  },
  {
    title: 'Highly Expertized Team',
    desc: 'Our strength lies in a highly expertized, English-fluent team trained to deliver outstanding customer experiences. With deep industry knowledge and polished communication skills, they handle every interaction with precision and care—always putting your brand and customers first.',
  },
  {
    title: 'Cost-Savings Without Compromise',
    desc: 'Cut down on expenses while elevating performance. Our outsourcing solutions give you access to a skilled, ready-to-go team—without the costs of hiring, training, or managing in-house staff. Enjoy reliable support, streamlined operations, and scalable growth—all at a fraction of the price.',
  },
];

function App() {
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openFeature, setOpenFeature] = useState(null); // for mobile hero accordion

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'vision', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  // Close menu on resize
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#12223a] via-[#1e2a44] to-[#23304a]">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-2 bg-white/10 backdrop-blur-md shadow-md sticky top-0 z-30">
        <div className="flex items-center gap-4 min-w-[100px]">
          <img src={logo} alt="Omni Group Logo" className="h-20 w-auto" style={{ transform: 'scale(1.50)' }} />
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-xl font-semibold">
          <button 
            onClick={() => scrollToSection('home')}
            className={`transition ${activeSection === 'home' ? 'text-black font-semibold' : 'text-white hover:text-gray-300'}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('vision')}
            className={`transition ${activeSection === 'vision' ? 'text-black font-semibold' : 'text-white hover:text-gray-300'}`}
          >
            Our Vision
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`transition ${activeSection === 'services' ? 'text-black font-semibold' : 'text-white hover:text-gray-300'}`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`transition ${activeSection === 'contact' ? 'text-black font-semibold' : 'text-white hover:text-gray-300'}`}
          >
            Contact
          </button>
        </nav>
        {/* Hamburger Button */}
        <button className="md:hidden text-[#23304a] text-2xl focus:outline-none z-40" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="fixed inset-0 w-screen h-screen bg-[#1e2a44] z-[9999] flex flex-col items-center justify-center md:hidden" style={{backdropFilter: 'none'}}>
            <div className="flex flex-col gap-8 text-center w-full max-w-xs animate-slideInRight">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-2xl font-semibold transition ${activeSection === 'home' ? 'text-yellow-400' : 'text-white hover:text-yellow-300'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className={`text-2xl font-semibold transition ${activeSection === 'vision' ? 'text-yellow-400' : 'text-white hover:text-yellow-300'}`}
              >
                Our Vision
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-2xl font-semibold transition ${activeSection === 'services' ? 'text-yellow-400' : 'text-white hover:text-yellow-300'}`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-2xl font-semibold transition ${activeSection === 'contact' ? 'text-yellow-400' : 'text-white hover:text-yellow-300'}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content - Single Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat hero-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 sm:mb-8 drop-shadow-lg">
              Your Trusted Partner in <span className="text-yellow-400">Scalable Growth</span> and <span className="text-yellow-400">Seamless Operations</span>
            </h1>
            <p className="text-base sm:text-xl text-center text-gray-200 mb-6 sm:mb-10 max-w-3xl mx-auto hidden sm:block">
              At Omni Group LLC, we don't just offer outsourcing—we become an extension of your business. With a team of skilled professionals, proven systems, and a commitment to excellence, we help you reduce costs, boost efficiency, and grow without limits.
            </p>
            {/* Mobile: Accordion, Desktop: Vertical List */}
            <div className="block sm:hidden mt-10 max-w-2xl mx-auto">
              {heroFeatures.map((f, i) => (
                <div key={f.title} className="mb-4">
                  <button
                    className="w-full text-lg font-bold text-white bg-[#1e2a44] rounded-lg py-3 px-4 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenFeature(openFeature === i ? null : i)}
                  >
                    <span>{f.title}</span>
                    <span className={`ml-2 transition-transform ${openFeature === i ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  {openFeature === i && (
                    <div className="bg-[#23304a] text-gray-200 text-base rounded-b-lg px-4 py-3 text-left animate-fadeIn">
                      {f.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="hidden sm:flex flex-col gap-8 mt-16 max-w-4xl mx-auto">
              {heroFeatures.map((f) => (
                <div className="text-center" key={f.title}>
                  <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-200">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-8">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Omni Group LLC is a trusted partner in Business Process Outsourcing (BPO), delivering high-quality customer experience and telemarketing solutions. Our success comes from attracting top talent and applying proven systems that meet global standards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              We provide reliable, cost-effective call center services tailored to growing business needs—whether you're a small startup or a large enterprise. Headquartered in Kosovo, our experienced team ensures cultural alignment and professional communication that reflects your brand.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Our mission is to be the leading offshore partner in the digital age—powered by innovation, global capabilities, and exceptional service. Let Omni Group LLC handle your customer support needs so you can focus on scaling your business with confidence.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-[#12223a] via-[#1e2a44] to-[#23304a]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-16">Our Services</h2>
            
            <div className="space-y-16">
              {/* Service 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                    alt="Lead Generation" 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg service-image"
                  />
                </div>
                <div className="lg:w-1/2 text-white">
                  <h3 className="text-3xl font-bold mb-4">Lead Generation</h3>
                  <p className="text-lg text-gray-200 leading-relaxed mb-2">
                    Fuel Your Sales Pipeline Without Wasting Time
                  </p>
                  <p className="text-gray-300 mb-2">
                    Outsource your lead generation to Omni Group and let us handle the heavy lifting — prospecting, qualifying, and booking meetings with decision-makers.<br/>
                    Whether it’s inbound or outbound, we’ll fill your calendar with high-quality leads so your sales team can focus on closing.
                  </p>
                  <ul className="text-gray-200 text-base list-none space-y-1 mb-2">
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" />More qualified leads</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" />Cross-platform campaigns</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" />Full control, zero wasted time</li>
                  </ul>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Sales Appointment Setting" 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg service-image"
                  />
                </div>
                <div className="lg:w-1/2 text-white">
                  <h3 className="text-3xl font-bold mb-4">Sales Outsourcing & Appointment Setting</h3>
                  <p className="text-lg text-gray-200 leading-relaxed mb-2">
                    Your Sales Team, Supercharged
                  </p>
                  <p className="text-gray-300 mb-2">
                    Don’t have time to build and manage a full sales team? We’ve got you covered.<br/>
                    From lead gen to appointment setting, we handle the outreach — you just show up and sell.
                  </p>
                  <ul className="text-gray-200 text-base list-none space-y-1 mb-2">
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" />Save time and resources</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" />Break into new markets</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" />Booked appointments, no cold calls</li>
                  </ul>
                  <p className="text-gray-300">
                    We qualify leads, nurture them through your funnel, and deliver sales-ready meetings straight to your team.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Customer Support" 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 text-white">
                  <h3 className="text-3xl font-bold mb-4">Outsourced Customer Support</h3>
                  <p className="text-lg text-gray-200 leading-relaxed mb-2">
                    Customer Support That Never Sleeps
                  </p>
                  <p className="text-gray-300 mb-2">
                    Deliver 5-star service without the overhead. Our trained agents handle your support across phone, email, chat, and social media — so your customers stay happy, loyal, and informed.
                  </p>
                  <ul className="text-gray-200 text-base list-none space-y-1 mb-2">
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" />Tech & product support</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" />Inbound sales & order handling</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" />Loyalty & retention programs</li>
                  </ul>
                  <p className="text-gray-300">
                    Free up your internal resources while improving retention and lowering support costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#12223a] mb-8">Contact Us</h2>
            <div className="flex flex-col gap-6 items-center mb-8">
              <div className="flex items-center gap-3 text-lg text-gray-700">
                <FaEnvelope className="text-[#12223a]" />
                <span>contact@omnigroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-lg text-gray-700">
                <FaPhone className="text-[#12223a]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-lg text-gray-700">
                <FaMapMarkerAlt className="text-[#12223a]" />
                <span>123 Main St, Pristina, Kosovo</span>
              </div>
            </div>
            <a
              href="mailto:contact@omnigroup.com"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#12223a] font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#10192b]/95 text-white py-8 flex flex-col items-center gap-4 shadow-inner">
        <img src={logo} alt="Omni Group Logo" className="h-12 w-12 rounded-full shadow bg-white/10 p-1" />
        <div className="flex gap-6 text-base font-medium">
          <button onClick={() => scrollToSection('home')} className="hover:text-yellow-300 transition">Home</button>
          <button onClick={() => scrollToSection('vision')} className="hover:text-yellow-300 transition">Our Vision</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-yellow-300 transition">Services</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-300 transition">Contact</button>
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
