import Link from 'next/link';

export default function TeamPreview() {
    const team =[
        {
            name : "Aarav Patel",
            title : "Founder and Strategy Director",
            expertise : "Drives business growth through data-led strategic planning",
            image : "./Male1.jpg"
        },
        {
            name : "Sara Mehta",
            title : "Digital Transformation Lead",
            expertise : "Expert in digital innovaion and process automation",
            image : "/Female1.jpg"
        },
        {
            name : "Rohan Desai",
            title : "Operations Consultant",
            expertise : "Specializes in operational efficiency and resource optimization",
            image : "/Male2.jpg"
        },
        {
            name : "Ananya Kapoor",
            title : "Finance Analyst",
            expertise : "Delivers insights to improve financial performance and investment strategy",
            image : "/Female2.jpg"
        },
    ];

    return(
        <section className="px-10 md:px-20 py-16 bg-gray-400" id="team">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Experts</h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
                    {team.map((member, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-6">
                            <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mx-auto object-cover mb-4"/>
                            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-sm text-blue-600">{member.title}</p>
                            <p className="text-gray-600 text-sm mt-2">{member.expertise}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section className='mt-12 text-center'>
        <Link href="/team" className='inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition'>
        Meet Our Team
        </Link>
      </section>
        </section>
        
    );
}