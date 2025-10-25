import Link from "next/link";

export default function BlogCard({ title, date, slug }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{date}</p>
      <Link href={`/blog/${slug}`} className="text-blue-600 font-medium hover:underline">
        Read More →
      </Link>
    </div>
  );
}
