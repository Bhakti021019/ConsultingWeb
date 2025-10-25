import { leadershipTeam } from '../data/leadershipTeam';
import { seniorTeam } from '../data/seniorTeam';

export default function TeamPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* Leadership Team Section */}
      <section>
        <h1 className="text-4xl font-bold mb-8 text-center">Leadership Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((leader, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow-lg text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{leader.name}</h2>
              <p className="text-gray-600 mb-1">{leader.title}</p>
              <p className="text-gray-500 mb-1">{leader.credentials}</p>
              <p className="text-gray-500 mb-4">{leader.experience}</p>
              <div className="text-left text-sm space-y-2 mb-4">
                {leader.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="flex justify-center gap-4 text-blue-600">
                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                {leader.email && <a href={`mailto:${leader.email}`}>Email</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Senior Team Section */}
      <section>
        <h1 className="text-4xl font-bold mb-8 text-center">Senior Team Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seniorTeam.map((member, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow-md text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-gray-600 mb-1">{member.title}</p>
              <p className="text-gray-500 mb-1">{member.credentials}</p>
              <p className="text-gray-500 mb-4">{member.experience}</p>
              <div className="text-left text-sm space-y-2 mb-4">
                {member.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="flex justify-center gap-4 text-blue-600">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                {member.email && <a href={`mailto:${member.email}`}>Email</a>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
