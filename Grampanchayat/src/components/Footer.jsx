const Footer = () => {
  const mainMenu = [
    { label: 'होम', link: '#home' },
    { label: 'आमच्याबद्दल', link: '#about' },
    { label: 'फोटो गॅलरी', link: '#gallery' },
    { label: 'ब्लॉग', link: '#blog' },
    { label: 'संपर्क साधा', link: '#contact' },
  ];

  const otherMenu = [
    { label: 'पुरस्कार / यशोगाथा', link: '#awards' },
    { label: 'पर्यटन स्थळ', link: '#tourism' },
    { label: 'मंदिर', link: '#temple' },
    { label: 'आरोग्य दवाखाने', link: '#health' },
    { label: 'शाळा', link: '#school' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Village Info */}
          <div className="fade-in">
            <h3 className="text-2xl font-extrabold mb-5 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              वाहेगाव साळ ग्रामपंचायत
            </h3>
            <p className="text-gray-300 mb-5 leading-relaxed">
              एक समृद्ध व शांत गाव, जिथे शेती, परंपरा आणि एकतेला महत्त्व दिले जाते.
            </p>
            <a href="#about" className="text-teal-400 hover:text-teal-300 transition-all duration-300 hover:underline font-semibold inline-flex items-center gap-2">
              अधिक वाचा
              <svg className="w-4 h-4 transform transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Main Menu */}
          <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-5 text-teal-400">मुख्य मेनू</h3>
            <ul className="space-y-3">
              {mainMenu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Menu */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-5 text-teal-400">इतर मेनू</h3>
            <ul className="space-y-3">
              {otherMenu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-5 text-teal-400">आमच्याशी संपर्क साधा</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+91xxxxxxxxxx"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 hover:translate-x-1 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="hover:underline">+91 xxxxxxxxxx</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:xxxx@gmail.com"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 hover:translate-x-1 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span>
                  <span className="hover:underline">xxxx@gmail.com</span>
                </a>
              </li>
              <li className="text-gray-300 leading-relaxed">
                At/Post-वाहेगाव साळ खु तालुका-चांदवड जिल्हा-नाशिक
              </li>
              <li className="flex gap-5 mt-5">
                <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:scale-125 transform" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-pink-400 transition-all duration-300 hover:scale-125 transform" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.209 0 4 1.791 4 4 0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-red-400 transition-all duration-300 hover:scale-125 transform" aria-label="Youtube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Websites Section */}
        <div className="border-t border-gray-700 pt-10 mt-10">
          <h3 className="text-xl font-bold mb-6 text-center text-teal-400">महत्वाच्या वेबसाईट</h3>
          <div className="text-center text-gray-400">
            {/* Add important website links here */}
            <p className="italic">Important government and related websites will be listed here</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-10 text-center">
          <p className="text-gray-400">
            Copyright © 2025 <span className="text-teal-400 font-semibold">वाहेगाव साळ ग्रामपंचायत</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

