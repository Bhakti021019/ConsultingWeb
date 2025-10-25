import { li, p } from "framer-motion/client";
import Navbar from "../components/Navbar"

export default function ServiceDetail({
    title, image, description, includes, targetAudience, outcomes, caseStudy,
}) {
   return(
    <section className="bg-cyan-200 px-10 md:px-20 py-16">
        <Navbar />
        <div className="max-w-5xl max-auto py-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
            {image && (
                <img src={image} alt={title} className="w-full h-auto object-cover rounded-xl"/>
            )}
            <div className="text-gray-700 leading-relaxed space-y-5 mb-10">
                {description.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}
            </div>
            <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What's Included</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {includes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Who It's For</h3>
                <p className="text-gray-600">{targetAudience}</p>
            </div>

            <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Expected OutComes</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {outcomes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="text-center mt-8">
                <a href="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
                Inquire About Us
                </a>
            </div>
        </div>
    </section>
   ); 
}