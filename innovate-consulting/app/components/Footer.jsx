// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="text-xl font-semibold mb-2 text-white">Innovate Consulting</h3>
//           <p>Transforming businesses through strategy, innovation, and digital excellence.</p>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
//           <ul className="space-y-1">
//             <li><a href="/services" className="hover:text-white">Services</a></li>
//             <li><a href="/about" className="hover:text-white">About</a></li>
//             <li><a href="/blog" className="hover:text-white">Blog</a></li>
//             <li><a href="/contact" className="hover:text-white">Contact</a></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-3 text-white">Contact Us</h4>
//           <p>Mumbai, India</p>
//           <p>info@bharatcdx.com</p>
//           <p>+91 98765 43210</p>
//         </div>
//       </div>
//       <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
//         © {new Date().getFullYear()} Innovate Consulting. All rights reserved.
//       </div>
//     </footer>
//   );
// }


// components/Footer.tsx
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Services", href: "/services" },
  { id: 4, name: "Blog", href: "/blog" },
  { id: 5, name: "Contact", href: "/contact" },
  { id: 6, name: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      {/* Top Grid Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Innovate Consulting</h3>
          <p className="text-sm leading-relaxed">
            Transforming businesses through strategy, innovation, and digital excellence.
          </p>
          <p className="text-sm text-gray-400 mt-3">
            Mumbai HQ — serving clients Pan-India
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Email: hello@innovate.consulting <br />
            Phone: +91-98765 43210
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Follow Us</h4>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
          </div>
        </div>

        {/* Professional Associations */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Professional Associations</h4>
          <div className="flex gap-4 items-center">
            <img src="/ISO9001.jpg" alt="ISO 9001" className="h-8 opacity-80" />
            <img src="/Nasscom.jpg" alt="NASSCOM Member" className="h-8 opacity-80" />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Legal / Copyright Section */}
      <div className="max-w-6xl mx-auto px-6 mt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Innovate Consulting. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          <Link href="/disclaimer" className="hover:text-gray-300">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
