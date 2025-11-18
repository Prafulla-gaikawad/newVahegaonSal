import { useState } from 'react';
import { useHomeData } from '../hooks/useHomeData';
import VideoPlayer from './VideoPlayer';

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { data, loading } = useHomeData();
  const language = 'mr'; // Default to Marathi

  // Get about data from API or use fallback
  const aboutData = data?.about;
  const title = aboutData?.title?.[language] || aboutData?.title?.mr || 'आपला अभिमान, आपलं गाव';
  const description = aboutData?.description?.[language] || aboutData?.description?.mr || 'हे गाव एक शांत आणि सांस्कृतिक वारसा जपणारे ठिकाण आहे. शिक्षणाचा दर्जा चांगला असून साक्षरतेच्या दृष्टीने हे गाव प्रगत मानले जाते. स्वतःची ग्रामपंचायत असल्याने स्थानिक पातळीवर प्रशासनाची सुविधा उपलब्ध आहे. जवळच महत्त्वाची शहरे आणि बाजारपेठा असल्याने खरेदी-विक्री आणि व्यवहार सोयीस्कर होतात. गावाजवळून जाणारे राष्ट्रीय महामार्ग वाहतूक आणि संपर्कासाठी महत्त्वाचे साधन ठरतात.';
  const videoUrl = aboutData?.videoUrl;

  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="text-center">
                <p className="text-lg text-gray-600">लोड होत आहे...</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center mb-8 fade-in">
                  <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-teal-400 to-teal-600"></div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient mx-6 tracking-wide text-center">
                    {title}
                  </h2>
                  <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-teal-400 to-teal-600"></div>
                </div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify mb-10 fade-in" style={{ animationDelay: '0.2s' }}>
                  {description}
                </p>
            
                {/* Play Button - Only show if video URL exists */}
                {videoUrl && (
                  <div className="flex justify-center fade-in" style={{ animationDelay: '0.4s' }}>
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-teal-500/50 transform hover:-translate-y-2 group"
                      aria-label="Play Video"
                    >
                      <svg 
                        className="w-10 h-10 md:w-12 md:h-12 text-white ml-1 transform transition-transform group-hover:scale-110" 
                        fill="white" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"></div>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {isVideoOpen && videoUrl && (
        <VideoPlayer 
          videoUrl={videoUrl}
          onClose={() => setIsVideoOpen(false)} 
        />
      )}
    </>
  );
};

export default About;
