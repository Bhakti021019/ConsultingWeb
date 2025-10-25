"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { articles } from "../data/articles"

export default function HomePage({title, subtitle, cta}) {
  return (
    <main className="bg-white text-gray-900">

      {/* ---------------- Hero Section ---------------- */}
       <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 pt-24 bg-slate-400">
        <div className="md:w-1/2 text-left mb-10 md:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-700 mb-8 max-w-md"
        >
          {subtitle}
        </motion.p>

        <Link
          href="/contact"
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
        >
          {cta}
        </Link>

          {/* Stats */}
          {/* Stats Section */}
<div className="flex flex-wrap justify-center gap-10 mt-8 text-center">
  {[
    { end: 15, suffix: "+", label: "Years of Experience" },
    { end: 45000, suffix: "+", label: "Clients Served" },
    { end: 98, suffix: "%", label: "Success Rate" },
  ].map((stat, i) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
      <div ref={ref} key={i}>
        <h3 className="text-3xl font-bold text-black-700">
          {inView ? (
            <CountUp
              start={0}
              end={stat.end}
              duration={2.5}
              separator=","
              suffix={stat.suffix}
            />
          ) : (
            "0"
          )}
        </h3>
        <p className="text-gray-600">{stat.label}</p>
      </div>
    );
  })}
</div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <img
            src="/Corporate Meeting Insight.jpg"
            alt="Corporate Meeting"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
        </motion.div>
      </section>

      {/* ---------------- Why Choose Us ---------------- */}
      <section className="px-10 md:px-20 py-16 bg-cyan-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            {
              title: "🌟 Trusted by 1000+ Clients",
              desc: "Building long-term relationships through reliability and quality service.",
            },
            {
              title: "🚀 Fast & Efficient Delivery",
              desc: "Ensuring timely completion without compromising on quality.",
            },
            {
              title: "💡 Innovative Solutions",
              desc: "Creative approaches tailored to your unique business needs.",
            },
            {
              title: "🔒 Secure & Confidential",
              desc: "Protecting client data and maintaining full confidentiality.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- Our Core Services ---------------- */}
      <section className="px-10 md:px-20 py-16 bg-gray-400 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "💼",
              title: "Business Consulting",
              desc: "We provide strategic business advice to help companies streamline operations, identify growth opportunities, and stay ahead in competitive markets.",
            },
            {
              icon: "📊",
              title: "Financial Advisory",
              desc: "Our financial experts deliver customized solutions for investment planning, risk management, and maximizing long-term profitability.",
            },
            {
              icon: "🌐",
              title: "Digital Transformation",
              desc: "We empower businesses through innovative digital solutions that automate workflows and enhance customer engagement.",
            },
            {
              icon: "🧠",
              title: "Strategic Planning",
              desc: "We develop actionable strategies that align with your goals, ensuring sustainable business growth.",
            },
            {
              icon: "🤝",
              title: "Client Relationship Management",
              desc: "Build long-term trust and loyalty with data-driven relationship management strategies.",
            },
            {
              icon: "⚙️",
              title: "Operational Excellence",
              desc: "We optimize business processes and improve productivity for efficient resource utilization.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <Link
                href="/services"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-medium"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* ---------------- Industries We Serve ---------------- */}
      <section className="px-10 md:px-20 py-16 bg-cyan-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { icon: "💻", name: "Technology" },
            { icon: "🏭", name: "Manufacturing" },
            { icon: "🛍️", name: "Retail" },
            { icon: "🏥", name: "Healthcare" },
            { icon: "💰", name: "Finance" },
          ].map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-4 border rounded-lg hover:shadow-md transition"
            >
              <div className="text-4xl mb-2">{ind.icon}</div>
              <h3 className="font-semibold">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-10 md:px-20 py-16 bg-gray-400 text-center">
  <h2 className="text-3xl font-bold mb-8">Latest Insights</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {articles.slice(0, 3).map((article) => (
      <div
        key={article.id}
        className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden text-left"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          <Link
            href={`/blog/${article.slug}`}
            className="text-blue-600 font-medium hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-10">
    <Link
      href="/blog"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-medium"
    >
      View All Blogs
    </Link>
  </div>
</section>

      
    </main>
  );
}
