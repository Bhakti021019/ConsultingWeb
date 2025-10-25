import { AboutFirm } from '../data/AboutFirm';

export default function AboutPage() {
    return(
        <main className="max-w-5xl mx-auto px-6 py-16">
      <section>
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        {aboutFirm.companyStory.map((para, idx) => (
          <p key={idx} className="mb-4">{para}</p>
        ))}
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-2">Mission</h3>
        <p>{aboutFirm.missionStatement}</p>
      </section>

      <section className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">Vision</h3>
        <p>{aboutFirm.visionStatement}</p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutFirm.coreValues.map((value, idx) => (
            <div key={idx} className="p-4 border rounded shadow-sm">
              <h4 className="font-bold mb-2">{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}