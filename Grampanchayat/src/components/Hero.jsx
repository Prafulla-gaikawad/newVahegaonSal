import { useState, useEffect } from 'react';
import { useHomeData } from '../hooks/useHomeData';
import backImage from '../images/back.jpg'; // Fallback image

const Hero = () => {
  const { data, loading } = useHomeData();
  const language = 'mr'; // Default to Marathi, can be made dynamic later
  const [imageError, setImageError] = useState(false);

  // Get hero data from API or use fallback
  const heroData = data?.hero;
  // If image is a relative URL from API, construct full URL, otherwise use as-is
  const heroImageUrl = heroData?.image;

  const getApiBaseUrl = () => {
    // If on localhost, check .env file first
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    }
    // For production/Netlify: Always use Render backend
    return 'https://grampanchayat-website-project-code.onrender.com/api';
  };
  
  // API returns URLs like "/api/images/..." 
  // So we need to remove /api from base URL if URL already starts with /api
  const baseUrl = getApiBaseUrl();
  
  const getImageUrl = (url) => {
    if (!url) return backImage;
    if (url.startsWith('http')) return url;
    
    // API returns URLs like "/api/images/..." 
    // VITE_API_BASE_URL is "http://localhost:5000/api"
    // So we need to remove /api from base URL if URL already starts with /api
    let finalUrl;
    if (url.startsWith('/api')) {
      // Remove /api from base URL to avoid double /api
      const baseWithoutApi = baseUrl.replace(/\/api$/, '');
      finalUrl = `${baseWithoutApi}${url}`;
    } else {
      finalUrl = `${baseUrl}${url}`;
    }
    
    // Add cache busting parameter for development to force reload
    // Use image ID as version to avoid constant reloads but still bust cache when image changes
    if (import.meta.env.DEV && url) {
      const separator = finalUrl.includes('?') ? '&' : '?';
      // Extract image ID from URL for stable cache busting
      const imageId = url.split('/').pop();
      finalUrl = `${finalUrl}${separator}v=${imageId}`;
    }
    
    // Debug logging
    console.log('Hero Image URL:', {
      original: url,
      final: finalUrl,
      baseUrl: baseUrl
    });
    
    return finalUrl;
  };
  
  const heroImage = getImageUrl(heroImageUrl);
  
  // Reset error when image URL changes
  useEffect(() => {
    setImageError(false);
  }, [heroImageUrl]);
  const villageName = heroData?.villageName?.[language] || heroData?.villageName?.mr || 'ग्रामपंचायत';
  const descriptions = heroData?.descriptions || [];

  return (
    <section id="home" className="relative h-[550px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-700 hover:scale-105"
        style={{ 
          backgroundImage: imageError ? `url(${backImage})` : `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Hidden img tag to detect load errors */}
        <img 
          src={heroImage} 
          alt="" 
          style={{ display: 'none' }}
          onError={() => {
            console.error('Hero image failed to load:', heroImage);
            setImageError(true);
          }}
          onLoad={() => {
            console.log('Hero image loaded successfully:', heroImage);
            setImageError(false);
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-teal-900/60"></div>
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10 fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl animate-float">
              <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
                {loading ? 'लोड होत आहे...' : villageName}
              </span>
            </h1>
          </div>
          {!loading && (
            <div className="space-y-5 max-w-4xl mx-auto mt-6">
              {descriptions.length > 0 ? (
                descriptions.map((desc, index) => (
                  <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <p className="text-2xl md:text-3xl mb-3 font-bold drop-shadow-lg text-white/95">
                      {desc.subtitle?.[language] || desc.subtitle?.mr || ''}
                    </p>
                    <p className="text-lg md:text-xl drop-shadow-lg text-white/90 leading-relaxed">
                      {desc.description?.[language] || desc.description?.mr || ''}
                    </p>
                  </div>
                ))
              ) : (
                // Fallback content if no descriptions
                <>
                  <div className="fade-in">
                    <p className="text-2xl md:text-3xl mb-3 font-bold drop-shadow-lg text-white/95">आपला अभिमान</p>
                    <p className="text-lg md:text-xl drop-shadow-lg text-white/90 leading-relaxed">
                      एक समृद्ध शांत गाव – जिथे परंपरा, संस्कृती आणि शेतीचा अभिमान जपला जातो.
                    </p>
                  </div>
                  <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                    <p className="text-2xl md:text-3xl mb-3 font-bold drop-shadow-lg text-white/95">विकासाच्या दिशेने</p>
                    <p className="text-lg md:text-xl drop-shadow-lg text-white/90 leading-relaxed">
                      आत्मनिर्भर आणि प्रगत गावाची निर्मिती.
                    </p>
                  </div>
                  <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                    <p className="text-2xl md:text-3xl mb-3 font-bold drop-shadow-lg text-white/95">वारसा आणि भक्ती</p>
                    <p className="text-lg md:text-xl drop-shadow-lg text-white/90 leading-relaxed">
                      मंदिरे, संस्कृती आणि अखंड श्रद्धेचे स्थान.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-24"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L60 100C120 80 240 40 360 30C480 20 600 40 720 50C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
