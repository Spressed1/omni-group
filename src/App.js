import logo from './assets/logo.png';
import logoWide from './assets/logo wide.png';
import contactUs from './assets/contact.jpg';
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
      <header className="w-full flex items-center justify-between px-8 py-2 bg-[#12223a]/80 backdrop-blur-md shadow-md sticky top-0 z-30">
        <div className="flex items-center gap-4 min-w-[100px] ml-4">
          <button onClick={scrollToTop} className="transition hover:opacity-80">
            <img src={logoWide} alt="Omni Group Logo" className="h-12 w-auto" />
          </button>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-xl font-semibold">
          <button 
            onClick={() => scrollToSection('home')}
            className={`transition ${activeSection === 'home' ? 'text-[#ADD8E6] font-semibold' : 'text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('vision')}
            className={`transition ${activeSection === 'vision' ? 'text-[#ADD8E6] font-semibold' : 'text-white'}`}
          >
            Our Vision
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`transition ${activeSection === 'services' ? 'text-[#ADD8E6] font-semibold' : 'text-white'}`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`transition ${activeSection === 'contact' ? 'text-[#ADD8E6] font-semibold' : 'text-white'}`}
          >
            Contact
          </button>
        </nav>
        {/* Hamburger Button */}
        <button className="md:hidden text-white text-2xl focus:outline-none z-40" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="fixed inset-0 w-screen h-screen bg-[#1e2a44] z-[9999] flex flex-col items-center justify-center md:hidden" style={{backdropFilter: 'none'}}>
            <div className="flex flex-col gap-8 text-center w-full max-w-xs animate-slideInRight">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-2xl font-semibold transition ${activeSection === 'home' ? 'text-[#ADD8E6]' : 'text-white'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className={`text-2xl font-semibold transition ${activeSection === 'vision' ? 'text-[#ADD8E6]' : 'text-white'}`}
              >
                Our Vision
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-2xl font-semibold transition ${activeSection === 'services' ? 'text-[#ADD8E6]' : 'text-white'}`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-2xl font-semibold transition ${activeSection === 'contact' ? 'text-[#ADD8E6]' : 'text-white'}`}
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
        <section id="home" className="relative min-h-[140vh] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-12 sm:mb-16 drop-shadow-lg">
              Your Trusted Partner in <span className="text-[#ADD8E6]">Scalable Growth</span> and <span className="text-[#ADD8E6]">Seamless Operations</span>
            </h1>
            <p className="text-base sm:text-xl text-center text-[#ADD8E6] mb-12 sm:mb-16 max-w-3xl mx-auto hidden sm:block leading-relaxed">
              At Omni Group LLC, we don't just offer outsourcing—we become an extension of your business. With a team of skilled professionals, proven systems, and a commitment to excellence, we help you reduce costs, boost efficiency, and grow without limits.
            </p>
            {/* Mobile: Enhanced Accordion */}
            <div className="block sm:hidden mt-20 max-w-2xl mx-auto">
              <div className="bg-[#1e2a44]/80 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Why Choose Omni Group?</h3>
                <div className="space-y-6">
                  {heroFeatures.map((f, i) => (
                    <div key={f.title} className="bg-[#23304a]/90 rounded-xl overflow-hidden">
                      <button
                        className="w-full text-lg font-semibold text-white bg-[#1e2a44] py-6 px-6 flex justify-between items-center focus:outline-none hover:bg-[#2a3a5a] transition-colors"
                        onClick={() => setOpenFeature(openFeature === i ? null : i)}
                      >
                        <span className="text-left">{f.title}</span>
                        <span className={`ml-3 transition-transform duration-300 text-[#ADD8E6] ${openFeature === i ? 'rotate-90' : ''}`}>▶</span>
                      </button>
                      {openFeature === i && (
                        <div className="bg-[#23304a] text-gray-200 text-lg px-6 py-6 text-left animate-fadeIn leading-relaxed">
                          {f.desc}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col gap-16 mt-24 max-w-4xl mx-auto">
              {heroFeatures.map((f) => (
                <div className="text-center" key={f.title}>
                  <h3 className="text-xl font-bold text-white mb-6">{f.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-16">Our Vision</h2>
            <div className="space-y-12">
              <div className="bg-gray-50 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-[#12223a] mb-6">Trusted BPO Partner</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Omni Group LLC is a trusted partner in Business Process Outsourcing (BPO), delivering high-quality customer experience and telemarketing solutions. Our success comes from attracting top talent and applying proven systems that meet global standards.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-[#12223a] mb-6">Scalable Solutions</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide reliable, cost-effective call center services tailored to growing business needs—whether you're a small startup or a large enterprise. Headquartered in Kosovo, our experienced team ensures cultural alignment and professional communication that reflects your brand.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-[#12223a] mb-6">Leading Innovation</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to be the leading offshore partner in the digital age—powered by innovation, global capabilities, and exceptional service. Let Omni Group LLC handle your customer support needs so you can focus on scaling your business with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-40 bg-gradient-to-br from-[#12223a] via-[#1e2a44] to-[#23304a]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-32">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We provide comprehensive outsourcing solutions that help your business scale efficiently while maintaining quality and reducing costs.
              </p>
            </div>
            
            <div className="space-y-40">
              {/* Service 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                    alt="Lead Generation" 
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl service-image"
                  />
                </div>
                <div className="lg:w-1/2 text-white">
                  <h3 className="text-4xl font-bold mb-10 text-[#ADD8E6]">Lead Generation</h3>
                  <p className="text-xl text-gray-200 leading-relaxed mb-8 font-semibold">
                    Fuel Your Sales Pipeline Without Wasting Time
                  </p>
                  <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    Outsource your lead generation to Omni Group and let us handle the heavy lifting — prospecting, qualifying, and booking meetings with decision-makers.
                  </p>
                  <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    Whether it's inbound or outbound, we'll fill your calendar with high-quality leads so your sales team can focus on closing.
                  </p>
                  <ul className="text-gray-200 text-lg list-none space-y-5 mb-8">
                    <li className="flex items-center gap-4"><FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />More qualified leads</li>
                    <li className="flex items-center gap-4"><FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />Cross-platform campaigns</li>
                    <li className="flex items-center gap-4"><FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />Full control, zero wasted time</li>
                  </ul>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Sales Appointment Setting" 
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl service-image"
                  />
                </div>
                <div className="lg:w-1/2 text-white">
                  <h3 className="text-4xl font-bold mb-10 text-[#ADD8E6]">Sales Outsourcing & Appointment Setting</h3>
                  <p className="text-xl text-gray-200 leading-relaxed mb-8 font-semibold">
                    Your Sales Team, Supercharged
                  </p>
                  <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    Don't have time to build and manage a full sales team? We've got you covered.
                  </p>
                  <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    From lead gen to appointment setting, we handle the outreach — you just show up and sell.
                  </p>
                  <ul className="text-gray-200 text-lg list-none space-y-5 mb-10">
                    <li className="flex items-center gap-4"><FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />Save time and resources</li>
                    <li className="flex items-center gap-4"><FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />Break into new markets</li>
                    <li className="flex items-center gap-4"><FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />Booked appointments, no cold calls</li>
                  </ul>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We qualify leads, nurture them through your funnel, and deliver sales-ready meetings straight to your team.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Customer Support" 
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="lg:w-1/2 text-white">
                  <h3 className="text-4xl font-bold mb-10 text-[#ADD8E6]">Outsourced Customer Support</h3>
                  <p className="text-xl text-gray-200 leading-relaxed mb-8 font-semibold">
                    Customer Support That Never Sleeps
                  </p>
                  <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    Deliver 5-star service without the overhead. Our trained agents handle your support across phone, email, chat, and social media — so your customers stay happy, loyal, and informed.
                  </p>
                  <ul className="text-gray-200 text-lg list-none space-y-5 mb-10">
                    <li className="flex items-center gap-4"><FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />Tech & product support</li>
                    <li className="flex items-center gap-4"><FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />Inbound sales & order handling</li>
                    <li className="flex items-center gap-4"><FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />Loyalty & retention programs</li>
                  </ul>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Free up your internal resources while improving retention and lowering support costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white relative" style={{ backgroundImage: 'url("' + contactUs + '")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#12223a] mb-16">Contact Us</h2>
            <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
              <div className="flex flex-col gap-10 items-center">
                <div className="flex items-center gap-4 text-xl text-gray-700">
                  <FaEnvelope className="text-[#12223a] text-2xl" />
                  <span className="font-semibold">contact@omnigroup.com</span>
                </div>
                <div className="flex items-center gap-4 text-xl text-gray-700">
                  <FaPhone className="text-[#12223a] text-2xl" />
                  <span className="font-semibold">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-xl text-gray-700">
                  <FaMapMarkerAlt className="text-[#12223a] text-2xl" />
                  <span className="font-semibold">123 Main St, Pristina, Kosovo</span>
                </div>
              </div>
            </div>
            <a
              href="mailto:contact@omnigroup.com"
              className="inline-block px-12 py-5 rounded-full bg-[#12223a] text-white font-bold text-xl shadow-lg hover:bg-[#1e2a44] transition-colors"
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
          <button onClick={() => scrollToSection('home')} className="transition">Home</button>
          <button onClick={() => scrollToSection('vision')} className="transition">Our Vision</button>
          <button onClick={() => scrollToSection('services')} className="transition">Services</button>
          <button onClick={() => scrollToSection('contact')} className="transition">Contact</button>
        </div>
        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="LinkedIn" className="transition"><FaLinkedin /></a>
          <a href="#" aria-label="Facebook" className="transition"><FaFacebook /></a>
          <a href="#" aria-label="Twitter" className="transition"><FaTwitter /></a>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-300 text-sm mt-2">
          <div className="flex items-center gap-2"><FaEnvelope className="text-[#ADD8E6]" /> contact@omnigroup.com</div>
          <div className="flex items-center gap-2"><FaPhone className="text-[#ADD8E6]" /> +1 (555) 123-4567</div>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Omni Group LLC. All rights reserved.</p>
      </footer>

      {/* Back to Top Button */}
      {showTop && (
        <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white text-[#12223a] text-2xl shadow-lg hover:bg-gray-100 transition flex items-center justify-center animate-bounce z-40" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
