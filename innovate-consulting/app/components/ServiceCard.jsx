export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <a href="/services" className="inline-block mt-3 text-blue-600 font-medium hover:underline">
        Learn More →
      </a>
    </div>
  );
}
