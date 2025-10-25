export default function TestimonialsSection() {
    const testimonials = [
        {
            quote : "Innovate Consulting helped us redefine our digital strategy - we saw measurable improvements in efficiency and growth within months",
            name : "Priya Sharma",
            designation : "CEO",
            company : "BluePeak Solutions",
            rating : 5,
        },
        {
            quote : "Their startegic insights and execution support have been valueavle. Our sales grew over 30% after implementation",
            name : "Rohan Mehta",
            designation : "Marketing Head",
            company : "VistaTech Pvt. Ltd.",
            rating : 4,
        },
        {
            quote : "Professional, data-driven and result-oriented - a fantastic partner for any business transformation initiative",
            name : "Neha Kapoor",
            designation : "Director of Operations",
            company : "EdgeWave Global",
            rating : 5,
        },
    ];

    return(
        <section className="px-10 md:px-20 py-16 bg-cyan-100" id="testimonials">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">
                    What Our Clients Say
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition">
                            <p className="text-gray-600 italic mb-6">{t.quote}</p>
                            <div className="flex justify-center mb-2">
                                {[...Array(t.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-lg">★</span>
                                ))}
                                {[...Array(5 - t.rating)].map((_, i) => (
                                <span key={i} className="text-gray-300 text-lg">★</span>
                                ))}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">
                                {t.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {t.designation}, {t.company}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}