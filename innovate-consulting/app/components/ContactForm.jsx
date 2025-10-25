"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    services: [],
    message: "Tell us about your needs...",
    contactMethod: "Email",
    bestTime: "",
    privacy: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "Business Strategy",
    "Digital Transformation",
    "Financial Advisory",
    "Marketing Consulting",
    "Operational Excellence",
  ];

  const industries = [
    "Technology",
    "Manufacturing",
    "Retail",
    "Finance",
    "Healthcare",
    "Other",
  ];

  const contactTimes = ["Morning", "Afternoon", "Evening"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "services") {
      setFormData((prev) => {
        const updatedServices = checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value);
        return { ...prev, services: updatedServices };
      });
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.privacy) newErrors.privacy = "You must accept the privacy policy.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setErrors({});
    console.log("Form Data Submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      services: [],
      message: "Tell us about your needs...",
      contactMethod: "Email",
      bestTime: "",
      privacy: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto"
    >
      {submitted && (
        <p className="text-green-600 font-medium">
          ✅ Thank you! Your request has been submitted.
        </p>
      )}

      {/* Full Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address*"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number*"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Company */}
      <div>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Industry */}
      <div>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Industry/Business Type</option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Services (multi-select checkboxes) */}
      <div>
        <p className="font-medium mb-2">Service Interest (select all that apply)</p>
        <div className="flex flex-wrap gap-4">
          {servicesList.map((service) => (
            <label key={service} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleChange}
                className="accent-blue-600"
              />
              {service}
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          placeholder="Tell us about your needs..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Preferred Contact Method */}
      <div>
        <p className="font-medium mb-2">Preferred Contact Method</p>
        <select
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </div>

      {/* Best Time to Contact */}
      <div>
        <select
          name="bestTime"
          value={formData.bestTime}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Best Time to Contact</option>
          {contactTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* Privacy Policy */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          className="accent-blue-600"
        />
        <label className="text-gray-700 text-sm">
          I agree to the <a href="#" className="text-blue-600 hover:underline">privacy policy*</a>
        </label>
      </div>
      {errors.privacy && <p className="text-red-600 text-sm mt-1">{errors.privacy}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Request Free Consultation
      </button>

      {/* Placeholder for reCAPTCHA v3 */}
      {/* TODO: Integrate reCAPTCHA v3 here */}
    </form>
  );
}
