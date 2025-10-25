"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Dynamically import map with SSR disabled
const OfficeMap = dynamic(() => import("../components/OfficeMap"), { ssr: false });

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    services: [],
    message: "Tell us about your needs...",
    contactMethod: "",
    bestTime: "",
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const servicesList = [
    "Business Strategy",
    "Digital Transformation",
    "Market Analysis",
    "Operational Excellence",
    "Technology Consulting",
    "Financial Advisory",
  ];

  const industries = [
    "Information Technology",
    "Finance & Banking",
    "Healthcare",
    "Manufacturing",
    "Education",
    "Retail & E-commerce",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted successfully!");
  };

  const offices = [
    {
      city: "Mumbai",
      address: "123 Corporate Street, Sector 21, Mumbai, Maharashtra, India, 400001",
      phone: "+911234567890",
      displayPhone: "+91 12345 67890",
      email: "info@innovateconsulting.com",
      hours: "Monday – Friday: 9:00 AM – 6:00 PM",
      whatsapp: "911234567890",
      linkedin: "https://www.linkedin.com/company/innovateconsulting/",
      lat: 18.975,
      lng: 72.8356,
    },
    {
      city: "Delhi",
      address: "45 Business Avenue, Connaught Place, New Delhi, 110001",
      phone: "+919876543210",
      displayPhone: "+91 98765 43210",
      email: "delhi@innovateconsulting.com",
      hours: "Monday – Friday: 9:00 AM – 6:00 PM",
      whatsapp: "919876543210",
      linkedin: "https://www.linkedin.com/company/innovateconsulting-delhi/",
      lat: 28.6448,
      lng: 77.2167,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-gray-50 py-20">
      {isClient && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-5xl mx-auto px-6"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Let’s Discuss Your Goals
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you’re exploring strategic growth, digital transformation,
              or operational excellence — our team is here to guide you every step
              of the way.
            </p>
          </div>

          {/* Contact Form & Info */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div className="bg-white shadow-md rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Your Full Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Company Name"
                  />
                </div>

                {/* Industry Dropdown */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Industry/Business Type
                  </label>
                  <select
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Select Industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-gray-700 mb-2">Service Interest</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {servicesList.map((service) => (
                      <label
                        key={service}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          checked={form.services.includes(service)}
                          onChange={handleChange}
                          className="accent-blue-600"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Message / Requirements<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Contact Method */}
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    {["Email", "Phone", "WhatsApp"].map((method) => (
                      <label key={method} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={form.contactMethod === method}
                          onChange={handleChange}
                          className="accent-blue-600"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Best Time */}
                <div>
                  <label className="block text-gray-700 mb-1">Best Time to Contact</label>
                  <select
                    name="bestTime"
                    value={form.bestTime}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Select a Time</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div className="space-y-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-2xl p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{office.city} Office</h3>
                  <p className="text-gray-600 mb-2">{office.address}</p>
                  <p className="text-gray-600 mb-1">
                    📞 <a href={`tel:${office.phone}`} className="text-blue-600 hover:underline">{office.displayPhone}</a>
                  </p>
                  <p className="text-gray-600 mb-1">
                    📧 <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">{office.email}</a>
                  </p>
                  <p className="text-gray-600 mb-4">🕒 {office.hours}</p>

                  {/* Client-only Leaflet Map */}
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                    <OfficeMap lat={office.lat} lng={office.lng} city={office.city} />
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <a
                      href={`https://wa.me/${office.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>

                    <a
                      href={office.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
                    >
                      <FaLinkedin /> LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Transformation?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation today — let’s explore how Innovate Consulting can help your business grow.
            </p>
            <a
              href="mailto:info@innovateconsulting.com"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
            >
              Schedule Consultation
            </a>
          </div>
        </motion.div>
      )}
    </main>
  );
}
