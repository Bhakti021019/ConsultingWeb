import Link from 'next/link';
import TeamMember from '../components/TeamMember';
import { AboutFirm } from '../data/AboutFirm';
import { companyInfo } from "../data/companyInfo";
import Navbar from "../components/Navbar"

export default function AboutPage() {
    return(
        <main className="px-10 md:px-20 py-16 bg-purple-300">

          <Navbar />

          <section>
        <h2 className="text-3xl font-bold mb-4">About Company</h2>
        {AboutFirm.aboutCompany.map((para, idx) => (
          <p key={idx} className="mb-4">{para}</p>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        {AboutFirm.companyStory.map((para, idx) => (
          <p key={idx} className="mb-4">{para}</p>
        ))}
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-2">Mission</h3>
        <p>{AboutFirm.missionStatement}</p>
      </section>

      <section className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">Vision</h3>
        <p>{AboutFirm.visionStatement}</p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AboutFirm.coreValues.map((value, idx) => (
            <div key={idx} className="p-4 border rounded shadow-sm">
              <h4 className="font-bold mb-2">{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4">{companyInfo.approach.title}</h2>
        <p className="mb-2">{companyInfo.approach.workWithClients}</p>
        <p className="mb-2">{companyInfo.approach.methodology}</p>
        <p className="mb-2">{companyInfo.approach.differentiation}</p>
        <p>{companyInfo.approach.clientRelationship}</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">{companyInfo.achievements.title}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Years in Business:</strong> {companyInfo.achievements.yearsInBusiness}</li>
          <li><strong>Clients Served:</strong> {companyInfo.achievements.clientsServed}</li>
          <li><strong>Success Rate:</strong> {companyInfo.achievements.successRate}</li>
          <li><strong>Awards:</strong> {companyInfo.achievements.awards.join(', ')}</li>
          <li><strong>Industry Recognitions:</strong> {companyInfo.achievements.industryRecognitions.join(', ')}</li>
          <li><strong>Professional Memberships:</strong> {companyInfo.achievements.professionalMemberships.join(', ')}</li>
        </ul>
      </section>

      <section className='mt-12 text-center'>
        <Link href="/team" className='inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition'>
        Meet Our Team
        </Link>
      </section>
    </main>
  );
}