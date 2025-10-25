import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "../../data/articles";

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  // Related articles (exclude current one)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* 🏷️ Category */}
      <p className="text-blue-600 font-semibold mb-2">{article.category}</p>

      {/* 📰 Title */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        {article.title}
      </h1>

      {/* 🕓 Meta Info */}
      <p className="text-gray-500 mb-6">
        {article.date} • {article.readTime}
      </p>

      {/* 👤 Author */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src={article.author.image}
          alt={article.author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">{article.author.name}</p>
          <p className="text-gray-500 text-sm">{article.author.role || "Contributor"}</p>
        </div>
      </div>

      {/* 🖼️ Feature Image */}
      <img
        src={article.image}
        alt={article.title}
        className="w-full rounded-xl mb-10 object-cover shadow-md"
      />

      {/* 🔗 Share Buttons */}
      <div className="flex gap-6 mb-10">
        <a
          href={`https://www.linkedin.com/shareArticle?url=https://yourdomain.com/blog/${slug}`}
          target="_blank"
          className="text-blue-700 hover:underline"
        >
          Share on LinkedIn
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=https://yourdomain.com/blog/${slug}&text=${article.title}`}
          target="_blank"
          className="text-sky-500 hover:underline"
        >
          Tweet
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${article.title} https://yourdomain.com/blog/${slug}`}
          target="_blank"
          className="text-green-600 hover:underline"
        >
          WhatsApp
        </a>
      </div>

      {/* 📖 Article Content */}
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></article>

      {/* ✍️ Author Bio */}
      <section className="mt-16 border-t pt-8 flex items-center gap-6">
        <img
          src={article.author.image}
          alt={article.author.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{article.author.name}</h3>
          <p className="text-gray-600 text-sm mt-2">
            {article.author.name} is an experienced consultant specializing in{" "}
            {article.category.toLowerCase()}. With over a decade of industry
            insights, they’ve guided organizations through transformation and
            growth.
          </p>
        </div>
      </section>

      {/* 📰 Related Articles */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedArticles.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-blue-600 font-medium">
                  {item.category}
                </span>
                <h3 className="font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.excerpt}</p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💌 Newsletter Signup */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for the latest insights and industry news.
        </p>
        <div className="flex justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 rounded-md w-80"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* 📞 CTA Section */}
      <section className="mt-16 text-center">
        <h2 className="text-xl font-semibold mb-3">
          Ready to transform your business?
        </h2>
        <p className="text-gray-600 mb-6">
          Talk to our experts and discover how Innovate Consulting can help you grow.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
          Talk to an Expert
        </button>
      </section>
    </main>
  );
}
