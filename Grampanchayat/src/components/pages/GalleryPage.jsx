import PageHero from '../PageHero';
import backImage from '../../images/back.jpg';
import sarpanchImage from '../../images/sarpanchVahegaon.jpg';
import adhikariImage from '../../images/श्री-गणेश-सुंदरलाल-रोकडे-grampanchayatAdhikari.jpg';
import computerOperatorImage from '../../images/प्रवीण-उत्तम-खैरे-संगणक-परिचालक.jpg';
import member1Image from '../../images/संदीप-अंकुश-खुरसणे-ग्रा.पंचायत-सदस्य.jpg';
import member2Image from '../../images/संदीप-रामचंद्र-पवार-ग्रा.पंचायत-सदस्य.jpg';
import member3Image from '../../images/अश्विनी-ललित-खैरे-ग्रा.पंचायत-सदस्य.jpg';
import member4Image from '../../images/केशव-काशिनाथ-खैरे-ग्रा.पंचायत-सदस्य.jpg';
import mandirImage from '../../images/mandir.jpg';
import infoImage from '../../images/info.jpg';
import paryatanImage from '../../images/paryatan.jpg';
import puraskarImage from '../../images/puraskar.jpg';
import schoolImage from '../../images/vahegaonSchool.jpg';

const GalleryPage = () => {
  // Only show images that are actually used in the website
  const images = [
    { id: 1, src: backImage, alt: 'Hero Background Image' },
    { id: 2, src: sarpanchImage, alt: 'Sarpanch Image' },
    { id: 3, src: adhikariImage, alt: 'Gram Panchayat Adhikari' },
    { id: 4, src: computerOperatorImage, alt: 'Computer Operator' },
    { id: 5, src: member1Image, alt: 'Gram Panchayat Member 1' },
    { id: 6, src: member2Image, alt: 'Gram Panchayat Member 2' },
    { id: 7, src: member3Image, alt: 'Gram Panchayat Member 3' },
    { id: 8, src: member4Image, alt: 'Gram Panchayat Member 4' },
    { id: 9, src: mandirImage, alt: 'Temple Image' },
    { id: 10, src: infoImage, alt: 'Information Image' },
    { id: 11, src: paryatanImage, alt: 'Tourism Image' },
    { id: 12, src: puraskarImage, alt: 'Awards Image' },
    { id: 13, src: schoolImage, alt: 'School Image' },
  ];

  return (
    <div>
      <PageHero 
        title="फोटो गॅलरी" 
        subtitle="माहिती"
        image={backImage}
      />
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
                फोटो गॅलरी
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-teal-400 to-teal-600"></div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[300px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold text-sm drop-shadow-lg">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

