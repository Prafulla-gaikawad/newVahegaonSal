// Static leadership data with images
import sarpanchImage from '../images/sarpanchVahegaon.jpg';
import adhikariImage from '../images/श्री-गणेश-सुंदरलाल-रोकडे-grampanchayatAdhikari.jpg';
import computerOperatorImage from '../images/प्रवीण-उत्तम-खैरे-संगणक-परिचालक.jpg';
import member1Image from '../images/संदीप-अंकुश-खुरसणे-ग्रा.पंचायत-सदस्य.jpg';
import member2Image from '../images/संदीप-रामचंद्र-पवार-ग्रा.पंचायत-सदस्य.jpg';
import member3Image from '../images/अश्विनी-ललित-खैरे-ग्रा.पंचायत-सदस्य.jpg';
import member4Image from '../images/केशव-काशिनाथ-खैरे-ग्रा.पंचायत-सदस्य.jpg';
import kakaImage from '../images/kaka.jpg'; // Fallback image

const Leadership = () => {
  const language = 'mr'; // Default to Marathi

  // Static sarpanch data
  const sarpanch = {
    image: sarpanchImage,
    name: { mr: 'सौ. सविता दिपक खैरे' },
    role: { mr: 'सरपंच' },
    village: { mr: 'वाहेगाव साळ' }
  };

  // Static team members data
  const teamMembers = [
    {
      id: 1,
      image: adhikariImage,
      name: { mr: 'श्री. गणेश सुंदरलाल रोकडे' },
      role: { mr: 'ग्राम पंचायत अधिकारी' },
      village: { mr: 'वाहेगाव साळ' }
    },
    {
      id: 2,
      image: computerOperatorImage,
      name: { mr: 'प्रवीण उत्तम खैरे' },
      role: { mr: 'संगणक परिचालक' },
      village: { mr: 'वाहेगाव साळ' }
    },
    {
      id: 3,
      image: member1Image,
      name: { mr: 'संदीप अंकुश खुरसणे' },
      role: { mr: 'ग्रा.पंचायत सदस्य' },
      village: { mr: 'वाहेगाव साळ' }
    },
    {
      id: 4,
      image: member2Image,
      name: { mr: 'संदीप रामचंद्र पवार' },
      role: { mr: 'ग्रा.पंचायत सदस्य' },
      village: { mr: 'वाहेगाव साळ' }
    },
    {
      id: 5,
      image: member3Image,
      name: { mr: 'अश्विनी ललित खैरे' },
      role: { mr: 'ग्रा.पंचायत सदस्य' },
      village: { mr: 'वाहेगाव साळ' }
    },
    {
      id: 6,
      image: member4Image,
      name: { mr: 'केशव काशिनाथ खैरे' },
      role: { mr: 'ग्रा.पंचायत सदस्य' },
      village: { mr: 'वाहेगाव साळ' }
    }
  ];

  // Helper to get image URL (for backward compatibility if API data exists)
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return kakaImage;
    if (typeof imageUrl === 'string' && imageUrl.startsWith('http')) return imageUrl;
    return imageUrl || kakaImage;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading with horizontal lines */}
          <div className="flex items-center justify-center mb-12 fade-in">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-teal-400 to-teal-600"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient mx-6 tracking-wide">
              नेतृत्व
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-teal-400 to-teal-600"></div>
          </div>

          {/* Descriptive Paragraph */}
          <p className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed fade-in">
            आमचे आदरणीय सरपंच नेतृत्व समर्पण, प्रामाणिकपणा आणि विकासाच्या दृष्टिकोनाने करतात.
          </p>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Column - Sarpanch Card */}
            <div className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group">
              <div className="p-3 bg-gradient-to-br from-teal-50 via-blue-50 to-teal-100">
                <div className="bg-white rounded-xl p-5">
                  <div className="mb-6 overflow-hidden rounded-xl shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={getImageUrl(sarpanch?.image)} 
                      alt={sarpanch?.role?.[language] || sarpanch?.role?.mr || 'सरपंच'} 
                      className="w-full h-[400px] object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent mb-3">
                      {sarpanch?.name?.[language] || sarpanch?.name?.mr || 'संपूर्ण नाव'}
                    </h3>
                    <div className="inline-block px-5 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-2 shadow-md">
                      <p className="text-lg font-bold text-teal-800">
                        {sarpanch?.role?.[language] || sarpanch?.role?.mr || 'सरपंच'}
                      </p>
                    </div>
                    {sarpanch?.village && (
                      <p className="text-base text-gray-600 font-semibold">
                        {sarpanch.village?.[language] || sarpanch.village?.mr || ''}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Leadership Description Block */}
            <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-blue-700 rounded-2xl shadow-xl p-8 md:p-10 flex items-center border border-teal-500 relative overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-14 bg-white rounded-full shadow-lg"></div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">आमचे नेतृत्व</h3>
                </div>
                <p className="text-white text-lg md:text-xl leading-relaxed text-left drop-shadow-md">
                  गावाच्या सर्वांगीण विकासासाठी, शेतकऱ्यांच्या प्रगतीसाठी, महिला बालकांच्या कल्याणासाठी तसेच सामाजिक ऐक्य राखण्यासाठी आमचे सरपंच नेहमीच पुढाकार घेतात. ग्रामस्थांच्या सक्रिय सहभागाने, पंचायत प्रगती आणि एकतेसाठी काम करते.
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <div className="w-12 h-1 bg-white rounded-full shadow-md"></div>
                  <div className="w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"></div>
                  <div className="w-20 h-1 bg-white rounded-full shadow-md"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Section - Six Cards */}
          <div className="mt-24 md:mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={getImageUrl(member.image)} 
                      alt={member.role?.[language] || member.role?.mr || 'सदस्य'} 
                      className="w-full h-[350px] object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                  <div className="p-6 text-center space-y-3 bg-gradient-to-b from-white to-gray-50">
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent mb-2">
                      {member.name?.[language] || member.name?.mr || 'संपूर्ण नाव'}
                    </h3>
                    <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-2 shadow-md">
                      <p className="text-base font-bold text-teal-800">
                        {member.role?.[language] || member.role?.mr || 'सदस्य'}
                      </p>
                    </div>
                    {member.village && (
                      <p className="text-sm text-gray-600 font-semibold">
                        {member.village?.[language] || member.village?.mr || ''}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
