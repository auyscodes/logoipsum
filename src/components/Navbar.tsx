const NavBar = () => {
  return (
    <nav className="py-8 px-4 lg:px-10">
      <div className="flex justify-between">
        <a href="/">
          <img
            src="https://micro-team.netlify.app/_nuxt/img/logo.54d64d2.svg"
            alt="logoipsum"
          />
        </a>
        <div className="flex justify-between hidden lg:block">
          <a className="px-4 text-gray-800" href="/about">
            About
          </a>
          <a className="px-4 text-gray-800" href="/contact">
            Contact
          </a>
        </div>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
