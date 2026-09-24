function Profile() {
  return (
    <div className="w-80 mx-auto mt-10 bg-white rounded-xl shadow-lg p-6 text-center">

      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />

      <h2 className="text-2xl font-bold mt-4">
        Narendar PT
      </h2>

      <h4 className="text-blue-600 font-semibold mt-2">
        Full Stack Developer
      </h4>

      <p className="text-gray-600 mt-3">
        I am a fresher learning React, JavaScript
        and Full Stack Development.
      </p>

      <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Follow
      </button>

    </div>
  );
}

export default Profile;