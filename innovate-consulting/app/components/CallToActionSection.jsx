export default function CallToActionSection() {
    return(
        <section className="bg-blue-700 text-white md:px-20 py-16 text-center" id="contact-cta">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-8 text-blue-100">Let's discuss your business goals and create a strategy that drives results</p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/contact" className="px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition">
                        Book a free consultation
                    </a>

                    <a href="mailto:contact@innovateconsulting.com" className="px-6 py-3 border border-white rounded-full font-semibold hover:bg-blue-600 transition">Email Use</a>
                </div>

                <p className="mt-6 text-sm text-blue-100">Prefer to talk? Call us at <span className="font-semibold">+919879563210</span></p>
            </div>
        </section>
    );
}