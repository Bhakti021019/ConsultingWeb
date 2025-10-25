"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What are your pricing and fees?",
    answer: "Our fees vary depending on the scope of your project. We offer customized pricing after an initial consultation."
  },
  {
    question: "What is your process and timeline?",
    answer: "Typically, our process involves discovery, strategy development, implementation, and review. Timelines depend on project complexity."
  },
  {
    question: "How do you ensure confidentiality?",
    answer: "All client information is handled with strict confidentiality and governed by NDAs when required."
  },
  {
    question: "How does the consultation process work?",
    answer: "You can schedule an initial consultation via email. We'll understand your goals and recommend tailored solutions."
  },
  {
    question: "What industries do you have experience in?",
    answer: "We have experience in IT, Finance, Healthcare, Manufacturing, Retail, and more."
  },
  {
    question: "What should I prepare for the first meeting?",
    answer: "Bring your key business objectives, challenges, and any relevant documents to help us understand your requirements."
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-gray-50 py-20 min-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-gray-500">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
