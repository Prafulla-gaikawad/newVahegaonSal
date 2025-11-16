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
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Village Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">वाहेगाव साळ ग्रामपंचायत</h3>
            <p className="text-gray-300 mb-4">
              एक समृद्ध व शांत गाव, जिथे शेती, परंपरा आणि एकतेला महत्त्व दिले जाते.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition">
              अधिक वाचा
            </a>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="text-xl font-bold mb-4">मुख्य मेनू</h3>
            <ul className="space-y-2">
              {mainMenu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Menu */}
          <div>
            <h3 className="text-xl font-bold mb-4">इतर मेनू</h3>
            <ul className="space-y-2">
              {otherMenu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">आमच्याशी संपर्क साधा</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+91xxxxxxxxxx"
                  className="text-gray-300 hover:text-white transition flex items-center gap-2"
                >
                  <span>📞</span>
                  <span>+91 xxxxxxxxxx</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:xxxx@gmail.com"
                  className="text-gray-300 hover:text-white transition flex items-center gap-2"
                >
                  <span>✉️</span>
                  <span>xxxx@gmail.com</span>
                </a>
              </li>
              <li className="text-gray-300">
                At/Post-वाहेगाव साळ खु तालुका-चांदवड जिल्हा-नाशिक
              </li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-400 transition" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" className="hover:text-blue-400 transition" aria-label="Youtube">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Websites Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <h3 className="text-xl font-bold mb-4 text-center">महत्वाच्या वेबसाईट</h3>
          <div className="text-center text-gray-400">
            {/* Add important website links here */}
            <p>Important government and related websites will be listed here</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>Copyright © 2025 Vadalibhoi Gram Panchayat. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

