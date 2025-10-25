export default function TeamMember({ name, title, bio }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-blue-700">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <p className="text-gray-500 text-sm">{bio}</p>
    </div>
  );
}
