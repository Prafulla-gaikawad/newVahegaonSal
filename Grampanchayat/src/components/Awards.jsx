// Award images
import awardImage1 from '../images/puraskar.jpg';
import awardImage2 from '../images/puraskar.jpg';
import awardImage3 from '../images/puraskar.jpg';

const Awards = () => {
  const awards = [
    {
      id: 1,
      image: awardImage1,
      title: 'सौर ऊर्जेवर पुरस्कार',
      description: 'सौर ऊर्जा यशस्वी उपक्रम, नवीन ऊर्जा आणि घर आणि शाळांसाठी पर्यावरणास अनुकूल योजना.',
      date: '22 Sep 2025',
      category: 'पुरस्कार / यशोगाथा',
      village: 'वाहेगाव साळ'
    },
    {
      id: 2,
      image: awardImage2,
      title: 'जलसंधारणातील गौरव',
      description: 'यशस्वी जलसंधारणामुळे पाण्याची उपलब्धता सुधारली, पाण्याच्या स्रोतांची शुद्धी, विहिरींचे संरक्षण आणि पाणी साठवणूक वाढवणे.',
      date: '22 Sep 2025',
      category: 'पुरस्कार / यशोगाथा',
      village: 'वाहेगाव साळ'
    },
    {
      id: 3,
      image: awardImage3,
      title: 'TB मुक्त पंचायत पुरस्कार',
      description: 'TB मुक्त पंचायत पुरस्कार हा एक सकारात्मक आणि प्रेरणादायी उदाहरण आहे, गावातील आरोग्य सेवा आणि सार्वजनिक सहभागाचे परिणाम.',
      date: '22 Sep 2025',
      category: 'पुरस्कार / यशोगाथा',
      village: 'वाहेगाव साळ'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="flex items-center justify-center mb-12 fade-in">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-teal-400 to-teal-600"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient mx-6 tracking-wide">
              पुरस्कार / यशोगाथा
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-teal-400 to-teal-600"></div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {awards.map((award, index) => (
              <div 
                key={award.id}
                className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container with Avatar Overlay */}
                <div className="relative overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-[280px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Award Badge */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                {/* Metadata Bar */}
                <div className="px-6 pt-5 pb-3 space-y-3 bg-gradient-to-b from-white to-gray-50">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 rounded-full">
                      <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">{award.village}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-full">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">{award.date}</span>
                    </div>
                  </div>
                </div>

                {/* Award Title */}
                <div className="px-6 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent mb-3">
                    {award.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-6 pb-6">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

