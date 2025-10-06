import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icon Components ---

const SearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-6 w-6 ${className}`}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const UserIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-6 w-6 ${className}`}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const BagIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-6 w-6 ${className}`}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);


// --- Main Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "NEW IN", href: "#" },
    { 
      name: "PRODUCTS", 
      dropdown: [
        { name: "Earrings", href: "#" },
        { name: "Finger Rings", href: "#" },
        { name: "Pendants", href: "#" },
        { name: "Bracelets", href: "#" },
        { name: "Bangles", href: "#" },
        { name: "Chains", href: "#" },
      ] 
    },
    { name: "CONTACT", href: "#" },
    { name: "ABOUT", href: "#" },
  ];

  const navTextColor = isScrolled ? 'text-gray-800' : 'text-white';
  const logoColor = isScrolled ? 'text-gray-900' : 'text-white';
  const hoverBg = isScrolled ? 'hover:bg-gray-200/50' : 'hover:bg-white/20';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12 flex-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                  onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
                >
                  <a 
                    href={link.href || '#'} 
                    className={`${navTextColor} ${isScrolled ? 'hover:text-gray-600' : 'hover:text-gray-200'} tracking-wider text-sm font-medium uppercase transition-colors duration-300 flex items-center gap-2 cursor-pointer`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDownIcon />}
                  </a>
                  {/* Desktop Dropdown Menu */}
                  {link.dropdown && openDropdown === link.name && (
                    // FIX: Use padding-top on an outer wrapper to create a "hover bridge" over the gap
                    // between the link and the dropdown menu content.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-3 z-50">
                        <div className="bg-white rounded-md shadow-lg py-2">
                            {link.dropdown.map((item) => (
                                <a key={item.name} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Center: Logo */}
            <div className="flex justify-start md:justify-center flex-1">
              <a href="#" className={`text-3xl font-serif font-bold tracking-widest transition-colors duration-300 ${logoColor}`}>
                TAMP
              </a>
            </div>

            {/* Right: Icons & Mobile Menu Icon */}
            <div className="flex items-center justify-end space-x-4 md:space-x-6 flex-1">
              <button className={`hidden md:block p-2 rounded-full transition-colors duration-300 ${hoverBg}`}>
                <SearchIcon className={navTextColor} />
              </button>
              <button className={`hidden md:block p-2 rounded-full transition-colors duration-300 ${hoverBg}`}>
                <UserIcon className={navTextColor} />
              </button>
              <button className={`p-2 rounded-full transition-colors duration-300 ${hoverBg}`}>
                <BagIcon className={navTextColor} />
              </button>
              {/* Hamburger Menu Icon */}
              <button onClick={() => setIsMenuOpen(true)} className={`md:hidden p-2 rounded-full transition-colors duration-300 ${hoverBg}`}>
                <MenuIcon className={navTextColor} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- Mobile Sidebar --- */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-5">
            <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md text-gray-800 hover:bg-gray-200/50">
                <XIcon />
            </button>
        </div>
        <nav className="flex flex-col p-8">
          {navLinks.map((link) => (
            <div key={link.name} className="py-4 border-b border-gray-200">
              <a
                href={link.href || '#'}
                onClick={(e) => {
                  if (link.dropdown) {
                    e.preventDefault();
                    setOpenDropdown(openDropdown === link.name ? null : link.name);
                  }
                }}
                className="text-gray-800 hover:text-gray-600 tracking-wider text-lg font-medium uppercase flex justify-between items-center"
              >
                <span>{link.name}</span>
                {link.dropdown && <ChevronDownIcon className={`${openDropdown === link.name ? 'rotate-180' : ''}`} />}
              </a>
              {link.dropdown && openDropdown === link.name && (
                <div className="mt-4 pl-4 flex flex-col space-y-4">
                  {link.dropdown.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800 text-base font-normal uppercase tracking-wide">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
            <div className="pt-8 flex flex-col space-y-8">
              <a href="#" className="text-gray-800 hover:text-gray-600 tracking-wider text-lg font-medium uppercase flex items-center">
                <UserIcon className="text-gray-800" />
                <span className="ml-4">Account</span>
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 tracking-wider text-lg font-medium uppercase flex items-center">
                <SearchIcon className="text-gray-800" />
                <span className="ml-4">Search</span>
              </a>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
