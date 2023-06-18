import NavbarLink from '../navbar-link/navbar-link';
export interface NavbarProps {}

export function Navbar() {
  return (
    <nav className="fixed top-0 z-20 w-full rounded border-b border-gray-100 bg-white/80 px-2 py-2.5 backdrop-blur-md sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a className="flex items-center">
          <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Driveway Solutions NI" />{' '}
          <div className="font-inter flex flex-col self-center whitespace-nowrap">
            <span className="text-base font-semibold text-gray-900">Driveway Solutions NI</span>
            <span className="text-xs font-semibold text-gray-500">Blacktop Specialists</span>
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100  p-4  md:mt-0 md:flex-row md:space-x-8 md:border-0  md:text-sm md:font-medium">
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/services">Services</NavbarLink>
            <NavbarLink href="/contact">Contact</NavbarLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
