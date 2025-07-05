import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUsers, FaPiggyBank } from 'react-icons/fa';

const features = [
  {
    title: 'Always Open, Always Ready',
    desc: 'No matter the time—day or night—we’ve got you covered. Our team is available 24/7 to handle every call, message, or inquiry, ensuring your business stays responsive and reliable around the clock. With our nonstop support, you’ll never miss a beat—or a customer.',
    icon: <FaClock className="text-4xl text-yellow-400 mb-2" />,
  },
  {
    title: 'Highly Expertized Team You Can Rely On',
    desc: 'Our strength lies in a highly expertized, English-fluent team trained to deliver outstanding customer experiences. With deep industry knowledge and polished communication skills, they handle every interaction with precision and care—always putting your brand and customers first.',
    icon: <FaUsers className="text-4xl text-yellow-400 mb-2" />,
  },
  {
    title: 'Cost-Savings Without Compromise',
    desc: 'Cut down on expenses while elevating performance. Our outsourcing solutions give you access to a skilled, ready-to-go team—without the costs of hiring, training, or managing in-house staff. Enjoy reliable support, streamlined operations, and scalable growth—all at a fraction of the price.',
    icon: <FaPiggyBank className="text-4xl text-yellow-400 mb-2" />,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } },
};

const Home = () => (
  <section className="w-full max-w-5xl mx-auto flex flex-col items-center py-16 px-4">
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white mb-6 drop-shadow-lg"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Your Trusted Partner in <span className="text-yellow-400">Scalable Growth</span> and <span className="text-yellow-400">Seamless Operations</span>
    </motion.h1>
    <motion.p
      className="text-lg sm:text-xl text-center text-gray-200 mb-10 max-w-3xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      At Omni Group LLC, we don’t just offer outsourcing—we become an extension of your business. With a team of skilled professionals, proven systems, and a commitment to excellence, we help you reduce costs, boost efficiency, and grow without limits.
    </motion.p>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          className="flex flex-col items-center bg-white/10 rounded-2xl shadow-lg p-8 text-center hover:scale-105 hover:shadow-2xl transition transform duration-300"
          variants={cardVariants}
          whileHover={{ scale: 1.06 }}
        >
          {f.icon}
          <h2 className="text-xl font-bold text-white mb-2">{f.title}</h2>
          <p className="text-gray-200 text-base">{f.desc}</p>
        </motion.div>
      ))}
    </motion.div>
    <motion.div
      className="mt-12 flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      <a
        href="/contact"
        className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#12223a] font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 transition"
      >
        Get Started
      </a>
    </motion.div>
  </section>
);

export default Home; 