import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Lead Generation',
    summary: 'Get people interested in your business and move them through a pipeline to become paying customers.',
    details: `Lead generation is the process of getting people interested in your business and gradually moving them through a pipeline to become paying customers. It is the process of finding, contacting, nurturing, and converting leads into potential B2B buyers of your products or services. This process is not easy. That’s why you can use the help of a lead generation outsourcing company to improve your sales development and bring efficiency to every sale you make. Lead generation usually falls into two main categories: (a) Inbound lead generation (B) Outbound lead generation.
Lead Generation Outsourcing can save time on prospecting, identifying the most qualified leads, and setting up meetings between those leads and your rock-star salespeople.
As a lead generation company we give you much more control over your campaign or future campaigns. We are able to advertise on a number of different media platforms. This allows you to spread your message across a wide variety of people. We will also help you get the most out of your marketing campaign; All while saving you time and money.`
  },
  {
    title: 'Sales / Appointment Setting',
    summary: 'Outsource your sales and appointment setting to a trusted marketing agency such as Omni Group LLC.',
    details: `Sales outsourcing is the process of hiring an outside company or individual to handle sales activities on your behalf. This can include anything from lead generation and prospecting to appointment setting and closing deals.
There are a number of reasons why you might choose to outsource your sales efforts. Perhaps you don't have the in-house resources to dedicate to a full-time sales team. Or maybe you're looking to break into a new market and need some help getting started. Whatever the reason, there are a few things you should keep in mind if you're considering outsourcing your sales function. First, it's important to find a reputable company or individual with experience in your industry. You'll also want to clearly define your goals and objectives for the outsourcing arrangement. Finally, make sure you have a good system in place for tracking results and measuring success.
Outsourcing your sales can be a great way to free up time and resources so you can focus on other areas.
B2B Appointment Setting is a strategy to bring in new prospects by setting a date on the calendar for your sales team to discuss your product and potentially make a sale. All of this can be done by an outsourced company, so all your sales team has to do is look at their calendar and show up for the appointment.
Knowledge of quality leads and the stages of those leads is key to closing sales with prospective clients. Leads of strong quality should be with your sales team, while leads at the top of the marketing funnel need a little nurturing to become stronger leads. Appointment setting services are an excellent way to grow these leads and turn them into sales.
The metrics involved in outsourcing marketing performance and strategies increases the knowledge and ability of your business to drive more revenue, increase brand recognition in your target market, and enable hitting those goals consistently.`
  },
  {
    title: 'Customer Support',
    summary: 'Save time and resources by outsourcing customer support to our expert team.',
    details: `Customer service is the assistance and advice provided by our company to those people who buy or use its products or services. Our customer service call center jobs involve assisting customers with their issues. Our call center agents use several channels, including social media, email, chat, and phone, to manage customer interactions, provide information and assistance with any problem the customers might have.
Our tasks include answering questions, tech and customer support, inbound sales, order processing, loyalty programs, and dispatch. Our inbound call center also have many powerful tools that help us achieve our goals.
Customer service outsourcing is achieved by going through a quality-driven decision process to access specialists who understand customer service trends, increase customer retention rates and reduce costs.
Customer service matters now more than ever. And with ever-evolving circumstances to contend with, brands must rethink best practices and build new strategies to deliver the best service possible.`
  }
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, idx) => (
          <motion.div
            key={service.title}
            className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center justify-between w-full cursor-pointer mb-2" onClick={() => toggleService(idx)}>
              <h3 className="text-xl font-bold text-white flex-1">{service.title}</h3>
              <span className="ml-2 text-yellow-400 text-xl">
                {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div className="text-gray-200 mb-2">{service.summary}</div>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden text-gray-100 text-sm mt-2"
                >
                  <p>{service.details}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services; 