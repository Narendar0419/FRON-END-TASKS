function Resnavbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Logo */}
        <div className="text-2xl font-bold">
          MyWebsite
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">

          <a href="#" className="hover:text-blue-400">
            Home
          </a>

          <a href="#" className="hover:text-blue-400">
            About
          </a>

          <a href="#" className="hover:text-blue-400">
            Services
          </a>

          <a href="#" className="hover:text-blue-400">
            Contact
          </a>

          <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Resnavbar;