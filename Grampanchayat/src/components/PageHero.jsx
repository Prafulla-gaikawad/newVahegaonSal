const PageHero = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-[350px] md:h-[450px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-teal-900/70"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10 fade-in">
        <div className="container mx-auto px-4 text-center">
          {subtitle && (
            <p className="text-sm md:text-base mb-3 opacity-90 font-medium tracking-wider uppercase slide-up">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold drop-shadow-2xl slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
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

export default PageHero;

