import { useState } from 'react';

const Navigation = ({ onOpenComplaint }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'होम', link: '#home' },
    { label: 'आमच्याबद्दल', link: '#about' },
    { label: 'न्युज/अपडेट्स', link: '#news' },
    { label: 'पुरस्कार / यशोगाथा', link: '#awards' },
    { label: 'पर्यटन स्थळ', link: '#tourism' },
    { label: 'फोटो गॅलरी', link: '#gallery' },
    {
      label: 'इतर',
      submenu: [
        { label: 'मंदिर', link: '#temple' },
        { label: 'आरोग्य दवाखाने', link: '#health' },
        { label: 'शाळा', link: '#school' },
        { label: 'शेती', link: '#agriculture' },
        { label: 'सूचना फलक', link: '#notice' },
        { label: 'गावाची माहिती', link: '#village-info' },
        { label: 'पशुवैद्यकीय दवाखाने', link: '#veterinary' },
        { label: 'बचत गट माहिती', link: '#savings-group' },
        { label: 'लोकप्रिय योजना', link: '#schemes' },
        { label: 'Admin', link: '#admin-login' },
      ],
    },
    { label: 'संपर्क साधा', link: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left Side - Logo and Village Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="text-lg md:text-xl font-bold text-gray-800">
              वाहेगाव साळ ग्रामपंचायत
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.link || '#'}
                    className="text-gray-700 hover:text-teal-600 transition py-2 block text-sm font-medium"
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition text-sm"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Complaint Button */}
            <button
              onClick={onOpenComplaint}
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2 transition text-sm font-medium"
            >
              <span>तक्रार नोंदवा</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-3 pt-3">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link || '#'}
                    className="block py-2 text-gray-700 hover:text-teal-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <ul className="pl-4 mt-2 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="block py-1 text-sm text-gray-600 hover:text-teal-600 transition"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenComplaint();
              }}
              className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition"
            >
              <span>तक्रार नोंदवा</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
